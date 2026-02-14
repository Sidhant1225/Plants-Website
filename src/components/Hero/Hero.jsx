import "./Hero.css";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Large Plant */}
      <img src="/src/assets/plant-2.png" alt="bg plant" className="hero-bg" />

      <div className="container hero-wrapper">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>Breathe Natural</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="hero-buttons">
            <button className="btn-outline">Explore</button>

            <button className="btn-play">
              <span className="play-circle">
                <FaPlay size={12} />
              </span>
              Live Demo
            </button>
          </div>
        </div>

        {/* RIGHT PRODUCT CARD */}
        <div className="hero-product glass">
          <img src="/src/assets/plant-7.png" alt="product" />

          <div className="product-content">
            <span className="small-text">Trendy House Plant</span>
            <h3>Calathea plant</h3>
            <button className="btn-outline">Buy Now</button>

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

      </div>

      {/* REVIEW CARD */}
      <div className="hero-review glass">
        <div className="review-top">
          <img src="/src/assets/group 9.png" alt="user" id="alana"/>
          
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt...
        </p>
      </div>

    </section>
  );
};

export default Hero;