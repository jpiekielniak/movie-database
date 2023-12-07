import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const useStarRating = (numberOfStars: number): JSX.Element[] => {
  const stars: JSX.Element[] = [];

  for (let i = 0; i < Math.floor(numberOfStars); i++) {
    stars.push(<FaStar key={i} color="gold" />);
  }

  if (numberOfStars % 1 !== 0) {
    stars.push(<FaStarHalfAlt key={stars.length} color="gold" />);
  }

  return stars;
};

export default useStarRating;
