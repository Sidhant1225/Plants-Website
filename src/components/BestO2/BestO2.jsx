import "./BestO2.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BestO2 = () => {
  return (
    <section className="besto2-section">
      <div className="container">

        <h2 className="section-title">Our Best o2</h2>

        <div className="besto2-card glass">

          {/* LEFT IMAGE */}
          <div className="besto2-image">
            <img src="/src/assets/plant-7.png" alt="best plant" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="besto2-content">
            <h3>
              We Have Small And Best O2 Plants Collection’s
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>

            <button className="btn-outline">Explore</button>

            {/* Slider Controls */}
            <div className="besto2-controls">
              <FiChevronLeft />
              <span>01/04</span>
              <FiChevronRight />
            </div>
          </div>

        </div>

        {/* Bottom Dots */}
        <div className="besto2-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default BestO2;