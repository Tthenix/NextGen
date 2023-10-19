import React, { useState } from "react";
import {
    CardBody,
    CardFooter,
    Typography,
    Input,
    Textarea,
    Button,
} from "@material-tailwind/react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";
import axios from "axios";

const options = [
    { value: "UX", label: "I like UX" },
    { value: "QA", label: "I like UX" },
    { value: "Front", label: "I like Front" },
    { value: "Backend", label: "I like Backend" },
];

async function registerUser(user) {
    try {
        const response = await axios.post("https://api-for-next-mos.vercel.app/users", user);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export function Register() {
    let navigate = useNavigate();
    // const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        user: "",
        email: "",
        pass: "",
        confirmPass: "",
        github: "",
        linkedIn: "",
        description: "",
        selectedOption: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (selectedOption) => {
        setFormData({ ...formData, selectedOption });
    };

    const registerMutation = useMutation(registerUser, {
        onError: (error) => {
            // Error en el registro, mostrar alerta de error
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was a problem during registration. Please try again later.",
            });
        },
    });

    const handleRegister = async () => {
        try {
            await registerMutation.mutateAsync(formData);
            // Registro exitoso, mostrar alerta y redirigir a la página de inicio de sesión
            Swal.fire({
                icon: "success",
                title: "Registration Successful!",
                text: "You can now log in.",
            }).then(() => {
                navigate("/login");
            });
        } catch (error) {
            // El error será manejado por la opción `onError` de `useMutation`
        }
    };
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-96">
                <CardBody className="flex flex-col gap-4">
                    <Input
                        label="Username"
                        size="lg"
                        name="user"
                        value={formData.user}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Email"
                        size="lg"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="flex gap-4">
                        <Input
                            type="password"
                            label="Password"
                            size="lg"
                            variant="outlined"
                            name="pass"
                            value={formData.pass}
                            onChange={handleChange}
                            containerProps={{ className: "min-w-[72px]" }}
                            required
                        />
                        <Input
                            type="password"
                            label="Confirm Password"
                            size="lg"
                            variant="outlined"
                            name="confirmPass"
                            value={formData.confirmPass}
                            onChange={handleChange}
                            containerProps={{ className: "min-w-[72px]" }}
                            required
                        />
                    </div>
                    <Input
                        label="GitHub"
                        size="lg"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                    />
                    <Input
                        label="LinkedIn"
                        size="lg"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                    />
                    <Textarea
                        label="About you"
                        size="lg"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <div className="w-72">
                        <Select
                            label="Select Version"
                            value={formData.selectedOption}
                            onChange={handleSelectChange}
                            options={options}
                        />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth onClick={handleRegister}>
                        Sign up
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Have an account?
                        <Link to="/login">
                            <Typography as="a" href="#signup" variant="small" color="blue-gray" className="ml-1 font-bold">
                                Sign in
                            </Typography>
                        </Link>
                    </Typography>
                </CardFooter>
            </div>
        </div>
    );
}