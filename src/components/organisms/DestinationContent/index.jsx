import { useState } from "react";

import destination from "../../../data/destination.json";
import { DestinationControl, DestinationLogistc } from "../../molecules";
import { Paragraph } from "../../atoms";

const DestinationContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedDestination = destination[currentIndex];
  const controlElements = destination.map((item) => item.name);
  const logistcElements = destination.map((item) => ({
    distance: item.distance,
    travel: item.travel,
  }));

  const changeDestinationHandler = (index) => {
    setCurrentIndex(index);
  };

  console.log(selectedDestination);

  return (
    <>
      <div className="destination__container">
        <h2 className="title title--smallest destination__subTitle">
          <span className="destination__number">01</span>
          Pick Your Destination
        </h2>
        <img
          className="destination__image"
          src={"/assets/destination/" + selectedDestination.image}
          alt={"Picture of " + selectedDestination.name}
        />
      </div>
      <div className="destination__container">
        <DestinationControl
          items={controlElements}
          currentIndex={currentIndex}
          onChange={changeDestinationHandler}
        />
        <h1 className="title title--large destination__title">
          {selectedDestination.name}
        </h1>
        <Paragraph>{selectedDestination.desc}</Paragraph>
        <DestinationLogistc items={logistcElements} />
      </div>
    </>
  );
};

export default DestinationContent;
