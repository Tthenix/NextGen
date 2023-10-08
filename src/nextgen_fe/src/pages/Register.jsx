import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";

async function registerUser(user) {
    try {
        const response = await axios.post("http://localhost:3000/users", user);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export function Register() {
    const registerMutation = useMutation(
        registerUser, {
        onSuccess: () => {
            console.log("exitoo")
        },
    })
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-80">
                <div className="mb-4 grid h-28 place-items-center">
                    <Typography variant="h3" color="blue-gray">
                        NEXTmos
                    </Typography>
                </div>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Username" size="lg" value={user} onChange={(e) => setUser(e.target.value)} />
                    <Input label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" size="lg" value={pass} onChange={(e) => setPass(e.target.value)} />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth onClick={() => registerMutation.mutate({ email, pass, user })}>
                        Sign on
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Have an account?
                        <Link to="/login">
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                            >
                                Sign in
                            </Typography>
                        </Link>
                    </Typography>
                </CardFooter>
            </div>
        </div>
    );
}
