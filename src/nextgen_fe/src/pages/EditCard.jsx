import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCard = () => {
    const { userId } = useParams();
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        projectName: "",
        description: "",
        needs: "",
        userId: userId || "",
    });

    useEffect(() => {
        if (userId) {
            // Filtra los proyectos con el userId coincidente
            axios.get(`https://api-for-next-mos.vercel.app/proyectos`).then((response) => {
                const matchingProject = response.data.find((p) => p.userId === parseInt(userId, 10));
                if (matchingProject) {
                    const { projectName, description, needs } = matchingProject;
                    setFormData({ projectName, description, needs, userId });
                } else {
                    // Si no se encuentra ningún proyecto, redirige a una página de error o maneja la situación de alguna otra manera
                    navigate("/error"); // Redirige a la página de error
                }
            });
        }
    }, [userId, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envía los datos actualizados al servidor para actualizar el proyecto
            await axios.put(`http://localhost:3000/proyectos/${userId}`, formData);
            // Redirige al usuario a la página de detalles del proyecto después de la actualización
            navigate(`/proyectos/${userId}`);
        } catch (error) {
            console.error("Error al actualizar el proyecto:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg py-2 px-3"
                        required
                    />
                </div>
                {/* Otros campos de entrada para editar */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditCard;
