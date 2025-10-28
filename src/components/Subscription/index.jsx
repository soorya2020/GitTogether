import { useNavigate } from "react-router";
import { BASE_URL, SUBSCRIPTION_PLANS } from "../../utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PremiumPage from "./PremiumPage";

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
      const response = await axios.get(BASE_URL + "/payment/verify", {
        withCredentials: true,
      });
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
      const response = await axios.post(
        BASE_URL + "/payment/order",
        { memberShipType },
        { withCredentials: true }
      );

      const { amount, id, key, currency } = response.data.order;
      const { firstName, lastName, email } = response.data.user;
      var options = {
        key: key,
        amount: amount,
        currency: currency,
        name: "GitTogether",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-6 py-10">
      <h2 className="text-4xl font-bold mb-4 text-center">Choose Your Plan</h2>
      <p className="text-center mb-10 text-base-content/70 max-w-md">
        Unlock the full GitTogether experience. Whether you’re connecting,
        collaborating, or leading a dev team — there’s a plan for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {SUBSCRIPTION_PLANS.map((plan, index) => (
          <div
            key={index}
            className={`card shadow-xl bg-base-100 hover:scale-105 transition-transform duration-300 border flex ${
              plan.highlight ? "border-primary" : "border-base-300"
            }`}
          >
            <div className="card-body">
              <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              <p className="text-3xl font-semibold text-center my-3">
                {plan.price}
              </p>
              <ul className="space-y-2 my-4">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {/* <Check className="text-success h-4 w-4" /> */}
                    <span>✅</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-center mt-4">
                <button
                  id="rzp-button1"
                  onClick={() => handleSubscriptionClick(plan.type)}
                  className={`btn ${plan.color} w-full`}
                >
                  {plan.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
