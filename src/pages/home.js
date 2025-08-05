// Using Link element instead of anchor elements so that a new request is not sent
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <>
            <h1>My Home Page!</h1>
            <p>
                Go to the list of <Link to="/products">products</Link>.
            </p>
        </>
    )
}

export default Homepage;