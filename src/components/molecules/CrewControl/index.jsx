import { CrewItem } from "../../atoms";

const CrewControl = ({ currentIndex, items }) => {
  return (
    <ul className="crew__controller">
      {items.map((item, index) => {
        if (index === currentIndex) {
          return <CrewItem key={index} index={index} isActive={true} />;
        } else {
          return <CrewItem key={index} index={index} />;
        }
      })}
    </ul>
  );
};

export default CrewControl;
