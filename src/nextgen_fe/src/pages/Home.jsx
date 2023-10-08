import React from "react";
import { Cards } from "../components/Cards";
import { Banner } from "../components/Banner";

const Home = () => {
    return (
        <>
            <div className="pt-6">
                <Banner />
            </div>
            <div className="grid grid-cols-1 gap-4 mx-auto max-w-screen-md md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <div className="flex items-center justify-center">
                    <Cards />
                </div>
                <div className="flex items-center justify-center">
                    <Cards />
                </div>
                <div className="flex items-center justify-center">
                    <Cards />
                </div>
            </div>
        </>
    );
};

export default Home;
