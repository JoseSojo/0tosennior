"use client";

import Image from 'next/image';

export default function ModalCurso({img,title,description,time,modal}) {

  const matriz = [
    {
      img:'/next.svg',
      title:'Javascript',
      time:'05/01/2023',
      description:'Aprende Javascript el lenguaje más demandado a nivel mundial con clases interactivar y proyectos incluidos'
    }, {
      img:'/next.svg',
      title:'Php',
      time:'10/01/2023',
      description:'Aprende Javascript un lenguaje de programación que ah estado por desaparecer pero aun tiene mucho poder y mucho campo laboral'
    }, {
      img:'/next.svg',
      title:'Python',
      time:'15/01/2023',
      description:'Python desde 0 el lenguaje con la sintaxis más simple, muy facil de aprender y con mucho campo laboral. Si quieres crear inteligencia artificial, redes neuronales este es tu momento. Proyectos incluidos'
    }, {
      img:'/next.svg',
      title:'Git/Github',
      time:'20/01/2023',
      description:'Si vas a trabajar profesionalmente necesitas controlar las versiones de tus proyectos, aquí está git para tí. Aprende a viajar en el tiempo de tus proyectos'
    }
  ]

  return (
    <div id={modal} data-modal-background='static' tabindex='-1' aria-hidden='true' className='fixed top-0 left-0 rigth-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full'>
      <div className='relative w-full max-w-2x1 max-h-full'>
      // content
        <div className='relative bg-white rounded-lg shadow '>
          // Header
          <div className='flex items-start justify-between p-4 border-b rounded-t'>
            <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
            <span className='font-bold text-gray-700'>{time}</span>
          </div>
          // Body
          <div className='p-6 space-y-6'>
            <p className='text-base leading-relaxed text-gray-600'>
              {description}
            </p>
          </div>
          // Footer
          <div className='flex items-center p-6 spance-x-2 border-t border-gray-200 rounded-b'>
            <button data-modal-hide={modal} className='text-white bg-purple-700 hover:bg-purple-800 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5text-center' type='button'>
              Tomar Curso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
