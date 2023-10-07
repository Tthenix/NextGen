import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export function Cards() {
    return (
        <Card className="mt-6 w-80 flex flex-col justify-between">
            <CardBody className="flex flex-col items-center">
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    UI/UX Review Check
                </Typography>
                <Typography className="text-center">
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to "Naviglio" where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="mx-auto">Read More</Button>
            </CardFooter>
        </Card>
    );
}
