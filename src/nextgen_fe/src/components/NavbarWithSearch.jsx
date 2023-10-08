import {
    Navbar,
    Typography,
    IconButton,
    Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BellIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/solid";

export function NavbarWithSearch() {
    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                <Link to="/">
                    <Typography
                        as="a"
                        variant="h6"
                        className="mr-4 ml-2 cursor-pointer py-1.5"
                    >
                        NEXTmos
                    </Typography>
                </Link>
                <div className="ml-auto flex gap-1 md:mr-4">
                    <div className="relative flex w-full gap-2 md:w-max blue-gray">
                        <Input
                            type="search"
                            label="Search here..."
                            className="pr-20"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                        {/* <IconButton variant="text" color="blue-gray">
                            <MagnifyingGlassIcon className="h-4 w-4" />
                        </IconButton> */}
                    </div>
                    <Link to="/Perfil">
                        <IconButton variant="text" >
                            <Cog6ToothIcon className="h-4 w-4" />
                        </IconButton>
                    </Link>
                    {/* <IconButton variant="text">
                        <BellIcon className="h-4 w-4" />
                    </IconButton> */}
                    <Link to="/login">
                        <IconButton variant="text" >
                            <UserIcon className="h-4 w-4" />
                        </IconButton>
                    </Link>

                </div>
            </div>
        </Navbar>
    );
}