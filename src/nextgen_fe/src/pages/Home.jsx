import React from "react";
import { Cards } from "../components/Cards";
import { Banner } from "../components/Banner";

const Home = () => {
    return (
        <>
            <div className=" pt-6">
                <Banner />
            </div>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 flex items-center justify-center ">
                    <Cards />
                </div>
                <div className="col-span-4 flex items-center justify-center">
                    <Cards />
                </div>
                <div className="col-span-4 flex items-center justify-center">
                    <Cards />
                </div>
            </div>
        </>

    );
};

export default Home;