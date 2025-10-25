import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Footer from './Footer'

const Home = () => {
  return (
    <div data-theme="bumblebee" className="bg-base-100 text-base-content overflow-hidden">
      {/* HERO SECTION */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-5 text-5xl font-extrabold leading-tight">
              Connect. Collaborate. Code. 💻
            </h1>
            <p className="mb-6 text-lg">
              GitTogether is where developers meet, match, and build amazing
              projects together. Discover like-minded coders, share ideas, and
              create your next big thing — one commit at a time.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary">
                <Link to={"/login"}>Join Now</Link>
              </button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-base-200">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why GitTogether?
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3 px-6 md:px-10">
          {[
            {
              title: "👩‍💻 Find Developers",
              desc: "Match with developers who share your interests, tech stacks, and project goals.",
            },
            {
              title: "🚀 Collaborate on Projects",
              desc: "Team up and work on open-source or side projects — grow your GitHub and skills.",
            },
            {
              title: "💬 Network & Learn",
              desc: "Engage with a thriving community of coders, designers, and tech enthusiasts.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 bg-base-100 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-8 md:px-20">
          {[
            {
              step: "1️⃣ Create a Profile",
              desc: "Show your skills, interests, and GitHub repos — let others see what makes you unique.",
            },
            {
              step: "2️⃣ Swipe & Connect",
              desc: "Discover devs nearby or worldwide. Like their profile to start a match and chat instantly.",
            },
            {
              step: "3️⃣ Build Something Cool",
              desc: "Once connected, brainstorm ideas and collaborate using GitTogether’s project tools.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="max-w-sm bg-base-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{item.step}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-16 bg-base-200 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Built with Modern Tech ⚙️
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "JWT Auth",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="badge badge-outline text-sm md:text-base py-3 px-4 hover:scale-105 transition-transform"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-primary text-primary-content">
        <motion.h2
          className="text-4xl font-bold mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Build Your Dev Circle?
        </motion.h2>
        <motion.p
          className="mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sign up today and find your next coding partner, mentor, or
          co-founder.
        </motion.p>
        <motion.button
          className="btn btn-accent"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
