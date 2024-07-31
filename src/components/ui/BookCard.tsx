import Image from "next/image";
import React from "react";

interface BookCardProps {
  title: string;
  image: string;
  volume: number;
}

const BookCard = ({ title, image, volume }: BookCardProps) => {
  return (
    <section>
      <div>
        <Image
          src={image}
          alt={title}
          width={150}
          height={300}
          className="m-2 rounded-xl border border-primary-500 shadow-lg shadow-primary/50"
        />
      </div>
      <div>
        <h2 className="... mx-2 w-[150px] overflow-clip truncate text-nowrap text-sm">{title}</h2>
        <p className="mx-2 text-xs text-gray-300">{volume} | 20</p>
      </div>
    </section>
  );
};

export default BookCard;
