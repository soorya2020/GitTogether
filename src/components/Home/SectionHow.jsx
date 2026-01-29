import { motion } from "framer-motion";
import { UserPlus, Sparkles, GitBranch } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Dev Card",
    desc: "One profile. Your stack, timezone, vibe, and GitHub heat — no résumé bullshit.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Sparkles,
    title: "Swipe. Match. Skip the Small Talk.",
    desc: "Mutual like = instant match. No “hey” messages. Jump straight into voice notes or project ideas.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: GitBranch,
    title: "Ship Together in Hours, Not Weeks",
    desc: "Built-in repos, live pair-programming, task boards, and deployment — all inside the app.",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const SectionHow = () => {
  return (
    <section className="py-24 lg:py-32 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            From Stranger to Co-Founder in 3 Steps
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            No events. No Discord spam. Just real matches that actually build shit.
          </p>
        </motion.div>

        {/* Timeline-style steps */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative group"
              >
                {/* Step number circle */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:top-auto md:-left-4 md:-translate-y-1/2">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-content font-black text-2xl shadow-2xl ring-8 ring-base-100">
                    {idx + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="pt-10 md:pt-0 h-full bg-base-200/50 backdrop-blur-sm border border-base-300 rounded-3xl p-8 lg:p-10 hover:bg-base-200/80 hover:border-primary/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                  {/* Gradient icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-xl mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-base-content/80 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Arrow on hover (desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <svg className="w-12 h-12 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoinWidth="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionHow;