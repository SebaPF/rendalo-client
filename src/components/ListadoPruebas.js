import React, { useState, useEffect } from "react";
import axios from 'axios';

const ListadoPruebas = () => {

  const [pruebas, guardarPruebas] = useState([]);

  useEffect(() => {

    const buscarPruebas = async () => {

      const url = 'http://localhost:4000/api/pruebas'; // Subir Back a HEROKU mejor para que sea mas directo para el CTO acceder a BD ? ... //
      const resultado = await axios.get(url);

      guardarPruebas(resultado.data.pruebas);
    }
    buscarPruebas();
  }, []);

  console.log(pruebas);

  return (

    <div className='min-h-screen flex justify-center bg-indigo-200'>

      <div className='max-w-screen-lg m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>

        <div className='mt-6 max-w-screen-xl'>

          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ID Prueba</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Empresa</th>
                <th className="px-4 py-2">Comentario</th>
              </tr>
            </thead>
            {pruebas.map((row) => (
              <tbody key={row._id} className='bg-indigo-700'>
                <tr className='bg-indigo-200'>
                  <td className="border px-4 py-2">{row._id}</td>
                  <td className="border px-4 py-2 bg-indigo-400">{row.nombre}</td>
                  <td className="border px-4 py-2">{row.empresa}</td>
                  <td className="border px-4 py-2 bg-indigo-400">{row.comentarios}</td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className='flex flex-col items-center'>
            <a
              className='w-full max-w-xs mt-12 font-bold shadow-sm rounded-lg py-3 bg-indigo-200 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 hover:bg-indigo-400'
              href='/'
              target='_self'
            >
              <i className='fas fa-sign-in-alt fa text-indigo-500' />
              <span className='ml-4'>Volver al Inicio</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ListadoPruebas;