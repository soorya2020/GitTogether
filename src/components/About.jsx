import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("developerAboutModal");
    if (!hasSeenModal) {
      console.log("entering not");

      setIsOpen(true);
      localStorage.setItem("developerAboutModal", "true");
    }
  }, []);

  return (
    <>
      {/* Button to reopen modal if closed */}
      {!isOpen && (
        <button
          className="btn btn-sm btn-outline fixed bottom-3 z-50"
          onClick={() => setIsOpen(true)}
        >
          About GitTogether
        </button>
      )}

      {/* DaisyUI Modal */}
      {isOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              <span className="text text-primary">🧑‍💻</span> GitTogether
            </h2>

            <p className="text-sm text-gray-600 mb-4 text-center">
              A developer networking platform built using the MERN stack — where
              coders connect, collaborate, and grow together.
            </p>

            <div className="divider"></div>

            <h3 className="font-semibold text-lg mb-2">🚀 Key Features</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Secure authentication with JWT + cookies.</li>
              <li>Personalized developer feeds.</li>
              <li>Manage and chat with your connections.</li>
              <li>Premium membership via Razorpay.</li>
              <li>Email notifications using AWS SES.</li>
              <li>Deployed on AWS EC2 with NGINX and SSL.</li>
            </ul>

            <div className="divider"></div>

            <h3 className="font-semibold text-lg mb-2">🛠️ Tech Stack</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              React (Vite) • Tailwind CSS • DaisyUI • Redux Toolkit • Node.js •
              Express.js • MongoDB • Razorpay • AWS SES • Socket.io • AWS EC2
            </p>

            <div className="divider"></div>

            <h3 className="font-semibold text-lg mb-2">🧠 What I Learned</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Implementing secure authentication, integrating payment gateways,
              managing AWS deployment, and building scalable full-stack systems
              with real-time features.
            </p>

            <div className="divider"></div>

            <p className="text-sm text-center text-gray-600">
              Built by{" "}
              <span className="font-semibold text-indigo-600">
                <Link to={"https://github.com/soorya2020/backend"}>
                  Soorya Krishnanunni
                </Link>
              </span>{" "}
              <br />
              💼 Full Stack Developer | MERN | AWS | System Design
            </p>

            <div className="modal-action">
              <button
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Explore GitTogether 🚀
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default About;
