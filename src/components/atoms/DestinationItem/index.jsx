const DestinationItem = ({ index, item, isActive }) => {
  const classes = `destination__item ${
    isActive ? "destination__item--active" : ""
  }`;

  return <li className={classes}>{item}</li>;
};

export default DestinationItem;
