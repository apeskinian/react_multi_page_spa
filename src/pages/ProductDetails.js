import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            {/* using relative='path' for a back returns back to the last /
            rather then back to the home */}
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    )
};

export default ProductDetailPage;