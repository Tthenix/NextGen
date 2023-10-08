import { Typography } from "@material-tailwind/react";
import Logo from "../img/loguitooo.png"
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="w-full bg-white p-8 mx-auto max-w-screen-xl text-center">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12">
                <img src={Logo} alt="logo-ct" className="w-40" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <Link to="/aboutUs">
                        <Typography
                            as="a"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </Link>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="font-normal">
                &copy; 2023 Material Tailwind
            </Typography>
        </footer>
    );
}