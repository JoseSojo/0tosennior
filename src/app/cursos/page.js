"use client";

import Image from 'next/image';
import Navbar from '@/components/nav';
import CardCurso from '@/components/cursoCard';
import ModalCurso from '@/components/modalCursos';

export default function Cursos() {

  const matriz = [
    {
      img:'/js.jpg',
      title:'Javascript',
      modal:'staticModalJs',
      time:'05/01/2023',
      description:'Aprende Javascript el lenguaje más demandado a nivel mundial con clases interactivar y proyectos incluidos'
    },
    {
      img:'/php.jpg',
      title:'Php',
      modal:'staticModalPhp',
      time:'10/01/2023',
      description:'Aprende Javascript un lenguaje de programación que ah estado por desaparecer pero aun tiene mucho poder y mucho campo laboral'
    },
    {
      img:'/python.jpg',
      title:'Python',
      modal:'staticModalPython',
      time:'15/01/2023',
      description:'Python desde 0 el lenguaje con la sintaxis más simple, muy facil de aprender y con mucho campo laboral. Si quieres crear inteligencia artificial, redes neuronales este es tu momento. Proyectos incluidos'
    },
    {
      img:'/git.png',
      title:'Git/Github',
      modal:'staticModalGit',
      time:'20/01/2023',
      description:'Si vas a trabajar profesionalmente necesitas controlar las versiones de tus proyectos, aquí está git para tí. Aprende a viajar en el tiempo de tus proyectos'
    },
    {
      img:'/ingles.jpg',
      title:'Ingles',
      modal:'staticModalIngles',
      time:'26/01/2023',
      description:'¿Qué esperas para aprender un nuevo idioma?, el ingles aumentará en un 40% tus ingresos mensuales'
    },
    {
      img:'/analisis.jpg',
      title:'Analista de Bases de datos',
      modal:'staticModalGit',
      time:'30/01/2023',
      description:'Si buscas algo con lo que siempre tendras trabajo, te recomiendo Bases de datos, los datos siempre existirá y necesitaran de alquien que los sepa trabajar, ese alguien puedes ser tú'
    },
    {
      img:'/juegos.jpg',
      title:'Desarrollo de Vidiojuegos',
      modal:'staticModalGame',
      time:'20/01/2023',
      description:'La industria de los video juegos nunca se detendrá, aprende a desarrollar videojueos desde 0'
    },
    {
      img:'/inversion.jpg',
      title:'Inversiones',
      modal:'staticModalInversiones',
      time:'20/01/2023',
      description:'Aprende a invertir y como usar tu dinero de forma cuidadosa y con un maren de ganacia lo más elevado posible'
    },
    {
      img:'/marketing.jpg',
      title:'Marketing',
      modal:'staticModalMarketing',
      time:'20/01/2023',
      description:'Aprende a vender en línea con las mejores estrategias de venta del mercado'
    }
  ]

  return (
    <div>
      <Navbar />

      <section className='grid grid-cols-3 gap-3 p-3'>
      {
        matriz.map(key =>
          <CardCurso
            img={key.img}
            title={key.title}
            time={key.time}
            description={key.description}
            modal={key.modal}
            />
        )
      }
      {
        matriz.map(key =>
          <ModalCurso
            img={key.img}
            title={key.title}
            time={key.time}
            description={key.description}
            modal={key.modal}
            />
        )
      }
      </section>
    </div>
  );
}
