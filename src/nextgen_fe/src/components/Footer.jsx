import React from "react";
import { Typography } from "@material-tailwind/react";
import Logo from "../img/loguitooo.png";
import { Link } from "react-router-dom";

export function Footer() {
    return (

        <footer className="w-full bg-gray pb-12 mx-auto max-w-screen-xl text-center flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6">
                <img src={Logo} alt="logo-ct" className="w-40" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                </ul>
            </div>

            <div className="flex gap-x-8 mt-6 md:mt-0">
                <Link to="/aboutUs">
                    <Typography
                        as="a"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        About Us
                    </Typography>
                </Link>
                <Link to="/contribute">
                    <Typography
                        as="a"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Contribute
                    </Typography>
                </Link>
            </div>
        </footer>
    );
}
