import { useState } from "react";

import { TechControl } from "../../molecules";
import { Paragraph } from "../../atoms";

import tech from "../../../data/tech.json";

const TechContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedTech = tech[currentIndex];

  const changeTechHandler = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="title title--smallest tech__subTitle">
        <span className="tech__number">03</span>
        Space Launch 101
      </h2>
      <div className="tech__container">
        <img
          className="tech__image"
          src={"/assets/technology/" + selectedTech.landscape}
          alt=""
        />
      </div>
      <div className="tech__container">
        <TechControl
          currentIndex={currentIndex}
          onChange={changeTechHandler}
          items={tech}
        />
        <div>
          <h4 className="subTitle subTitle--secondary subTitle--condensed tech__terminology">
            The Terminology...
          </h4>
          <h1 className="title title--medium tech__name">
            {selectedTech.name}
          </h1>
          <Paragraph>{selectedTech.desc}</Paragraph>
        </div>
      </div>
    </>
  );
};

export default TechContent;
