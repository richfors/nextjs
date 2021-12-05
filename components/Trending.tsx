import Card from "./Card";

const Trending = ({ trending }) => {
  return (
    <div>
      {trending[0].results.map((movie) => (
        <Card data={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Trending;
