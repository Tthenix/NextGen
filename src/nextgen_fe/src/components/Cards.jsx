import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import useProjects from "./UseProjects";
import { useAtom } from "jotai";
import { filterAtom } from "../Atoms/Atoms";

const Cards = () => {
    const [proyectos, setProyectos] = useState([]);
    const projects = useProjects();
    const [Filter] = useAtom(filterAtom); // Obtener proyect

    const filteredProjects = proyectos.filter((project) =>
        project.tags.some((tags) => tags.toLowerCase().includes(Filter.toLowerCase())))

    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const [proyectosResponse, usersResponse] = await Promise.all([
                    axios.get("https://api-for-next-mos.vercel.app/proyectos"),
                    axios.get("https://api-for-next-mos.vercel.app/users"),
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
        <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">All projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProjects.map((proyecto) => (
                    <Card key={proyecto.id} className="flex flex-col border border-gray-300 rounded-lg p-4" style={{ maxWidth: '300px', width: '100%' }}>
                        <CardBody className="flex flex-col items-center justify-center">
                            <Typography variant="h5" color="blue-gray" className="mb-4 text-center text-2xl font-bold">
                                {proyecto.projectName}
                            </Typography>
                            <Typography className="text-center mb-6">{proyecto.description}</Typography>
                            <div className="mb-2">
                                {proyecto.needs && (
                                    <div className="mb-2 text-center ">
                                        <strong>Project Needs</strong>
                                        <Typography>{proyecto.needs}</Typography>
                                    </div>
                                )}
                                {proyecto.userId && (
                                    <div className="text-center mb-6">
                                        <strong>Create by</strong>
                                        <Typography>{proyecto.user}</Typography>
                                    </div>
                                )}


                                {proyecto.tags && proyecto.tags.map((tag, index) => (
                                    <span key={index} className="text-center text-blue-500 mr-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0 text-center">
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