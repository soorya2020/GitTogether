import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const PremiumPage = () => {
  const user = useSelector((store) => store.userReducer.user);
 const formatDate = (isoString) => {
  if (!isoString) return "N/A";
  
  return new Date(isoString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-6 py-10 relative overflow-hidden">
      {/* DECORATIVE BACKGROUND ELEMENTS (Subtle Blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="card scale-95 w-full max-w-md bg-base-100 shadow-2xl rounded-[2.5rem] border border-primary/20 relative z-10 overflow-hidden">
        {/* TOP STRIPE/GLOW */}
        <div className="h-2 w-full bg-primary shadow-[0_0_20px_rgba(var(--p),0.5)]"></div>

        <div className="card-body items-center text-center">
          {/* ICON/AVATAR AREA */}
          <div className="relative mb-4">
            <div className="w-20 h-20 bg-primary text-primary-content rounded-full flex items-center justify-center shadow-lg ring-4 ring-primary/20 ring-offset-4 ring-offset-base-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-success text-success-content text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter shadow-sm">
              Active
            </div>
          </div>

          <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none mb-2">
            Pro <span className="text-primary">Shipmate</span>
          </h1>

          <p className="text-base-content/70 text-sm font-medium leading-relaxed">
            High five,{" "}
            <span className="text-base-content font-black">{user.userName}</span>!
            You're officially running on a{" "}
            <span className="text-primary font-bold">Premium Stack</span>. Ready
            to build?
          </p>

          {/* PERKS GRID */}
          <div className="grid grid-cols-2 gap-2 mt-8 w-full">
            <div className="bg-base-200 rounded-2xl p-3 flex flex-col items-center gap-1 border border-base-content/5">
              <span className="text-lg">🚫</span>
              <span className="text-[10px] font-black uppercase opacity-60">
                Zero Ads
              </span>
            </div>
            <div className="bg-base-200 rounded-2xl p-3 flex flex-col items-center gap-1 border border-base-content/5">
              <span className="text-lg">⚡</span>
              <span className="text-[10px] font-black uppercase opacity-60">
                Priority
              </span>
            </div>
          </div>

          {/* PRIMARY ACTIONS */}
          <div className="mt-10 w-full space-y-3">
            <Link
              to="/feeds"
              className="btn btn-primary btn-block rounded-xl shadow-[0_10px_20px_-10px_rgba(var(--p),0.5)] font-black text-lg h-14"
            >
              Explore Feeds
            </Link>
            <button className="btn btn-ghost btn-block text-xs opacity-50 font-bold uppercase tracking-widest hover:bg-transparent hover:opacity-100">
              Manage Subscription
            </button>
          </div>

          {/* FOOTER TEXT */}
          <div className="mt-8 pt-6 border-t border-base-content/5 w-full flex justify-between items-center opacity-40">
            <span className="text-[10px] font-mono uppercase tracking-widest">
              ID: {user._id}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest">
              {formatDate(user.createdAt)}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-8 text-base-content/40 text-xs font-mono uppercase tracking-[0.3em]">
        // git commit -m "upgrade to premium"
      </p>
    </div>
  );
};

export default PremiumPage;
