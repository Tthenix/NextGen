import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const CreateCards = () => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [tagsArray, setTagsArray] = useState([]);
    const [userId, setUserId] = useState(null); // Estado para almacenar el userId
    const [projectNeeds, setProjectNeeds] = useState(''); // Nuevo estado para las necesidades del proyecto

    useEffect(() => {
        // Recuperar el userId del localStorage cuando se carga el componente
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setUserId(userData.id);
        }
    }, []); // El segundo argumento del useEffect es un array vacío, se ejecutará solo una vez después del montaje inicial

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // Verificar si userId está disponible
            if (userId) {
                // Enviar datos al servidor JSON usando axios POST request
                await axios.post('https://api-for-next-mos.vercel.app/proyectos', {
                    projectName: projectName,
                    description: description,
                    tags: tagsArray,
                    userId: userId,
                    needs: projectNeeds, // Enviar las necesidades del proyecto al servidor
                });

                // Limpiar el formulario después de enviar los datos
                setProjectName('');
                setDescription('');
                setTagsArray([]);
                setProjectNeeds('');

                // Mostrar un mensaje de éxito o redirigir a otra página si es necesario
                console.log('Proyecto creado exitosamente');
            } else {
                console.error('Error: userId no disponible');
            }
        } catch (error) {
            console.error('Error al crear el proyecto:', error);
        }
    };

    const handleTagsInputChange = (e) => {
        // Actualizar el estado de las etiquetas al escribir en el campo de entrada
        setTags(e.target.value);
    };

    const handleAddTag = () => {
        // Agregar la etiqueta al array de etiquetas y limpiar el campo de entrada
        setTagsArray([...tagsArray, tags.trim()]);
        setTags('');
    };
    return (
        <div className="container mx-auto mt-8">
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                            Project Name
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-2 px-3"
                            type="text"
                            id="projectName"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Project Description
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg py-2 px-3 h-32 resize-none"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectNeeds">
                            Project Needs
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-2 px-3"
                            type="text"
                            id="projectNeeds"
                            value={projectNeeds}
                            onChange={(e) => setProjectNeeds(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                            Tags (separated by commas)
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-lg py-2 px-3"
                            type="text"
                            id="tags"
                            value={tags}
                            onChange={handleTagsInputChange}
                        />
                        <div className='pt-4'>
                            <Button
                                type="button"

                                onClick={handleAddTag}
                            >
                                Add Tag
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        {tagsArray.map((tag, index) => (
                            <span key={index} className="text-sm text-blue-500 ">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Button
                        className="w-full py-2 px-4 rounded"
                        type="submit"
                    >
                        Create Project
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateCards;