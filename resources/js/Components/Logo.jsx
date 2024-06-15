import { Link } from "@inertiajs/react";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

export default function Logo() {
    return (
        <div className="mb-4 md:mb-0">
            <Link
                href="/"
                className="font-cormorant text-white font-bold text-2xl"
            >
                {appName}
            </Link>
        </div>
    );
}
