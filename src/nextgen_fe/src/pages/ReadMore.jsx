import React from 'react';
import { Table } from '../components/Table';
import { CarouselCustomNavigation } from '../components/Carousel';

const ReadMore = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-7 gap-0 mx-auto max-w-screen-xl">
            <div className="bg-blue-500 col-span-4 row-span-2">
                <div>
                    Objetivo
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non odio dignissim, finibus ipsum vitae, molestie lacus. Duis consectetur gravida tempus. Sed pharetra cursus diam feugiat condimentum. Nullam pharetra posuere risus a iaculis. Integer ac velit ornare eros consequat ultrices sed id sapien. Nulla ultrices lectus dui, non mollis lacus feugiat eget. Phasellus id aliquam metus.
                </div>
            </div>
            <div className="bg-green-500 col-span-2 row-span-2"><Table /></div>
            <div className="bg-red-500 col-span-2 row-span-2"><CarouselCustomNavigation /></div>
            <div className="bg-yellow-500 col-span-4 row-span-2 1">
                <div>
                    Acerca de
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non odio dignissim, finibus ipsum vitae, molestie lacus. Duis consectetur gravida tempus. Sed pharetra cursus diam feugiat condimentum. Nullam pharetra posuere risus a iaculis. Integer ac velit ornare eros consequat ultrices sed id sapien. Nulla ultrices lectus dui, non mollis lacus feugiat eget. Phasellus id aliquam metus.
                </div>
            </div>
            <div className="bg-purple-500 col-span-6 row-span-1">e</div>
            <div className="bg-orange-500 col-span-6 row-span-2">f</div>
        </div>
    );
};

export default ReadMore;