import { useState, useEffect } from 'react';
import axios from 'axios';

function useProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Obtener proyectos desde el servidor cuando el componente se monta
        axios.get("http://localhost:3000/proyectos").then((response) => {
            setProjects(response.data);
        });
    }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez

    return projects;
}

export default useProjects;
