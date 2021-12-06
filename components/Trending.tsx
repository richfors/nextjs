import Card from "./Card";

const Trending = ({ trending }) => {
  return (
    <div>
      <section className="p-5 mb-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 intems-start">
        {trending[0].results.map((movie) => (
          <Card data={movie} key={movie.id} />
        ))}
      </section>
    </div>
  );
};

export default Trending;
