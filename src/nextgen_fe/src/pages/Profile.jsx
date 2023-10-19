import React, { useState, useEffect } from "react";
import axios from "axios";
import {Input, Textarea, Button } from "@material-tailwind/react";

const Profile = () => {
    const [userData, setUserData] = useState({
        user: "",
        email: "",
        pass: "",
        confirmPass: "",
        github: "",
        linkedIn: "",
        description: "",
        selectedOption: null,
        id: null,
    });

    useEffect(() => {
        // Obtener datos del usuario usando su ID
        const userId = JSON.parse(localStorage.getItem("userData")).id;
        console.log({ userId }) // ID del usuario, esto debería obtenerse de la autenticación
        axios.get(`https://api-for-next-mos.vercel.app/users/${userId}`).then((response) => {
            setUserData(response.data);
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSaveChanges = () => {
        // Enviar datos actualizados del usuario al servidor
        axios.put(`https://api-for-next-mos.vercel.app/users/${userData.id}`, userData).then((response) => {
            console.log("Datos del usuario actualizados:", response.data);
            // Puedes mostrar una alerta o mensaje de éxito aquí si lo deseas
        });
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-120 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Profile</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Username" size="sm" name="user" value={userData.user} onChange={handleInputChange} required />
                    <Input label="Email" size="sm" type="email" name="email" value={userData.email} onChange={handleInputChange} required />
                    <Input label="Password" size="sm" type="password" name="pass" value={userData.pass} onChange={handleInputChange} />
                    <Input label="Confirm Password" size="sm" type="password" name="confirmPass" value={userData.confirmPass} onChange={handleInputChange} />
                    <Input label="GitHub" size="sm" name="github" value={userData.github} onChange={handleInputChange} />
                    <Input label="LinkedIn" size="sm" name="linkedIn" value={userData.linkedIn} onChange={handleInputChange} />
                    <Textarea label="About you" size="sm" name="description" value={userData.description} onChange={handleInputChange} />
                    {/* Agrega el componente Select para la opción seleccionada aquí */}
                </div>
                <div className="mt-6">
                    <Button variant="gradient" fullWidth onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
