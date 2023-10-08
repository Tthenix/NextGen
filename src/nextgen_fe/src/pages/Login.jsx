import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import LogoPng from "../img/loguitooo.png"
import axios from "axios";
import Swal from "sweetalert2";

export function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState(null); // Nuevo estado para almacenar datos del usuario

    const handleSignIn = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users", {
                params: {
                    email: email,
                    password: password,
                },
            });

            if (response.data.length > 0) {
                // Usuario autenticado
                setUserData(response.data[0]); // Almacena los datos del usuario
                Swal.fire({
                    icon: "success",
                    title: "Inicio de sesión exitoso",
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Redirige al usuario a la ruta /
                // En el componente Login después de autenticar al usuario
                navigate("/", { state: { user: response.data[0] } });

            } else {
                // Muestra Sweet Alert para credenciales incorrectas
                Swal.fire({
                    icon: "error",
                    title: "Credenciales incorrectas",
                    text: "Por favor, inténtalo de nuevo.",
                });
            }
        } catch (error) {
            console.error("Error al iniciar sesión: ", error);
            // Muestra Sweet Alert para errores de servidor
            Swal.fire({
                icon: "error",
                title: "Error al iniciar sesión",
                text: "Por favor, inténtalo de nuevo.",
            });
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-80">
                <div className=" grid place-items-center">
                    <img src={LogoPng} alt="logo" className="w-40" />
                    {/* <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
                        Login
                    </Typography> */}
                </div>

                <CardBody className="flex flex-col gap-4">
                    <Input label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" size="lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/* <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth onClick={handleSignIn}>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Link to="/register">
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                            >
                                Sign up
                            </Typography>
                        </Link>
                    </Typography>
                </CardFooter>
            </div>
        </div>
    );
}
