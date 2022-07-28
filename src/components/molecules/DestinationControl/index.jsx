import { DestinationItem } from "../../atoms";

const DestinationControl = ({ items }) => {
  return (
    <ul className="destination__controller">
      {items.map((item, index) => {
        return <DestinationItem key={index} index={index} item={item} />;
      })}
    </ul>
  );
};

export default DestinationControl;
