import React from "react";
import { Link } from "react-router";

const PremiumPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-indigo-100 to-blue-100 p-6">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500">
          🎉 Premium Member
        </h1>

        <p className="mt-4 text-gray-600">
          Welcome{" "}
          <span className="font-semibold text-indigo-600">[User Name]</span>!
          You are a proud Premium user of{" "}
          <span className="font-semibold">GitTogether</span>.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <div className="badge badge-primary badge-outline">No Ads</div>
          <div className="badge badge-secondary badge-outline">
            Priority Access
          </div>
          <div className="badge badge-accent badge-outline">
            Exclusive Features
          </div>
        </div>

        <div className="mt-8">
          <button className="btn btn-accent w-full mb-2">
            <Link to={"/feeds"}>Explore Feeds</Link>
          </button>
          <button className="btn btn-outline w-full">
            Manage Subscription
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          Member since <span className="font-medium text-gray-700">[Date]</span>
        </div>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        Thank you for supporting us ❤️
      </p>
    </div>
  );
};

export default PremiumPage;
