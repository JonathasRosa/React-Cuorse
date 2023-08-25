// eslint-disable-next-line no-unused-vars
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();
    const url = "http://localhost:3000/productsw" + searchParams
    // eslint-disable-next-line no-unused-vars
    const { data: items, loading, error } = useFetch(url);

    return (
        <div>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$: {item.price}</p>
                        <link to={`/products/${item.id}`}>Detalhes</link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search