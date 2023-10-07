import { Typography } from "@material-tailwind/react";
import banner from "../img/Banner.jpg"

export function Banner() {
    return (
        <figure className="relative h-96 items-center mx-auto" style={{ width: '90%' }}>
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src={banner}
                alt="banner"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Sara Lamalo
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                        20 July 2022
                    </Typography>
                </div>
                <Typography variant="h5" color="blue-gray">
                    Growth
                </Typography>
            </figcaption>
        </figure>
    );
}