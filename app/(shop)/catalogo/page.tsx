"use client";

import { useState } from 'react';
import { products } from '../../../data/products';
import Link from 'next/link';

export default function Catalog() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ["Todos", "Refrigeração", "Ferramentas", "Lavadoras", "Instalação", "Gases", "Isolamento", "Tubulação"];

    return (
        <>
            <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-[#002855] dark:text-white mb-2">Catálogo de Produtos</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Soluções completas em climatização e refrigeração</p>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-grow md:flex-grow-0">
                        <input
                            type="text"
                            placeholder="Buscar produtos..."
                            className="w-full md:w-80 pl-10 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#0056b3] focus:border-transparent outline-none transition-all shadow-sm text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="absolute left-3 top-3.5 text-slate-400">🔍</span>
                    </div>
                    <button className="relative p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">
                        <span className="text-xl">🛒</span>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">3</span>
                    </button>
                </div>
            </header>

            {/* Categories Horizontal Scroll */}
            <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-2 min-w-max">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-[#002855] text-white shadow-lg'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#002855] hover:text-[#002855] dark:hover:text-blue-400'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <div key={product.id} className="group bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden">
                        {/* Badge */}
                        {product.id % 3 === 0 && (
                            <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">-15%</span>
                        )}
                        {product.id % 4 === 0 && (
                            <span className="absolute top-4 right-4 bg-cyan-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">Novo</span>
                        )}

                        <div className="relative h-48 w-full bg-slate-50 dark:bg-slate-700/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden p-4 group-hover:bg-blue-50/50 dark:group-hover:bg-slate-700 transition-colors">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal"
                            />
                        </div>

                        <div className="flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-base text-slate-800 dark:text-white mb-1 line-clamp-2 min-h-[3rem]">{product.name}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">Descrição breve do produto para ocupar espaço e dar contexto.</p>
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={`text-xs ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-slate-200'}`}>★</span>
                                    ))}
                                    <span className="text-[10px] text-slate-400 ml-1">({product.reviews})</span>
                                </div>
                            </div>

                            <div className="flex items-end justify-between mt-auto">
                                <div>
                                    <span className="text-[10px] text-slate-400 block mb-0.5">Preço</span>
                                    <div className="flex flex-col">
                                        {product.id % 3 === 0 && <span className="text-xs text-slate-400 line-through">R$ 280,00</span>}
                                        <span className="text-lg font-bold text-[#002855] dark:text-white">{product.price !== "Consulte" ? product.price : "R$ 150,00"}</span>
                                    </div>
                                </div>
                                <Link href={`/catalogo/${product.id}`} className="bg-[#002855] hover:bg-[#0056b3] text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                                    🛒
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
