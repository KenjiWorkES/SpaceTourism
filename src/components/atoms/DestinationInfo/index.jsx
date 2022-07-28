const DestinationInfo = ({ label, value }) => {
  return (
    <div className="destination__info">
      <label className="destination__label subTitle subTitle--secondary subTitle--condensed">
        {label}
      </label>
      <h4 className="subTitle subTitle--normal">{value}</h4>
    </div>
  );
};

export default DestinationInfo;
