import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <Header auth={auth} />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6">
                            <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2">
                                        <h1 className="text-6xl font-bold text-black dark:text-white mb-4">
                                            Taquitos
                                        </h1>
                                        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                                            Mexico's finest
                                        </h2>
                                        <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                                            Delicious &amp; juicy
                                        </h3>
                                        <p className="text-black dark:text-white mb-8">
                                            The most delicious and juicy birria
                                            tacos you'll ever try are now
                                            available in Danbury and surrounding
                                            areas with Uber Eats.
                                        </p>
                                        <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 mb-8">
                                            Place an order
                                        </button>
                                        <div className="flex space-x-8">
                                            <div>
                                                <p className="text-black dark:text-white font-bold">
                                                    Pork
                                                </p>
                                                <p className="text-gray-600">
                                                    213 kcal
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-black dark:text-white font-bold">
                                                    Chicken
                                                </p>
                                                <p className="text-gray-600">
                                                    440 kcal
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-black dark:text-white font-bold">
                                                    Beef
                                                </p>
                                                <p className="text-gray-600">
                                                    560 kcal
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-black dark:text-white font-bold">
                                                    Veggie
                                                </p>
                                                <p className="text-gray-600">
                                                    144 kcal
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img
                                            src="https://v0.dev/placeholder.svg"
                                            alt="Delicious Taquitos"
                                            className="w-full rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
