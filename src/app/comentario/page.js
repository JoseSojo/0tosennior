"use client";

import Image from 'next/image';
import Navbar from '@/components/nav';
import Coment from '@/components/coment';
import {useState, useEffect} from 'react';

export default function Comentarios() {
  const [com, setCom] = useState({name:'',country:'',com:''});
  let comentss = JSON.parse(localStorage.getItem('comentarios'));

  const handleChange = (e) => {
    setCom({
      ...com,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let coments = JSON.parse(localStorage.getItem('comentarios'));
    coments[coments.length] = com;
    localStorage.setItem('comentarios',JSON.stringify(coments));
  }

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

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label for="email" className="sr-only">Nombre</label>

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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="sr-only">País</label>

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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="email" className="sr-only">Comentario</label>

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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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

      <div className="grid grid-cols-3 grid-gap-3 p-3">
      {
        comentss.map(item =>
          <section
            className="flex-auto w-64 relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
            href="#"
          >
            <div className="pt-4 text-gray-500">
              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                {item.name}
              </h3>

              <p className="mt-2 hidden text-sm sm:block">
                {item.com}
              </p>
            </div>

            <span
              className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
            >
              {item.country}
            </span>
          </section>
        )
      }
      </div>
    </main>
  );
}
