import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300 bg-background-light dark:bg-background-dark">
            <Navbar />
            <main className="flex-1 flex flex-col px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
