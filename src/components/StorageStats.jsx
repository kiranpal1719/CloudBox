import React from "react";
import { motion } from "framer-motion";
import { 
  FolderLock, 
  ShieldCheck, 
  HardDrive, 
  Share2, 
  Zap, 
  CloudRain 
} from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "File Vault",
    description: "Store your photos, videos, and private files with high security.",
    badge: "Storage",
    bgGradient: "bg-gradient-to-br from-green-50/80 via-emerald-100/60 to-teal-50/80",
    icon1: <FolderLock className="w-5 h-5 text-emerald-600" />,
    icon2: <ShieldCheck className="w-5 h-5 text-teal-600" />,
  },
  {
    id: 2,
    title: "Auto Sync",
    description: "Access your documents from any phone, laptop, or web browser.",
    badge: "Cloud",
    bgGradient: "bg-gradient-to-br from-blue-50/80 via-sky-100/60 to-indigo-50/80",
    icon1: <HardDrive className="w-5 h-5 text-blue-600" />,
    icon2: <Zap className="w-5 h-5 text-indigo-600" />,
  },
  {
    id: 3,
    title: "Easy Share",
    description: "Share files and folders securely with custom link permissions.",
    badge: "Sharing",
    bgGradient: "bg-gradient-to-br from-purple-50/80 via-violet-100/60 to-fuchsia-50/80",
    icon1: <Share2 className="w-5 h-5 text-purple-600" />,
    icon2: <CloudRain className="w-5 h-5 text-violet-600" />,
  },
  {
    id: 4,
    title: "Bank Security",
    description: "End-to-end encryption ensures only you can open your files.",
    badge: "Privacy",
    bgGradient: "bg-gradient-to-br from-amber-50/80 via-orange-100/60 to-yellow-50/80",
    icon1: <ShieldCheck className="w-5 h-5 text-amber-600" />,
    icon2: <FolderLock className="w-5 h-5 text-orange-600" />,
  },
];

function StorageStats() {
  return (
    <section className="bg-slate-50/50 py-12 px-4 sm:px-8 lg:px-16 w-full overflow-hidden">
      
      {/* Header Container */}
      <div className="max-w-7xl mx-auto mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
          Everything you need for personal storage
        </h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">
          Built to keep your personal data organized, secure, and accessible everywhere.
        </p>
      </div>

      {/* Horizontal Scrollable Row */}
      <div className="max-w-7xl mx-auto">
        <div 
          className="
            flex 
            gap-6 
            overflow-x-auto 
            pb-8 
            pt-2 
            snap-x 
            snap-mandatory 
            scroll-smooth
            [scrollbar-width:none] 
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {statsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`
                /* Dimensions */
                w-[85vw] 
                xs:w-[70vw] 
                sm:w-[320px] 
                md:w-[350px] 
                flex-shrink-0 
                snap-center
                
                /* Glassmorphism & Gradient UI */
                ${item.bgGradient}
                backdrop-blur-md
                rounded-3xl 
                p-6 
                border 
                border-white/80 
                shadow-sm 
                hover:shadow-md 
                hover:scale-[1.02]
                transition-all 
                duration-300
                flex 
                flex-col 
                justify-between 
                relative
              `}
            >
              {/* Top Icons Row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xs border border-white/60">
                  {item.icon1}
                </div>
                <div className="p-2.5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xs border border-white/60">
                  {item.icon2}
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Right Pill Tag */}
              <div className="flex justify-end">
                <span className="px-3 py-1 bg-black/10 backdrop-blur-md text-slate-700 text-xs font-semibold rounded-full border border-white/40">
                  {item.badge}
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default StorageStats;