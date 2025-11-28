//FOR PROD
// export const BASE_URL = "/api";

//FOR DEV
// export const BASE_URL =
//   location.hostname === "localhost" ? "http://localhost:8000" : "/api";

export const SUBSCRIPTION_PLANS = [
  {
    type: "free",
    name: "Free Plan",
    price: "₹0",
    features: [
      "Create your developer profile",
      "Connect with 5 users/month",
      "Access community feeds",
    ],
    btnText: "Get Started",
    color: "btn-outline",
  },
  {
    type: "premium",
    name: "Pro Developer",
    price: "₹199 /month",
    features: [
      "Unlimited connections",
      "Priority match algorithm",
      "Access to private dev meetups",
    ],
    btnText: "Go Pro",
    color: "btn-primary",
    highlight: true,
  },
  {
    type: "professionals",
    name: "Team Plan",
    price: "₹499 /month",
    features: [
      "Create dev teams & projects",
      "Collaborate with up to 10 devs",
      "Dedicated chat & version hub",
    ],
    btnText: "Start Team",
    color: "btn-secondary",
  },
];
