import './productCard.scss'

interface ProductCardProps {
    name: string;
    price: number;  
}


export function ProductCard({name, price} : ProductCardProps){
    return (
        <div className="product__list--card">
            <h2>{name}</h2>
            <p>{price.toLocaleString('pt-BR', {style:"currency", currency:'BRL'})}</p>
            <button>Adicionar ao carrinho</button>
        </div>
    )
}