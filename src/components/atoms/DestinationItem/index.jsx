const DestinationItem = ({ index, item, isActive, onChange }) => {
  const classes = `destination__item ${
    isActive ? "destination__item--active" : ""
  }`;

  return (
    <li className={classes} onClick={onChange.bind(null, index)}>
      {item}
    </li>
  );
};

export default DestinationItem;
