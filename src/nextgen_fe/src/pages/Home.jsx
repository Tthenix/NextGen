import React from "react";
import Cards from "../components/Cards"
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
            <Cards />

        </>
    );
};

export default Home;
