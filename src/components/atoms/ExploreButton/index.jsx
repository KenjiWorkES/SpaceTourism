import { useNavigate } from "react-router-dom";

const ExploreButton = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/destination");
  };

  return (
    <button onClick={onClickHandler} className="explore">
      Explore
    </button>
  );
};

export default ExploreButton;
