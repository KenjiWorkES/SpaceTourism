import { CrewControl } from "../../molecules";
import { Paragraph } from "../../atoms";

const CrewContent = () => {
  return (
    <>
      <div className="crew__container">
        <h2 className="title title--smallest crew__subTitle">
          <span className="crew__number">01</span>
          Meet your crew
        </h2>
        <img
          className="crew__image"
          src="/assets/crew/image-mark-shuttleworth.png"
          alt=""
        />
      </div>
      <div className="crew__container">
        <CrewControl />
        <h4 className="title title--small crew__function">Commander</h4>
        <h1 className="title title--medium crew__name">Douglas Hurley</h1>
        <Paragraph>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </Paragraph>
      </div>
    </>
  );
};

export default CrewContent;
