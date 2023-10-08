import { Typography } from "@material-tailwind/react";
import banner from "../img/Banner.jpg";

export function Banner() {
    return (
        <figure className="relative h-96 items-center mx-auto max-w-screen-xl">
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src={banner}
                alt="banner"
            />
            <figcaption className="absolute top-8 left-10 transform -translateY-1/4 py-4 px-4 md:py-8 md:px-8 lg:py-10 lg:px-10 rounded-xl text-white text-lg md:text-xl lg:text-2xl">
                <div>
                    <Typography variant="h4" color="white">
                        NEXTmos - conectando ideas
                    </Typography>
                    <Typography color="white" className="mt-1">
                        Somos la 1ra página web en reunir proyectos
                    </Typography>
                    <Typography color="white" className="mt-1">
                        open source de ciencia a nivel internacional.
                    </Typography>
                    <Typography color="white" className="mt-1">
                        Nuestra misión es que encuentres tu proyecto
                    </Typography>
                    <Typography color="white" className="mt-1">
                        ideal y que potencies tu proyecto
                    </Typography>
                </div>
            </figcaption>
        </figure>
    );
}