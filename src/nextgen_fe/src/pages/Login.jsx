import React, { useState, useEffect } from "react";
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
import Dibujo from "../img/AL PEDO.kra-autosave.jpg"

export function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Verificar si hay datos de usuario en localStorage cuando el componente se monta
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleSignIn = async () => {
        try {
            const response = await axios.get("https://api-for-next-mos.vercel.app/users", {
                params: {
                    email: email,
                    password: password,
                },
            });

            if (response.data.length > 0) {
                // Usuario autenticado
                setUserData(response.data[0]); // Almacena los datos del usuario en el estado local
                localStorage.setItem("userData", JSON.stringify(response.data[0])); // Almacena los datos del usuario en localStorage
                Swal.fire({
                    icon: "success",
                    title: "Successful Login",
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
                    title: "Error Logging In",
                    text: "Please try again.",
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
            <img
                className="h-96 w-96 rounded-full object-cover "
                src={Dibujo}
                alt="nature image"
            />
            <div className="w-80">
                <div className=" grid place-items-center">
                    {/* <img src={LogoPng} alt="logo" className="w-60" /> */}
                    <Typography variant="h4">
                        NEXTmos
                    </Typography>

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
