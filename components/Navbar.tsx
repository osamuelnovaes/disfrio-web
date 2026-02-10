import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-40 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm px-6 py-4 flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
                <Link href="/disfriov1" className="flex items-center gap-2">
                    <div className="bg-primary text-white p-2 rounded-lg">
                        {/* Icon placeholder */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                    </div>
                    <div>
                        <h1 className="font-display font-bold text-2xl tracking-tight text-primary dark:text-white leading-none">DISFRI<span className="text-secondary">O</span></h1>
                        <p className="text-[0.6rem] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Distribuidora</p>
                    </div>
                </Link>
            </div>
            <div className="hidden md:flex gap-8 font-medium text-sm">
                <Link className="hover:text-secondary dark:hover:text-blue-400 transition-colors" href="/disfriov1">Início</Link>
                <Link className="hover:text-secondary dark:hover:text-blue-400 transition-colors" href="/disfriov1#categorias">Categorias</Link>
                <Link className="hover:text-secondary dark:hover:text-blue-400 transition-colors" href="/catalogo">Catálogo</Link>
                <Link className="hover:text-secondary dark:hover:text-blue-400 transition-colors" href="/disfriov1#contato">Contato</Link>
            </div>
        </nav>
    );
}
