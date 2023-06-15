"use client";

import Image from 'next/image';

export default function CardDescription({title,description,logo}) {
  return (
    <div className='card-description'>
      <div className="card-description-img flex center-xy">
        <Image src="/next.svg" width={200} height={200} />
      </div>
      <div className="card-description-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
