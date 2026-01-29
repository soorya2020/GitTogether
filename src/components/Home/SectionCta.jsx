import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router";

const SectionCta = () => {
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
      <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-pink-600">
        {/* Background blobs – CSS only */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative container mx-auto px-6 max-w-5xl text-center">
          {/* Motion container */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8">
              Stop Coding Alone.
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Start Shipping With Legends.
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-primary-content/90 mb-12 max-w-3xl mx-auto font-medium">
              Your next co-founder, mentor, or pair-programming addict is
              already here.
              <br className="hidden md:block" />
              Don’t make them wait.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/login">
                <m.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group px-10 py-6 text-lg lg:text-xl font-bold rounded-2xl bg-white text-primary shadow-2xl flex items-center gap-3 will-change-transform"
                >
                  <Zap className="w-6 h-6" />
                  Get Started Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </m.button>
              </Link>

              {/* Social proof */}
              <p className="text-white/90 text-lg">
                Join{" "}
                <span className="font-black text-2xl text-yellow-300">
                  3,247
                </span>{" "}
                developers shipping right now
              </p>
            </div>

            {/* Trust line */}
            <p className="mt-12 text-white/70 text-sm md:text-base">
              No credit card • Cancel anytime • Built by devs, for devs
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default SectionCta;
