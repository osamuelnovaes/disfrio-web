import { products } from '../../../../data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-6">
                <Link href="/catalogo" className="text-[#0056b3] hover:underline flex items-center gap-2">
                    ← Voltar para o Catálogo
                </Link>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50 dark:bg-slate-700 rounded-2xl p-8">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <span className="text-[#0056b3] font-bold uppercase tracking-wider mb-2">{product.category}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">{product.name}</h1>

                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                        Este produto faz parte da nossa linha de {product.category.toLowerCase()}.
                        Garantimos qualidade e durabilidade para suas instalações.
                        Entre em contato para verificar disponibilidade imediata e condições de pagamento.
                    </p>

                    <div className="flex items-center gap-2 mb-8">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={`text-2xl ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-slate-300'}`}>★</span>
                        ))}
                        <span className="text-slate-400 ml-2">({product.reviews} avaliações)</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-sm text-slate-500">Preço:</span>
                            <span className="text-3xl font-bold text-[#002855] dark:text-white">{product.price}</span>
                        </div>

                        <div className="flex gap-4 flex-wrap">
                            <a
                                href={`https://wa.me/5519984400367?text=${encodeURIComponent(`Olá Antônio, gostaria de comprar o produto: ${product.name}`)}`}
                                target="_blank"
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <span>Comprar com Antônio</span>
                            </a>
                            <a
                                href={`https://wa.me/5519984400367?text=${encodeURIComponent(`Olá Antônio, tenho dúvidas sobre o produto: ${product.name}`)}`}
                                target="_blank"
                                className="flex-1 bg-[#002855] hover:bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <span>Falar com Especialista</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-[#002855] dark:text-blue-300">📦</div>
                            <div>
                                <p className="font-bold text-sm">Entrega Rápida</p>
                                <p className="text-xs text-slate-500">Para todo o Brasil</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-[#002855] dark:text-blue-300">🛡️</div>
                            <div>
                                <p className="font-bold text-sm">Garantia</p>
                                <p className="text-xs text-slate-500">Produto Original</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
