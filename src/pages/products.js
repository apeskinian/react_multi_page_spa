import { Link } from "react-router-dom";

function ProductsPage() {
    return (
        <>
            <h1>The Products Page</h1>
            <p>
                Go back <Link to="/">home</Link>.
            </p>
        </>
    )
}

export default ProductsPage;