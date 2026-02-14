import "./TrendSection.css";
import { FiShoppingBag } from "react-icons/fi";

const TrendSection = () => {
  return (
    <section className="trendy-section">

      <div className="container">

        <h2 className="section-title">Our Trendy plants</h2>

        <div className="trend-card glass">
          <div className="trend-image">
            <img src="/src/assets/plant-2.png" alt="plant" />
          </div>

          <div className="trend-content">
            <h3>For Small Decs Ai Plat</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <h4>Rs. 599/-</h4>

            <div className="trend-buttons">
              <button className="btn-outline">Explore</button>
              <button className="icon-btn">
                <FiShoppingBag />
              </button>
            </div>
          </div>
        </div>

        <div className="trend-card glass reverse">
          <div className="trend-image">
            <img src="/src/assets/plant-1.png" alt="plant" />
          </div>

          <div className="trend-content">
            <h3>For Fresh Decs Ai Plat</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <h4>Rs. 579/-</h4>

            <div className="trend-buttons">
              <button className="btn-outline">Explore</button>
              <button className="icon-btn">
                <FiShoppingBag />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrendSection;