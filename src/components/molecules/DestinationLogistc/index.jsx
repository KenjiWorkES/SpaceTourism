import { DestinationInfo } from "../../atoms";

const DestinationLogistc = ({ items }) => {
  return (
    <div className="destination__logistc">
      <DestinationInfo label="Avg.Distance" value={`${items[0].distance} Km`} />
      <DestinationInfo label="Est. travel time" value={items[0].travel} />
    </div>
  );
};

export default DestinationLogistc;
