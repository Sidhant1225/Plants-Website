import "./TopSelling.css";
import { FiShoppingBag } from "react-icons/fi";

// ✅ Import all images properly
import plant1 from "../../assets/plant-1.png";
import plant2 from "../../assets/plant-2.png";
import plant3 from "../../assets/plant-3.png";
import plant4 from "../../assets/plant-4.png";
import plant5 from "../../assets/plant-5.png";
import plant6 from "../../assets/plant-6.png";

const plants = [
  plant1,
  plant2,
  plant3,
  plant4,
  plant5,
  plant6,
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