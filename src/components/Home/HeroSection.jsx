import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Zap } from "lucide-react";

const HeroSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Decorative blobs (CSS only – no JS animation) */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl opacity-70" />

        {/* Content */}
        <div className="relative container mx-auto px-6 text-center">
          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white mb-8">
              Stop Begging for
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contributors on GitHub
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              <span className="font-mono font-black tracking-tighter text-secondary drop-shadow-[0_0_8px_rgba(var(--s),0.5)] before:content-['{'] after:content-['}'] before:text-yellow-500 after:text-yellow-500">
                {"GitTogether"}
              </span>
              {` is Tinder for developers. Swipe right on real humans who actually
              want to ship code with you.`}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/login">
                <m.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl flex items-center gap-3 will-change-transform"
                >
                  <Zap className="w-6 h-6" />
                  Join the Waitlist — Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </m.button>
              </Link>

              <m.button
                whileHover={{ scale: 1.04 }}
                className="px-10 py-5 text-xl font-semibold rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20"
              >
                Watch Demo
              </m.button>
            </div>

            {/* Social proof */}
            <div className="mt-16 text-gray-300 text-lg">
              Already{" "}
              <span className="font-black text-2xl text-cyan-400">1,892</span>{" "}
              developers matched ·{" "}
              <span className="font-black text-2xl text-pink-400">47</span>{" "}
              projects shipped
            </div>
          </m.div>
        </div>

        {/* Scroll hint (CSS animation, no JS loop) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </LazyMotion>
  );
};

export default HeroSection;
