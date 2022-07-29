const TechItem = ({ isActive, index, onChange }) => {
  const classes = `tech__item ${isActive ? "tech__item--active" : ""}`;

  return (
    <li onClick={onChange.bind(null, index)} className={classes}>
      {index + 1}
    </li>
  );
};

export default TechItem;
