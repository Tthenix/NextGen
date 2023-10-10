import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";

const Contribute = () => {
    const [donationAmount, setDonationAmount] = useState('');

    const handleDonationChange = (e) => {
        setDonationAmount(e.target.value);
    };

    const handleDonate = () => {
        // Aquí puedes implementar la lógica para procesar la donación, por ejemplo, enviar los datos a un servidor
        console.log(`Donated: $${donationAmount}`);
        // También puedes agregar una lógica para mostrar un mensaje de éxito al usuario después de hacer una donación
    };

    return (
        <Card className="max-w-md mx-auto p-4 mt-8">
            <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-6 text-center font-bold">
                    Contribute to Support Us
                </Typography>
                <div className="mb-4">
                    <Input
                        type="number"
                        label="Donation Amount ($)"
                        size="lg"
                        value={donationAmount}
                        onChange={handleDonationChange}
                        required
                    />
                </div>
                <div className="text-center">
                    <Button variant="gradient" onClick={handleDonate}>
                        Donate Now
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default Contribute;
