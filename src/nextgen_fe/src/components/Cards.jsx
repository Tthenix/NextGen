import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export function Cards({ projectName, description, readMoreLink }) {
    return (
        <Card className="mt-6 w-80 mx-auto max-w-screen-xl flex flex-col items-center">
            <CardBody className="flex flex-col items-center">
                <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
                    {projectName}
                </Typography>
                <Typography className="text-center mb-6">
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={readMoreLink}>
                    <Button >
                        Read More
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
