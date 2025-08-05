// Using Link element instead of anchor elements so that a new request is not sent
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
    // Using useNavigate to programmatically navigate to pages
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('products');
    }

    return (
        <>
            <h1>My Home Page!</h1>
            <p>
                Go to the list of <Link to="products">products</Link>.
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    )
}

export default Homepage;