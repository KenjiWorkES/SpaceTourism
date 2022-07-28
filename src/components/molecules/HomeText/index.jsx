import { Paragraph } from "../../atoms/";

const HomeText = () => {
  return (
    <div className="home__text">
      <h2 className="title title--smallest title--secondary home__subTitle">
        SO, YOU WANT TO TRAVEL TO
      </h2>
      <h1 className="title title--largest home__title">Space</h1>
      <Paragraph>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Paragraph>
    </div>
  );
};

export default HomeText;
