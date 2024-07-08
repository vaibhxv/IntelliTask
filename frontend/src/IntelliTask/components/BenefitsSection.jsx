
export const BenefitsSection = () => {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Discover IntelliTask</h1>
          <p className="text-xl text-gray-600">Your ultimate solution for project management and team collaboration.</p>
        </header>
        
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
            <div className="lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Statistics and Project Monitoring</h2>
              <p className="text-lg text-gray-600 mb-6">Access detailed statistics for your projects, and track progress in real-time with accurate counts of tasks in progress and on track.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">Learn More</button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0 shadow-lg rounded-lg overflow-hidden">
              <img src="/assets/taskunity-dashboard.png" alt="Taskunity Dashboard" className="w-full" />
            </div>
          </div>
        </section>
  
        <section className="mb-20 bg-blue-50 p-10 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
            <div className="lg:w-1/2 shadow-lg rounded-lg overflow-hidden mb-10 lg:mb-0">
              <img src="/assets/taskunity-collaborators.png" alt="Taskunity Dashboard" className="w-full" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Work in Real Time with Your Team</h2>
              <p className="text-lg text-gray-600 mb-6">Add collaborators to your projects and work in real time. There are no more barriers to communication and cooperation.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">Get Started</button>
            </div>
          </div>
        </section>
  
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
            <div className="lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Tasks and Set Deadlines Accurately</h2>
              <p className="text-lg text-gray-600 mb-6">Plan every task in your project. Set deadlines and keep your team on the same page with a seamless workflow.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">See Features</button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0 shadow-lg rounded-lg overflow-hidden">
              <img src="/assets/taskunity-tasks.png" alt="Taskunity Dashboard" className="w-full" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
  
}