export interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    rating: number;
    reviews: number;
}

const categories = ["Refrigeração", "Ferramentas", "Lavadoras", "Instalação", "Gases"];

export const products: Product[] = Array.from({ length: 24 }).map((_, i) => ({
    id: i + 1,
    name: `Produto ${i + 1}`, // Placeholder until user provides names
    category: categories[i % categories.length], // Cycle through categories
    price: "Consulte", // Default price
    image: `/products/product_${i + 1}.jpg`,
    rating: 4 + ((i % 5) * 0.2), // Deterministic rating: 4.0, 4.2, 4.4, 4.6, 4.8
    reviews: 10 + (i * 2) // Deterministic reviews count
}));
