import { Head, Link } from "@inertiajs/react";
import FrownIcon from "@/Components/FrownIcon";

const NotFound = ({ message, request }) => {
    console.log(request);
    return (
        <>
            <Head title={message} />
            <div className="flex min-h-[100dvh] min-w-[100vw] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-800">
                <div className="mx-auto max-w-md text-center">
                    <FrownIcon className="mx-auto h-16 w-16 text-gray-500 dark:text-gray-400" />
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
                        Oops! Page not found.
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        The page you're looking for doesn't exist. It might have
                        been moved or deleted.
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/"
                            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
