import React from "react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex justify-center">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`text-[24px] mr-[4px] ${
              starValue <= rating ? "text-[#FFD700]" : "text-[#d3d3d3]"
            }`}
          >
            {starValue <= rating ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
