import { CrewItem } from "../../atoms";

const CrewControl = ({ currentIndex, items, onChange }) => {
  return (
    <ul className="crew__controller">
      {items.map((item, index) => {
        if (index === currentIndex) {
          return (
            <CrewItem
              key={index}
              index={index}
              isActive={true}
              onChange={onChange}
            />
          );
        } else {
          return <CrewItem key={index} index={index} onChange={onChange} />;
        }
      })}
    </ul>
  );
};

export default CrewControl;
