const ReviewCard = ({
  customerName,
  review,
}: {
  customerName: string;
  review: string;
}) => {
  return (
    <div className="chat chat-start">
      <div className="chat-header">{customerName} said:</div>
      <div className="chat-bubble w-full">{review}</div>
    </div>
  );
};

export default ReviewCard;
