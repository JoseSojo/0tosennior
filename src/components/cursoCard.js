"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/nav';

export default function CardCurso({img, title, time, description, modal}) {

  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt={title}
        src={img}
        className="h-56 w-50 object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500">
          {time}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            {title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
      </div>
      <div>
        <button data-modal-target={modal} data-modal-toggle={modal} className='block text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5text-center' type='button'>Tomar Clase</button>
      </div>
    </article>

  );
}
