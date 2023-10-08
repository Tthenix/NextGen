import React from 'react';
import { Typography, Card, CardBody } from "@material-tailwind/react";

const teamMembers = [
    {
        name: "Persona 1",
        role: "Desarrollador Frontend",
        description: "Apasionado por la tecnología y el diseño. Experto en creación de interfaces de usuario y experiencia de usuario.",
        image: "/teamImages/persona1.jpg", // Ruta a la imagen de Persona 1
    },
    {
        name: "Persona 2",
        role: "Desarrollador Backend",
        description: "Amante del código limpio y eficiente. Especializado en construir robustos sistemas backend y bases de datos.",
        image: "/teamImages/persona2.jpg", // Ruta a la imagen de Persona 2
    },
    {
        name: "Persona 3",
        role: "Desarrollador Backend",
        description: "Amante del código limpio y eficiente. Especializado en construir robustos sistemas backend y bases de datos.",
        image: "/teamImages/persona2.jpg", // Ruta a la imagen de Persona 2
    },
    {
        name: "Persona 4",
        role: "Desarrollador Backend",
        description: "Amante del código limpio y eficiente. Especializado en construir robustos sistemas backend y bases de datos.",
        image: "/teamImages/persona2.jpg", // Ruta a la imagen de Persona 2
    },
    {
        name: "Persona 5",
        role: "Desarrollador Backend",
        description: "Amante del código limpio y eficiente. Especializado en construir robustos sistemas backend y bases de datos.",
        image: "/teamImages/persona2.jpg", // Ruta a la imagen de Persona 2
    },
    {
        name: "Persona 6",
        role: "Desarrollador Backend",
        description: "Amante del código limpio y eficiente. Especializado en construir robustos sistemas backend y bases de datos.",
        image: "/teamImages/persona2.jpg", // Ruta a la imagen de Persona 2
    },
];

const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto p-8">
            {teamMembers.map((member, index) => (
                <Card key={index}>
                    <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                    <CardBody>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            {member.name}
                        </Typography>
                        <Typography variant="body2" color="gray">
                            {member.role}
                        </Typography>
                        <Typography variant="body2" color="blue-gray" className="mt-4">
                            {member.description}
                        </Typography>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default AboutUs;
