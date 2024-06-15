import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Guest({ children }) {
    return (
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
            <Header />
            <main className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white m-6">
                {children}
            </main>
            <Footer />
        </div>
    );
}
