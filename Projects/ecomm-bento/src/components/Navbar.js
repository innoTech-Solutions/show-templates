"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    return (
        <nav className="w-[80rem] mx-auto flex items-center justify-between [&>*]:p-2 h-[5vh] my-4">
            <div className="flex items-center [&>*]:p-2">
                <Image
                    src="https://img.icons8.com/glyph-neue/64/FA5252/basketball.png"
                    alt="basketball"
                    width={50}
                    height={50}
                />
                <h1 className="font-black text-xl mr-4 text-red-500">BALLIN{`'`}</h1>

                <div>
                    <ul className="flex items-center gap-8 text-gray-600">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
