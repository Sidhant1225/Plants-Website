import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="section">
      <div className="container feature glass-card">
        <img src="/plants/plant1.png" alt="Featured" />
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