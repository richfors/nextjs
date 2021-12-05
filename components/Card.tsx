const Card = ({ data }) => {
  return (
    <div key={data.id} className="max-w-2xl">
      {console.log(data.id)}
    </div>
  );
};

export default Card;
