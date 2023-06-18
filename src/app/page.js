"use client";

import Image from 'next/image';
import Navbar from '@/components/nav';

export default function Home() {
  const mision = {
    title:'Misión:',
    description:'Como empresa de educación en línea, nuestra misión es proporcinar una educación de calidad y accecible a cualquier persona en cualquier parte del mundo. Nos esfrozamos por ofrecer una plataforma personalizada y fácil de usar que permita a los estudiantes aprender a su propio ritmo y en su propio horario'
  }
  const vision = {
    title:'Visión',
    description: 'Nuestra visión es proporcionar una plataforma de aprendizaje accecible y efectiva para aquellos que buscan mejorar sus hablidades y conocimientos en campos específicos. Sí bien reconocemos que la educación en línea no es adecuada para todos creemos que puede ser una opción viable y efectiva para aquellos que buscan una educación de caliad y personalizadda'
  }
  const caso = {
    title:'Caso de Estudio',
    description:'Nuestro equipo notó que muchos principiantes que deseaban aprender a programar se enfrentaban a varios problemas y desafíos. Uno de los problemas más comunes era la falta de acceso a recursos educativos de calidad y asequibles. Muchos cursos en línea son caros y no offrecen la flexibilidad necesaria para que los estudiatnes puedan aprender a su propio ritmo'
  }
  const resena = {
    title:'Reseña Histórica',
    description:'En el año 2023, un grupo de emprendedores venezolanoz decidió fundar una Empresa de Educación en línea que ofreciera cursos de Programación, Inglés, Matemáticas y Especializaciones Informáticas La empresa fundada en San Juán de los Morros, estado Guárico, por José Sojo, Grecia Colmenares, Leniangel Pérez, Rossana Ceballos, Rossana Rodríguez, Oscar Tirado, y Victor Acosta, quienes son estudiantes de la Universidad Nacional Experimental de los Llanos Centrales Rómulo Gallegos'
  }
  const valores = ['Cooperación','Transparencia','Solidaridad','Responsabilidad','Resposabilidad Social','Equidad','Innovación','Calidad','Orientación al Cliente','Accecibilidad','Flexibilidad'];
  const fundadores = [
    {
      cargo:'Gerente General',
      nombre:'José Sojo',
      edad:'21',
      img:'/next.svg'
    }, {
      cargo:'Directora de Marketing',
      nombre:'Rossana Rodriguez',
      edad:'21',
      img:'/next.svg'
    }, {
      cargo:'Administradora',
      nombre:'Leniangel Pérez',
      edad:'20',
      img:'/next.svg'
    }, {
      cargo:'Tesorera',
      nombre:'Grecia Colmenares',
      edad:'21',
      img:'/next.svg'
    }, {
      cargo:'Community Manager',
      nombre:'Victor Acosta',
      edad:'21',
      img:'/next.svg'
    }, {
      cargo:'Dessarrollador Frontend',
      nombre:'Rossana Ceballos',
      edad:'22',
      img:'/next.svg'
    }, {
      cargo:'Dessarrollador Backend',
      nombre:'Oscar Tirado',
      edad:'21',
      img:'/next.svg'
    }
  ]

  return (
    <div>
      <Navbar />

      <main className="bg-gray-100 py-10">
        <div className='grid grid-cols-2 grid-gap-2 p-2 px-15'>
          <div>
            <Image
              src='/next.svg'
              width={100}
              height={100}
              />
          </div>
          <article className="rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <div>
                <p>
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900 font-large mb-3"> {mision.title} </h3>
                  <p>{mision.description}</p>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className='grid grid-cols-2 grid-gap-2 p-2 px-15'>
          <article className="rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <div>
                <p>
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900 font-large mb-3"> {vision.title} </h3>
                  <p>{vision.description}</p>
                </p>
              </div>
            </div>
          </article>
          <div>
            <Image
              src='/next.svg'
              width={100}
              height={100}
              />
          </div>
        </div>

        <div className='grid grid-cols-1 grid-gap-2 p-5 px-15'>
          <article className="rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <p>
                <h3 className='mt-0.5 text-lg font-medium text-gray-900 font-large mb-3'>{vision.title}</h3>
                <p>{vision.description}</p>
              </p>
            </div>
          </article>
        </div>

        <section className='grid grid-cols-6 grid-gap-6 p-6 px-15'>
          {
            valores.map(key =>
              <article className="rounded-xl bg-gradient-to-r my-5 from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm">
                <div className="rounded-[10px] bg-white p-4 sm:p-6">
                  <h3>{key}</h3>
                </div>
              </article>
            )
          }
        </section>

        <div className='grid grid-cols-1 grid-gap-2 p-5 px-15'>
          <article className="rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <p>
                <h3 className='mt-0.5 text-lg font-medium text-gray-900 font-large mb-3'>{caso.title}</h3>
                <p>{caso.description}</p>
              </p>
            </div>
          </article>
        </div>

        <div className='grid grid-cols-1 grid-gap-2 p-5 px-15'>
          <article className="rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <p>
                <h3 className='mt-0.5 text-lg font-medium text-gray-900 font-large mb-3'>{resena.title}</h3>
                <p>{resena.description}</p>
              </p>
            </div>
          </article>
        </div>

        <div className='grid grid-cols-4 grid-gap-4 p-5 px-15'>

          {
            fundadores.map(key =>
              <article className="my-10 rounded-xl bg-gradient-to-r from-purple-300 via-blue-500 to-pink-600 p-0.5 shadow-xl transition hover:shadow-sm">
                <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 grid-cols-2 grid-gap-2 px-20">
                  <Image
                    src={key.img}
                    width={150}
                    height={150}
                    />
                  <p>
                    <h5 className='mt-0.5 text-lg font-medium text-gray-900 font-large mb-3 text-gray-800'>{key.nombre}</h5>
                    <span className='text-gray-600'>{key.edad}</span>
                    <p className='text-gray-500'>{key.cargo}</p>
                  </p>
                </div>
              </article>
            )
          }

        </div>
      </main>
    </div>
  );
}
