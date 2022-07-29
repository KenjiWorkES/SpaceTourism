import { TechControl } from "../../molecules";
import { Paragraph } from "../../atoms";

const TechContent = () => {
  return (
    <>
      <h2 className="title title--smallest tech__subTitle">
        <span className="tech__number">03</span>
        Space Launch 101
      </h2>
      <div className="tech__container">
        <img
          className="tech__image"
          src={"/assets/technology/image-spaceport-landscape.jpg"}
          alt=""
        />
      </div>
      <div className="tech__container">
        <TechControl />
        <h4 className="subTitle subTitle--secondary subTitle--condensed tech__terminology">
          The Terminology...
        </h4>
        <h1 className="title title--medium tech__name">SPACEPORT</h1>
        <Paragraph>
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </Paragraph>
      </div>
    </>
  );
};

export default TechContent;
