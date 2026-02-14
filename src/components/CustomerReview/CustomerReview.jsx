import "./CustomerReview.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Maxn Raval",
    image: "/src/assets/review-1.png",
  },
  {
    name: "venely k",
    image: "/src/assets/review-2.png",
  },
  {
    name: "Lii thakur",
    image: "/src/assets/review-3.png",
  },
];

const CustomerReview = () => {
  return (
    <section className="review-section">
      <div className="container">

        <h2 className="section-title">Customer Review</h2>

        <div className="review-grid">
          {reviews.map((review, index) => (
            <div className="review-card glass" key={index}>

              <div className="review-top">
                <img src={review.image} alt="user" />

                <div className="review-user">
                  <h4>{review.name}</h4>

                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="star-half" />
                  </div>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReview;