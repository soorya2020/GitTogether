import { useNavigate } from "react-router";
import { SUBSCRIPTION_PLANS } from "../../utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PremiumPage from "./PremiumPage";
import { API } from "../../utils/axios";

const Subscription = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.userReducer.user);

  const [error, setError] = useState(false);
  const [isPremium, setIsPremium] = useState(user?.isPremium || false);

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    try {
      const response = await API.get("/payment/verify");
      if (response.data.isPremium) {
        setIsPremium(true);
      } else {
        setIsPremium(false);
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubscriptionClick = async (memberShipType) => {
    if (memberShipType === "free") {
      navigate("/feeds");
    }
    try {
      const response = await API.post("/payment/order", { memberShipType });

      const { amount, id, key, currency } = response.data.order;
      const { firstName, lastName, email } = response.data.user;
      var options = {
        key: key,
        amount: amount,
        currency: currency,
        name: "GitTogether",
        description: "Test Transaction",
        // image: "https://example.com/your_logo",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1NTk5Y2MiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNyA4LTQgNCA0IDQiIC8+PHBhdGggZD0ibTE3IDggNCA0LTQgNCIgLz48cGF0aCBkPSJNMTQgNGwtNCAxNiIgLz48L3N2Zz4=",
        order_id: id,

        prefill: {
          firstName,
          lastName,
          email,
          contact: "+7561071554",
        },
        notes: {
          firstName,
          lastName,
          memberShipType,
        },
        theme: {
          color: "#5599cc",
        },
        handler: verifyPremiumUser,
      };

      var rzp1 = new Razorpay(options);

      rzp1.open();
    } catch (error) {
      console.error(error.message);
    }
  };

  if (isPremium) return <PremiumPage />;
  return (
    <div className="min-h-screen bg-base-200 px-6 py-20 flex flex-col items-center">
      {/* HEADER SECTION */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase">
          Level Up Your <span className="text-primary">Workflow</span>
        </h2>
        <p className="text-base-content/60 max-w-lg mx-auto font-medium">
          Choose the engine that powers your networking. From solo devs to
          engineering teams, we've got you covered.
        </p>
      </div>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {SUBSCRIPTION_PLANS.map((plan, index) => (
          <div
            key={index}
            className={`card relative bg-base-100 transition-all duration-500 overflow-visible
          ${
            plan.highlight
              ? "shadow-2xl scale-105 border-2 border-primary z-10"
              : "shadow-lg border border-base-300 hover:border-base-content/20"
          }`}
          >
            {/* POPULAR BADGE */}
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-md">
                Most Popular
              </div>
            )}

            <div className="card-body p-8">
              <div className="mb-6">
                <h3 className="text-xl font-black uppercase tracking-widest opacity-70">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm opacity-50 font-bold">/month</span>
                </div>
              </div>

              <div className="divider opacity-50"></div>

              {/* FEATURE LIST */}
              <ul className="space-y-4 my-6 flex-grow">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group text-sm font-medium"
                  >
                    <div className="mt-1 bg-success/10 p-0.5 rounded-full text-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ACTION BUTTON */}
              <div className="card-actions mt-auto">
                <button
                  id="rzp-button1"
                  onClick={() => handleSubscriptionClick(plan.type)}
                  className={`btn btn-block h-14 rounded-xl font-black transition-all active:scale-95
                ${
                  plan.highlight
                    ? "btn-primary shadow-[0_10px_20px_-10px_rgba(var(--p),0.5)]"
                    : "btn-outline border-2"
                }`}
                >
                  {plan.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TRUST INDICATOR */}
      <p className="mt-12 text-sm opacity-40 flex items-center gap-2 font-mono">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Secure payment powered by Razorpay
      </p>
    </div>
  );
};

export default Subscription;
