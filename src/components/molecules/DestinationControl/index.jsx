import { DestinationItem } from "../../atoms";

const DestinationControl = ({ items, currentIndex }) => {
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
            />
          );
        } else {
          return <DestinationItem key={index} index={index} item={item} />;
        }
      })}
    </ul>
  );
};

export default DestinationControl;
