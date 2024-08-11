const ReviewCard = ({
  customerName,
  review,
}: {
  customerName: string;
  review: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm font-extralight">{customerName} said:</div>
      <div className="font-medium">"{review}"</div>
    </div>
  );
};

export default ReviewCard;
