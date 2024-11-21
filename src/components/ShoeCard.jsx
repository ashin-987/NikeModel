const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt={`${imgURL.name} shoe image`} // More descriptive alt text
          width={127}
          height={103.34}
          className="object-contain"
          onError={(e) => (e.target.src = "/fallback-image.jpg")} // Handle image load error
        />
      </div>
    </div>
  );
};

export default ShoeCard;
