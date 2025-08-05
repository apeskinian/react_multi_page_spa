import {
  createBrowserRouter, RouterProvider,
  //createRoutesFromElements, Route
} from "react-router-dom";

import Homepage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RouteLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetails";

// Alternative method for creating route objects:
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);
// using path dependant layout wrappers enables custom pages layouts depending
// on paths/groups of paths
const router = createBrowserRouter([
  { path: '/',
    element: <RouteLayout />, 
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
