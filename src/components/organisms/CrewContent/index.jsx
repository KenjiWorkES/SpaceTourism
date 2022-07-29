const CrewContent = () => {
  return (
    <>
      <div className="crew__container">
        <h2 className="title title--smallest crew__subTitle">
          <span className="crew__number">01</span>
          Meet your crew
        </h2>
        <img
          className="crew"
          src={"/assets/crew/" + selectedDestination.image}
          alt={"Picture of " + selectedDestination.name}
        />
      </div>
      <div className="destination__container">
        <CrewControl
          items={controlElements}
          currentIndex={currentIndex}
          onChange={changeDestinationHandler}
        />
        <h4 className="title title--large destination__title">
          {selectedDestination.name}
        </h4>
        <h1 className="title title--large destination__title">
          {selectedDestination.name}
        </h1>
        <Paragraph>{selectedDestination.desc}</Paragraph>
      </div>
    </>
  );
};

export default CrewContent;
