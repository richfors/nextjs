import NextImage from "next/image";

export function MovieImage(props) {
  if (!props.image) {
    return <NextImage className="object-cover w-full h-64" {...props} />;
  }

  return (
    <NextImage
      layout="responsive"
      objectFit="cover"
      width={props.image.width}
      height={props.image.height}
      src="https://image.tmdb.org/t/p/w500/{url}"
      alt=""
    />
  );
}
