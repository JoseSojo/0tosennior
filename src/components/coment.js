"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Coment({name,country,com}) {

  return (
    <article
      className="rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm"
    >

      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <span className="block text-xs text-gray-500">
          {name}
        </span>
		<span className="block text-xs text-gray-500">
          {country}
        </span>

        <p>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {com}
          </h3>
        </p>
      </div>
    </article>
  );
}
