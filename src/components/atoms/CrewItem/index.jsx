const CrewItem = ({ isActive, index, onChange }) => {
  const classes = `crew__item ${isActive ? "crew__item--active" : ""}`;

  return <li className={classes}></li>;
};

export default CrewItem;
