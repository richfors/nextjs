const Card = ({ data }) => {
  return (
    <div key={data.id} className="max-w-2xl">
      {data.media_type}
    </div>
  );
};

export default Card;
