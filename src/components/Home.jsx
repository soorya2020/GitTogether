import React from "react";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?_gl=1*13he0f*_ga*MjI1NTc4OTIwLjE3NjEwNjQ2Mzk.*_ga_8JE65Q40S6*czE3NjEwNzQyNjUkbzIkZzEkdDE3NjEwNzQzMTkkajYkbDAkaDA.)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
