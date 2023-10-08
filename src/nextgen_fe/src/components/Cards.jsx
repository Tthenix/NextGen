import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Cards = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const [proyectosResponse, usersResponse] = await Promise.all([
                    axios.get("http://localhost:3000/proyectos"),
                    axios.get("http://localhost:3000/users"),
                ]);

                const proyectosData = proyectosResponse.data.map(proyecto => {
                    const user = usersResponse.data.find(user => user.id === proyecto.userId);
                    return {
                        ...proyecto,
                        user: user ? user.user : "Usuario Desconocido"
                    };
                });

                // Ordenar proyectos por id de forma descendente
                const sortedProyectos = proyectosData.sort((a, b) => b.id - a.id);
                setProyectos(sortedProyectos);
            } catch (error) {
                console.error("Error al obtener proyectos: ", error);
            }
        };

        fetchProyectos();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Todos los Proyectos:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {proyectos.map((proyecto) => (
                    <Card key={proyecto.id} className="flex flex-col h-full justify-between">
                        <CardBody className="flex flex-col items-center justify-center h-full">
                            <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
                                {proyecto.projectName}
                            </Typography>
                            <div className="mb-2">
                                {proyecto.tags && proyecto.tags.map((tag, index) => (
                                    <span key={index} className="text-sm text-blue-500 mr-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Typography className="text-center mb-2">Creado por: {proyecto.user}</Typography>
                            <Typography className="text-center mb-6">{proyecto.description}</Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Link to="/readMore" className="text-center w-full">
                                <Button>Read More</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Cards;
