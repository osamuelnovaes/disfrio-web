import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 py-8 mt-auto w-full">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                <p>© 2024 Disfrio Distribuidora. Todos os direitos reservados.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link className="hover:text-primary dark:hover:text-blue-400" href="#">Política de Privacidade</Link>
                    <Link className="hover:text-primary dark:hover:text-blue-400" href="#">Termos de Uso</Link>
                </div>
            </div>
        </footer>
    );
}
