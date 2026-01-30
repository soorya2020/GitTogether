// import { LazyMotion, domAnimation, m } from "framer-motion";
// import {
//   SiReact,
//   SiTypescript,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiPostgresql,
//   SiPrisma,
//   SiTailwindcss,
//   SiDocker,
//   SiVercel,
//   SiSocketdotio,
//   SiFramer,
// } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";


// const stack = [
//   { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
//   { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
//   { name: "Next.js", icon: TbBrandNextjs, color: "text-white" },
//   { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
//   { name: "Express", icon: SiExpress, color: "text-white" },
//   { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
//   { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
//   { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
//   { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
//   { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
//   { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
//   { name: "Vercel", icon: SiVercel, color: "text-white" },
//   { name: "Framer Motion", icon: SiFramer, color: "text-[#FF4D4D]" },
// ];

// const SectionStack = () => {
//   const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

//   return (
//     <LazyMotion features={domAnimation}>
//       <section className="py-24 lg:py-32 bg-gradient-to-b from-base-200 to-base-300 overflow-hidden">
//         <div className="container mx-auto px-6 max-w-7xl">
//           {/* Headline */}
//           <m.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-center mb-16 lg:mb-20"
//           >
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
//               Built Like It’s 2025
//             </h2>
//             <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
//               Built with a modern, high-performance stack. No legacy overhead—just fast, scalable architecture designed for production.
//             </p>
//           </m.div>

//           {/* Grid (NO motion per item) */}
//           <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 lg:gap-12 ">
//             {stack.map((tech) => {
//               const Icon = tech.icon;
//               return (
//                 <div
//                   key={tech.name}
//                   className="group relative transition-transform duration-300 hover:scale-110 will-change-transform "
//                 >
//                   {/* Glow */}
//                   <div className="absolute inset-0 rounded-3xl bg-current opacity-10 blur-2xl group-hover:opacity-25 transition-opacity" />

//                   {/* Card */}
//                   <div className=" h-40 relative bg-base-100/90 rounded-3xl p-6 lg:p-4 shadow-lg border border-base-300 hover:border-primary/50 transition-colors">
//                     <Icon
//                       className={`w-12 h-12 lg:w-16 lg:h-16 mx-auto ${tech.color}`}
//                     />
//                     <p className="mt-4 text-sm lg:text-base font-semibold text-center text-base-content/90">
//                       {tech.name}
//                     </p>
//                   </div>

//                   {/* Tooltip */}
//                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                     <div className="bg-black text-white text-xs px-3 py-1 rounded-full">
//                       {tech.name}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Bottom tagline */}
          
//         </div>
//       </section>
//     </LazyMotion>
//   );
// };

// export default SectionStack;
