import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card glass-card">
      <h4>{review.name}</h4>
      <p>{review.text}</p>
    </div>
  );
};

export default ReviewCard;