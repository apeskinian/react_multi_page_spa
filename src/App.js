import {
  createBrowserRouter, RouterProvider,
  //createRoutesFromElements, Route
} from "react-router-dom";
import Homepage from "./pages/home";
import ProductsPage from "./pages/products";

// Alternative method for creating route objects:
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/products', element: <ProductsPage /> }
]);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
