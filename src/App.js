import {
  createBrowserRouter, RouterProvider,
  //createRoutesFromElements, Route
} from "react-router-dom";

import Homepage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RouteLayout from "./pages/Root";

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
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/products', element: <ProductsPage /> }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
