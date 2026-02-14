import "./TopSelling.css";
import { FiShoppingBag } from "react-icons/fi";

const plants = [
  "/src/assets/plant-1.png",
  "/src/assets/plant-2.png",
  "/src/assets/plant-3.png",
  "/src/assets/plant-4.png",
  "/src/assets/plant-5.png",
  "/src/assets/plant-6.png",
];

const TopSelling = () => {
  return (
    <section className="topselling-section">
      <div className="container">

        <h2 className="section-title">Our Top Selling</h2>

        <div className="topselling-grid">
          {plants.map((img, index) => (
            <div className="topselling-card glass" key={index}>

              <div className="card-image">
                <img src={img} alt="plant" />
              </div>

              <div className="card-content">
                <h3>Calathea plant</h3>
                <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>

                <div className="price-row">
                  <span>Rs. 359/-</span>
                  <button className="icon-btn">
                    <FiShoppingBag />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopSelling;