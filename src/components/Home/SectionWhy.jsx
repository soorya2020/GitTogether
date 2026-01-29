import { motion } from "framer-motion";
import { Users, Rocket, MessageCircle } from "lucide-react"; // <-- add lucide-react (npm i lucide-react)

const SectionWhy = () => {
  const reasons = [
    {
      icon: Users,
      title: "Find Your Coding Tribe",
      desc: "Get matched with developers who actually use the same stack, work the same hours, and don’t ghost after day 2.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Ship Real Projects, Fast",
      desc: "Stop collecting half-baked repos. Pair up, pick a goal, and push production-grade code together — in days, not months.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "Zero Bullshit Networking",
      desc: "No more LinkedIn cringe. Talk shop, roast bad code, share wins, and actually make friends who code.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-base-200 to-base-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Why GitTogether Isn’t Just Another Dev App
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Because solo grinding is overrated and most “communities” are ghost towns.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Glassmorphic / Neumorphic card */}
                <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-base-100/80 backdrop-blur-xl shadow-xl border border-base-300 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30">
                  {/* Gradient orb background */}
                  <div
                    className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${reason.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700`}
                  />

                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-lg mb-6`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-lg text-base-content/80 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionWhy;