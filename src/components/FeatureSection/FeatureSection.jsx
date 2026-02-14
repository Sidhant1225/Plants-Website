import "./FeatureSection.css";

// ✅ Correct import
import plant1 from "../../assets/plant1.png";

const FeatureSection = () => {
  return (
    <section className="section">
      <div className="container feature glass-card">
        <img src={plant1} alt="Featured" />
        <div>
          <h2>We Have Small And Best O2 Plants Collection</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="outline-btn">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;