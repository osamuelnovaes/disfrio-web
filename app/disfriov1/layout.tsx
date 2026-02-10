import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-background-light dark:bg-background-dark">
            <Navbar />
            <main className="flex-1 flex flex-col relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}
