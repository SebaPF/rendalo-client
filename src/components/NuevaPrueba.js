import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const NuevaPrueba = (history) => {
console.log(history)
    const [prueba, guardarPrueba] = useState({
        nombre: '',
        empresa: '',
        comentarios: ''
    });

    const { nombre, empresa, comentarios } = prueba;

    const onChange = (e) => {
        guardarPrueba({
            ...prueba,
            [e.target.name]: e.target.value
        }
        )
    }

    const crearPrueba = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/api/prueba', prueba)
                .then(() => {                    
                    guardarPrueba({
                        ...prueba,
                        nombre: '',
                        empresa: '',
                        comentarios: ''
                    });
                    console.log('PRUEBA CREADA');

                    Swal.fire({
                        icon: 'success',
                        title: 'Excelente',
                        text: 'Prueba creada correctamente'
                      })

                });

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='min-h-screen flex justify-center bg-indigo-200'>

            <div className='max-w-screen-lg m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>

                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>

                    <div className='mt-12 flex flex-col items-center'>

                        <h1 className='font-sans text-xl text-black'>Crea una Prueba</h1>

                        <form
                            className='w-full flex-1 mt-8 text-indigo-500'
                            onSubmit={crearPrueba}
                        >
                            <div className='mx-auto max-w-xs relative '>
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                    type='text'
                                    placeholder='Nombre'
                                    name='nombre'
                                    onChange={onChange}
                                    value={nombre}
                                />
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type='empresa'
                                    placeholder='Empresa'
                                    name='empresa'
                                    onChange={onChange}
                                    value={empresa}
                                />
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type='text'
                                    name='comentarios'
                                    placeholder='Comentario'
                                    onChange={onChange}
                                    value={comentarios}
                                />
                                <button
                                    type='submit'
                                    className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                                >
                                    <i className='fas fa-check-circle fa 1x w-6 mr-2' />
                                    Crear Prueba
                                </button>
                            </div>
                        </form>

                        <div className='xl:w-5/6 flex flex-col items-center'>
                            <a
                                className='w-full max-w-xl font-bold shadow-sm rounded-lg py-3 bg-indigo-200 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 hover:bg-indigo-400'
                                href='/listado-pruebas'
                                target='_self'
                            >
                                <i className='fas fa-sign-in-alt fa text-indigo-500' />
                                <span className='ml-4'>Ver Pruebas Creadas</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default NuevaPrueba;