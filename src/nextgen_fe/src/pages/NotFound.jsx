import { useRouteError } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
                <p className="text-lg">Lo sentimos, la página que buscas no existe.</p>
                <Link to="/">
                    <Button>Ir a Home</Button>
                </Link>
            </div>

            <p>{error.statusText || error.message}</p>
        </>
    );
};
export default NotFound;
