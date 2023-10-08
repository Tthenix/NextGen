import React, { useState } from 'react';
import axios from 'axios';

const CreateCards = () => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [tagsArray, setTagsArray] = useState([]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar datos al servidor JSON usando axios POST request
            await axios.post('http://localhost:3000/proyectos', {
                projectName: projectName,
                description: description,
                tags: tagsArray, // Enviar las etiquetas al servidor
            });

            // Limpiar el formulario después de enviar los datos
            setProjectName('');
            setDescription('');
            setTagsArray([]);

            // Mostrar un mensaje de éxito o redirigir a otra página si es necesario
            console.log('Proyecto creado exitosamente');
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
            <h2 className="text-2xl font-bold mb-4">Crear Nuevo Proyecto</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                        Nombre del Proyecto
                    </label>
                    <input
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Descripción del Proyecto
                    </label>
                    <textarea
                        className="border border-gray-300 rounded-lg p-2 w-full h-32"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                        Etiquetas (separadas por comas)
                    </label>
                    <input
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={handleTagsInputChange}
                    />
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue ml-2"
                        onClick={handleAddTag}
                    >
                        Agregar Etiqueta
                    </button>
                </div>
                <div className="mb-4">
                    {tagsArray.map((tag, index) => (
                        <span key={index} className="text-sm text-blue-500 mr-2">
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    type="submit"
                >
                    Crear Proyecto
                </button>
            </form>
        </div>
    );
};

export default CreateCards;
