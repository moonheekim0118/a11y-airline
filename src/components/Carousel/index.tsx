import "./style.css";

import TravelCard from "@components/TravelCard";
import Controller from "@components/Carousel/Controller";

import { data } from "../../__mocks__/data";
import useCarousel from "./hook";

const DATA_SIZE = data.length;

const Carousel = () => {
  const { slide, slideRef, handleSlideToPrev, handleSlideToNext } =
    useCarousel(DATA_SIZE);

  return (
    <div>
      <h2>지금 떠나기 좋은 여행</h2>

      <div className="carousel">
        <ul className="carousel__list" ref={slideRef}>
          {data.map(
            ({
              id,
              href,
              imageSrc,
              departure,
              destination,
              seat,
              tripType,
              price,
            }) => (
              <li className="carousel__item" key={id}>
                <TravelCard
                  href={href}
                  imageSrc={imageSrc}
                  departure={departure}
                  destination={destination}
                  seat={seat}
                  tripType={tripType}
                  price={price}
                />
              </li>
            )
          )}
        </ul>
        <Controller
          handleClickPrevButton={handleSlideToPrev}
          handleClickNextButton={handleSlideToNext}
          max={DATA_SIZE}
          slide={slide}
        />
      </div>
    </div>
  );
};

export default Carousel;
