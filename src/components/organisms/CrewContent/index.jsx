import { useState } from "react";

import { CrewControl } from "../../molecules";
import { Paragraph } from "../../atoms";
import crew from "../../../data/crew.json";

const CrewContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedCrewmate = crew[currentIndex];

  const imageClasses = `crew__image crew__image--${selectedCrewmate.function.toLowerCase()}`;

  const changeCrewmateHandler = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="crew__container">
        <h2 className="title title--smallest crew__subTitle">
          <span className="crew__number">01</span>
          Meet your crew
        </h2>
        <img
          className={imageClasses}
          src={"/assets/crew/" + selectedCrewmate.image}
          alt=""
        />
      </div>
      <div className="crew__container">
        <CrewControl
          currentIndex={currentIndex}
          items={crew}
          onChange={changeCrewmateHandler}
        />
        <h4 className="title title--small crew__function">
          {selectedCrewmate.function}
        </h4>
        <h1 className="title title--medium crew__name">
          {selectedCrewmate.name}
        </h1>
        <Paragraph>{selectedCrewmate.desc}</Paragraph>
      </div>
    </>
  );
};

export default CrewContent;
