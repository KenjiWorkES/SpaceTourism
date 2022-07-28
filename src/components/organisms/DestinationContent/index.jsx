import { DestinationControl, DestinationLogistc } from "../../molecules";
import { Paragraph } from "../../atoms";

const DestinationContent = () => {
  return (
    <>
      <div className="destination__container">
        <h2>
          <span>01</span>
          Pick Your Destination
        </h2>
        <img src="/assets/destination/image-europa.png" />
      </div>
      <div className="destination__container">
        <DestinationControl />
        <h1>Europa</h1>
        <Paragraph>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </Paragraph>
        <DestinationLogistc />
      </div>
    </>
  );
};

export default DestinationContent;
