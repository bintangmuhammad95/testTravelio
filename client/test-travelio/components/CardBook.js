import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import StarRatings from "react-star-ratings";

export const CardBook = ({
  key,
  image,
  title,
  author,
  rating,
  found,
  onClick,
}) => {
  return (
    <div key={key}>
      <div className="w-full border rounded-xl flex flex-col hover:shadow-2xl hover:transition-all ease-in-out cursor-pointer">
        <div className="w-full h-auto items-center flex-1 flex">
          <img
            src={image}
            alt=""
            className="rounded-t-xl rounded-r-xl justify-center w-full"
          />
        </div>

        <div className="flex flex-col p-2">
          <div className="flex flex-col justify-between grow">
            <div className="small:text-[10px] bigMonitor:text-[12px] text-[#374151] line-clamp-2 mb-2">
              {author}
            </div>
            <div className="small:text-[16px] font-medium break-all mb-2">
              {title}
            </div>
            <div className="small:text-[12px] font-medium break-all mb-2">
              {/* {rating} */}
              <StarRatings
                starRatedColor="orange"
                rating={rating}
                starDimension="20px"
                starSpacing="5px"
              />
            </div>
          </div>

          <div className="mt-auto mx-auto w-full">
            <ButtonPrimary
              onClick={onClick}
              title={found ? "Remove from whishlist" : "Add to whishlist"}
              ouline
              className="small:text-[12px] bigMonitor:text-[14px] rounded-xl text-secondary font-semibold w-full py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
