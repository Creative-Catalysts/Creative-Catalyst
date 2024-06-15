import { Link } from "@inertiajs/react";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-8 md:py-10 lg:py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <Logo name="test"/>
                <div className="text-gray-400 text-sm">
                    &copy; 2024 LinkHub. All rights reserved.
                </div>
                <nav className="flex space-x-4 md:space-x-6">
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        Features
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
