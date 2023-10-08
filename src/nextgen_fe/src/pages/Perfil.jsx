import React from 'react';
import { Table } from '../components/Table';
import { CarouselCustomNavigation } from '../components/Carousel';
import { Redes } from '../components/Redes';

const Perfil = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-7 gap-0 mx-auto max-w-screen-xl">
            <div className=" col-span-4 row-span-2 flex flex-col items-center justify-center p-4">
                <div>
                    Objetivo
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non odio dignissim, finibus ipsum vitae, molestie lacus. Duis consectetur gravida tempus. Sed pharetra cursus diam feugiat condimentum. Nullam pharetra posuere risus a iaculis. Integer ac velit ornare eros consequat ultrices sed id sapien. Nulla ultrices lectus dui, non mollis lacus feugiat eget. Phasellus id aliquam metus.
                </div>
            </div>
            <div className=" col-span-2 row-span-2 flex items-center justify-center p-4"><Table /></div>
            <div className="col-span-2 row-span-2 flex items-center justify-center p-4"><pfp /></div>
            <div className="col-span-4 row-span-2 flex flex-col items-center justify-center p-4">
                <div>
                    Acerca de
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non odio dignissim, finibus ipsum vitae, molestie lacus. Duis consectetur gravida tempus. Sed pharetra cursus diam feugiat condimentum. Nullam pharetra posuere risus a iaculis. Integer ac velit ornare eros consequat ultrices sed id sapien. Nulla ultrices lectus dui, non mollis lacus feugiat eget. Phasellus id aliquam metus.
                </div>
            </div>
            <div className=" col-span-6 row-span-1 flex items-center justify-center p-4"><Redes /></div>
            <div className=" col-span-6 row-span-2 flex items-center justify-center p-4">f</div>
        </div>
    );
};

export default Perfil;