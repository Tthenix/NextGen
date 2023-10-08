import React from "react";
import { Cards } from "../components/Cards";
import { Banner } from "../components/Banner";
import { useLocation } from "react-router-dom";

const Home = (props) => {
    const location = useLocation();
    const { user } = location.state || {};
    return (
        <>
            {user && (
                <div className="text-center mt-4">
                    <p className="text-lg font-semibold">Bienvenido, {user.user}</p>
                </div>
            )}
            <div className="pt-6">
                <Banner />
            </div>
            <div className="grid grid-cols-1 gap-4 mx-auto max-w-screen-xl md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <div className="flex items-center justify-center">
                    <Cards
                        projectName="Nombre del proyecto"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra."
                        readMoreLink="/ReadMore"
                    />

                </div>
                <div className="flex items-center justify-center">
                    <Cards
                        projectName="Nombre del proyecto"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra."
                        readMoreLink="/ReadMore"
                    />

                </div>
                <div className="flex items-center justify-center">
                    <Cards
                        projectName="Nombre del proyecto"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra."
                        readMoreLink="/ReadMore"
                    />

                </div>
            </div>
        </>
    );
};

export default Home;
