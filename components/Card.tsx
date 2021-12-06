import { MovieImage } from "./Image";
const Card = ({ data }) => {
  const posterSrc = "https://image.tmdb.org/t/p/w500" + data.poster_path;

  return (
    <div key={data.id} className="max-w-2xl">
      <a
        href="#"
        className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <MovieImage
          src={posterSrc}
          width="300"
          height="500"
          alt="testing"
          className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        />
        <div className="p-4 flex flex-col justify-between leading-normal">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {data.name ? data.name : data.title}
          </h5>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {data.overview}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
