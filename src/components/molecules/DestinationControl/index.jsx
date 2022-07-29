import { DestinationItem } from "../../atoms";

const DestinationControl = ({ items, currentIndex, onChange }) => {
  return (
    <ul className="destination__controller">
      {items.map((item, index) => {
        if (index === currentIndex) {
          return (
            <DestinationItem
              key={index}
              index={index}
              item={item}
              isActive={true}
              onChange={onChange}
            />
          );
        } else {
          return (
            <DestinationItem
              key={index}
              index={index}
              item={item}
              onChange={onChange}
            />
          );
        }
      })}
    </ul>
  );
};

export default DestinationControl;
