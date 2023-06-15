"use client";

import Image from 'next/image';

export default function PlanCard({time, plan, skils,img}) {
  return(
    <article
      className="rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm"
    >

      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <time datetime="2022-10-10" className="block text-xs text-gray-500">
          {time}
        </time>

        <p>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {plan}
          </h3>
        </p>

        <div className="mt-4 flex flex-wrap gap-1">
          {
            skils.map(key =>
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                {key}
              </span>
            )
          }
        </div>
      </div>
    </article>

  )
}
