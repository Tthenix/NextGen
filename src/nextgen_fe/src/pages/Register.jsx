import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Option,
    Select,
    Button,
    Textarea,
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
    const [confirmPass, setConfirmPass] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [selectedValue, setSelectedValue] = useState("");
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [github, setGitHub] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [tech, setTech] = useState("");
    const handleTechChange = (event) => {
        setTech(event.target.value);
    };

    const [value, setValue] = useState("");


    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-120">
                <div className="mb-4 grid h-28 place-items-center">
                    <Typography variant="h3" color="blue-gray">
                        NEXTmos
                    </Typography>
                </div>
                <CardBody className="flex flex-col gap-4">
                    
  
      <div>
        <Select
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled
        >
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
        </Select>
        <p>El valor seleccionado es: {value}</p>
      </div>
                    <div className="my-4 flex items-center gap-4">
                        <Input
                        label="First Name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        required
                        />
                        <Input
                        label="Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        required
                        />
                    </div>
                    <Input label="Username" size="lg" value={user} onChange={(e) => setUser(e.target.value)} required/>
                    <Input label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
                    <div className="my-4 flex items-center gap-4">
                        <Input
                        type="password"
                        label="Password"
                        variant="outlined"
                        onChange={(event) => setPass(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        required
                        />
                        <Input
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                        onChange={(event) => setConfirmPass(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                        required
                        />
                    </div>
                    <Input label="GitHub" size="lg" value={github} onChange={(e) => setGitHub(e.target.value)} />
                    <Input label="LinkedIn" size="lg" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
                    <Textarea label="About you" size="lg" value={description} onChange={(e) => setDescription(e.target.value)} />
                            
      <Select
        label="Select"
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        <option value="1">Opción 1</option>
        <option value="2">Opción 2</option>
        <option value="3">Opción 3</option>
      </Select>                      
                    <p className="text-gray-600 text-sm mt-2">
                        Opción seleccionada: {tech}
                    </p>

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
