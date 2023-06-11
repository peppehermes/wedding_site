// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() { 
    return (
        <header className="bg-rose-900 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Valentina & Giuseppe
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#home" className="mr-5 hover:text-white">
                        Home
                    </a>
                    <a href="#photos" className="mr-5 hover:text-white">
                        Foto
                    </a>
                    <a href="#celebration" className="mr-5 hover:text-white">
                        Celebrazione
                    </a>
                    <a href="#reception" className="mr-5 hover:text-white">
                        Ricevimento
                    </a>
                    <a href="#gifts" className="mr-5 hover:text-white">
                        Regali
                    </a>
                </nav>
                <a href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Contatti
                    <ArrowRightIcon className="w-4 h-4 ml-1"/>
                </a>
            </div>
        </header>
    )
}