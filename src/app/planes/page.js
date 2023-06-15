"use client";

import Image from 'next/image';
import Navbar from '@/components/nav';
import PlanCard from '@/components/planCard';

export default function Home() {

  const matriz = [
    {
      img:'/analisis.jpg',time:'10/02/2023', plan:'Especialista en Analisis de Datos', skils:['python','tensorflow','sql']
    }, {
      img:'/marketing.jpg',time:'20/02/2023', plan:'Especialista en Marketing Moderno', skils:['instagram','ventas','moderno']
    }, {
      img:'/.jpg',time:'10/03/2023', plan:'Programador Fullstack', skils:['React','node','typescript','mongodb','sql']
    }, {
      img:'/infor_forense.jpg',time:'01/04/2023', plan:'Informática Forence', skils:['ip','mac','pyton','sql']
    }, {
      img:'/pentest.jpg',time:'27/04/2023', plan:'Pentester', skils:['python','sql','seguridad','privacidad']
    }, {
      img:'/ciencia.jpg',time:'30/04/2023', plan:'Cientifico de datos', skils:['python','tensorflow','sql','logica']
    }, {
      img:'/ingles.jpg',time:'07/05/2023', plan:'Ingles', skils:['ingels','idioma']
    }, {
      img:'/diseno.jpg',time:'14/05/2023', plan:'Diseño Gáfico', skils:['diseño','marketing','screen']
    }
  ]

  return (
    <div>
      <Navbar />

      <main className='grid grid-cols-2 gap-10 p-2'>
        {
          matriz.map(item =>
            <PlanCard
              img={item.img}
              time={item.time}
              plan={item.plan}
              skils={item.skils}
              />
          )
        }
      </main>
    </div>
  );
}
