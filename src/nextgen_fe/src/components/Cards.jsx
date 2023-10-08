import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export function Cards() {
    return (
        <Card className="mt-6 w-80 mx-auto max-w-screen-xl flex flex-col justify-between">
            <CardBody className="flex flex-col items-center">
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    Nombre del proyecto
                </Typography>
                <Typography className="text-center">
                    Descripcion:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to="ReadMore">
                    <Button className="mx-auto">Read More</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
