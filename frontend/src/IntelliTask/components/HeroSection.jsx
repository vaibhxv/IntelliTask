import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <main className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white min-h-screen flex flex-col justify-between">
      <header className="py-16 text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-6xl font-extrabold mb-6">Welcome to IntelliTask</h1>
          <p className="text-xl mb-8">Simplify, organize, and manage your projects with ease.</p>
          <Link
            to='/auth/register'
            className='inline-block bg-yellow-500 px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300'
          >
            Get Started Now
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-4">Real-Time Collaboration</h2>
            <p className="text-lg mb-6">Work together with your team in real-time, breaking down communication barriers and enhancing productivity.</p>
            <img src="/assets/collaboration.png" alt="Real-Time Collaboration" className="w-full" />
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-4">Task Management</h2>
            <p className="text-lg mb-6">Easily organize and manage your tasks, ensuring everyone stays on track and deadlines are met.</p>
            <img src="/assets/task-management.png" alt="Task Management" className="w-full" />
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-4">Project Monitoring</h2>
            <p className="text-lg mb-6">Monitor the progress of your projects with detailed statistics and real-time updates.</p>
            <img src="/assets/project-monitoring.png" alt="Project Monitoring" className="w-full" />
          </div>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-bold mb-4">Seamless Workflow</h2>
            <p className="text-lg mb-6">Enjoy a seamless workflow with our intuitive and user-friendly interface, designed to boost productivity.</p>
            <img src="/assets/seamless-workflow.png" alt="Seamless Workflow" className="w-full" />
          </div>
        </div>
      </section>

      <footer className="bg-indigo-700 py-10 text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-4">Ready to transform your project management?</h2>
          <Link
            to='/auth/register'
            className='inline-block bg-yellow-500 px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300'
          >
            Join IntelliTask Today
          </Link>
        </div>
      </footer>
    </main>
  );
}