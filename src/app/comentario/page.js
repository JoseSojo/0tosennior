"use client";

import Image from 'next/image';
import Navbar from '@/components/nav';
import Coment from '@/components/coment';
import Footer from '@/components/footer';
import {useState} from 'react';

export default async function Comentarios() {
  const [com, setCom] = useState({name:'',country:'',com:''});
  const handleChange = (e) => {
    setCom({
      ...com,
      [e.target.name]:e.target.value
    })
  }

  const comentss = [
  {name:'Juan Perez',country:'Mexico',com:'Me gusta mucho su contenido'},
	{name:'Marian García',country:'Spain',com:'La calidad de educacóin no se compara'},
	{name:'Jose Martinez',country:'Argentina',com:'La plataforma es sencilla y facil de usar'},
	{name:'Ana Rodríuegz',country:'Colombia',com:'Me gusta su contenido, sigan así'},
	{name:'Luis hrneandez',country:'Venezuela',com:'Exelenta la calidad de educación'},
	{name:'Sofia Gonzalez',country:'Chile',com:'El curos de ingles es el mejor'},
	{name:'Carlos Ramirez',country:'Peru',com:'Los planes son muy económicos y es mucha la calidad de óeducacin'},
	{name:'Laura Díaz',country:'Ecuador',com:'Sigan con el buen trabajo'},
	{name:'Roberto Castro',country:'Costa Rica',com:'Saludos desde costa rica'},
	{name:'Andrea Fernandez',country:'Uruguay',com:'Los mejores'},
	{name:'Miguel Torres',country:'Panama',com:'Soy de panamá, su contenido es el mejor'},
	{name:'Paula Sanchez',country:'Bolivia',com:'Saludos desde bolivia'},
	{name:'David Ortiz',country:'Guatemala',com:'exelene su contenido'},
	{name:'Valentina Rivera',country:'Honduras',com:'Certificados exelentes!'},
	{name:'Francisco Ramirez',country:'El Salvador',com:'Sois los mejores'},
	{name:'Natalia Flores',country:'Nicaragua',com:'Lo Bets'},
	{name:'Alejandro Castro',country:'Paraguay',com:'Exelente contenido'},
	{name:'Carmen Jimenez',country:'Dominican Republic',com:'Saludos desde Republica Dominicana'},
	{name:'Victor Medina',country:'Cuba',com:'Son los mejores'},
	{name:'Adriana Chavez',country:'Puerto Rico',com:'Sigan sía mantengan sus cursos estandars con la misma calidad de educación'},
	{name:'Gabriel Torres',country:'Brazil',com:'Desde brazil, saludos'},
  ]

  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">¡Comenta!</h1>

          <p className="mt-4 text-gray-500">
            Deja un comentario, ayudanos a crecer
          </p>
        </div>

        <form
          action='/api/coment'
          method='post'
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
          <div>
            <label className="sr-only">Nombre</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow"
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="sr-only">País</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow"
                placeholder="País"
                name="country"
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="sr-only">Comentario</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow"
                placeholder="Comentario"
                name="com"
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type="submit"
                className="w-full font-bold text-white-500 rounded-lg bg-purple-500 hover:text-white-700 hover:bg-purple-600 p-4 pe-12 text-sm shadow"
                value="Enviar"
              />
            </div>
          </div>
        </form>
      </div>

	  <div className="grid grid-cols-4 grid-gap-4 p-4">
		{
          comentss.map(item =>
            <Coment
              name={item.name}
              country={item.country}
              com={item.com}
              />
          )
        }
	  </div>

    
    <Footer />      
    </main>
  );
}
