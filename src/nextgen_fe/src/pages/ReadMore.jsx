import React from 'react';
import { Table } from '../components/Table';
import { CarouselCustomNavigation } from '../components/Carousel';
import { Redes } from '../components/Redes';

const ReadMore = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-7 gap-0 mx-auto max-w-screen-xl">
            <div className=" col-span-4 row-span-2 flex flex-col items-center justify-center p-4">
                <div>
                    objetive
                </div>
                <div>
                    Your objetive!
                </div>
            </div>
            <div className=" col-span-2 row-span-2 flex items-center justify-center p-4"><Table /></div>
            <div className="col-span-2 row-span-2 flex items-center justify-center p-4"><CarouselCustomNavigation /></div>
            <div className="col-span-4 row-span-2 flex flex-col items-center justify-center p-4">
                <div>
                    About the project
                </div>
                <div>
                    About the project!
                </div>
            </div>
            <div className=" col-span-6 row-span-1 flex items-center justify-center p-4"><Redes /></div>
            <div className=" col-span-6 row-span-2 flex items-center justify-center p-4"></div>
        </div>
    );
};

export default ReadMore;
