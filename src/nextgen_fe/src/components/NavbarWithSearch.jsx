import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Navbar,
    Typography,
    IconButton,
    Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { PlusCircleIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/solid";
import useProjects from "./UseProjects";


// Componente NavbarWithSearch
export function NavbarWithSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const projects = useProjects(); // Obtener proyectos usando el hook personalizado

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Filtrar proyectos por término de búsqueda y etiquetas
            const filteredProjects = projects.filter((project) =>
                project.tags.some((tags) => tags.toLowerCase().includes(searchTerm.toLowerCase()))
            );

            // Lograr los proyectos filtrados en la consola
            console.log(filteredProjects);
        }
    };
    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                <Link to="/">
                    <Typography
                        as="a"
                        variant="h6"
                        className="mr-4 ml-2 cursor-pointer py-1.5"
                    >
                        NEXTmos

                    </Typography>

                </Link>

                <div className="ml-auto flex gap-1 md:mr-4">
                    <Link to="/CreateCards">
                        <IconButton variant="text" >
                            <PlusCircleIcon className="h-6 w-6" />
                        </IconButton>
                    </Link>
                    <div className="relative flex w-full gap-2 md:w-max blue-gray">
                        <Input
                            type="search"
                            label="Search here..."
                            className="pr-20"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={handleKeyPress} // Manejar el evento de presionar tecla
                        />
                    </div>

                    <Link to="/Profile">
                        <IconButton variant="text" >
                            <Cog6ToothIcon className="h-6 w-6" />
                        </IconButton>
                    </Link>
                    {/* <IconButton variant="text">
                        <BellIcon className="h-4 w-4" />
                    </IconButton> */}
                    <Link to="/login">
                        <IconButton variant="text" >
                            <UserIcon className="h-6 w-6" />
                        </IconButton>
                    </Link>

                </div>
            </div>
        </Navbar>
    );
}