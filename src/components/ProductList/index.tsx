import { ProductCard } from "../ProductCard";
import  './productList.scss'
export function ProductList() {
    return(
        <div className = 'product__list'>
            <ProductCard name="Teste" price= {10} />
            <ProductCard name="Cueca" price= {20} />
            <ProductCard name="Camisa" price= {30} />
            <ProductCard name="Meia" price= {40} />
            <ProductCard name="Chinelo" price= {45.33} />
            <ProductCard name="bermuda" price= {50} />
            <ProductCard name="tenis" price= {60.99} />
            <ProductCard name="oculos" price= {10.59} />

        </div>
    )
}