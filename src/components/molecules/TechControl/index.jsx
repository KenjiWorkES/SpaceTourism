import { TechItem } from "../../atoms";

const TechControl = ({ currentIndex, items, onChange }) => {
  return (
    <ul className="tech__controller">
      {items.map((item, index) => {
        if (index === currentIndex) {
          return (
            <TechItem
              key={index}
              index={index}
              isActive={true}
              onChange={onChange}
            />
          );
        } else {
          return <TechItem key={index} index={index} onChange={onChange} />;
        }
      })}
    </ul>
  );
};

export default TechControl;
