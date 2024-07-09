import User from '../models/User.js';
import { generateUniqueId } from '../helpers/generateUniqueId.js';
import { generateJWT } from '../helpers/generateJWT.js';
import { sendConfirmationEmail, sendResetPasswordEmail } from '../services/emailService.js';
import { front } from '../config/config.js';

export const createUser = async (req, res) => {

  const { email, name, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: '' });
  }

  try {
    const newUser = new User({ email, name, password });
    newUser.token = generateUniqueId();

    const user = await newUser.save();
    user.confirmed = true;
    await user.save();
  
   // sendConfirmationEmail(user.email, `${front.URL}/auth/confirm-account/${user.token}`);

    return res.status(201).json({ message: '' });
  } catch (error) {
    return res.status(500).json({ message: '' });
  }
};

export const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'Invalid' });
  }

  if (!user.confirmed) {
    return res.status(403).json({ message: '' });
  }

  if (await user.checkpassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    })
  } else {
    return res.status(403).json({ message: '' });
  }
}

export const confirmUser = async (req, res) => {
  const token = req.params.token;

  const user = await User.findOne({ token });

  if (!user) {
    return res.status(404).json({ message: 'Error' });
  }

  try {
    user.confirmed = true;
    user.token = '';
    await user.save();
    return res.json({ message: '' });
  } catch (error) {
    return res.status(500).json({ message: '' }, error);
  }
}

export const sendEmailPasswordReset = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: `` });
  }

  try {
    user.token = generateUniqueId();
    await user.save();

    sendResetPasswordEmail(
      user.email, 
      `${front.URL}/auth/reset-password/${user.token}`
    );

    return res.json({ message: `` });
  } catch (error) {
    return res.status(500).json({ message: '' }, error);
  }
}

export const verifyToken = async (req, res) => {
  const token = req.params.token;

  const user = await User.findOne({ token });

  if (!user) {
    return res.status(404).json({ message: '' });
  }
  return res.json({ message: 'Token valid.' });
}

export const resetPassword = async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;

  const user = await User.findOne({ token });

  if (!user) {
    return res.status(404).json({ message: '' });
  }

  try {
    user.password = password;
    user.token = '';
    await user.save();
    return res.json({ message: '' });
  } catch (error) {
    return res.status(500).json({ message: 'Error' }, error);
  }
}

export const profile = async (req, res) => {
  res.json({ user: req.user });
}