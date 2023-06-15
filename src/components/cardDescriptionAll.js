"use client";

import Image from 'next/image';

export default function CardDescriptionAll({title,description}) {
  return (
    <div className='card-description-all'>
      <div className="card-description-all-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
