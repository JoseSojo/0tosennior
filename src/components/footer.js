"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center py-20 bg-gray-800'>
        <h4 className='text-3xl font-extrabold text-gray-200'>0 to sennior</h4>
        <p className='text-1xl font-semibold text-gray-300'>La mejor educación en línea.</p>
        <ul className='flex flex-col'>
          <li className='mx-5'>
            <Image
              src='/instagram.png'
              width={50}
              height={50}
              />
            <Image
              src='/facebook.png'
              width={50}
              height={50}
              />
          </li>
        </ul>
   	</footer>	
  );
}
