

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { RootLayout } from './layouts/RootLayout'
// import { AuthLayout } from './layouts/AuthLayout'
// import Home from './pages/Home'
// import Products from './pages/Products'
// import ProductDetail from './pages/ProductDetail'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Cart from './pages/Cart'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//         { index: true, element: <Home /> },
//         { path: "products", element: <Products /> },
//         { path: "products/:id", element: <ProductDetail /> },
//         { path: "cart", element: <Cart /> }
//     ]
//   },
//   {
//     element: <AuthLayout />,
//     children: [
//         { path: '/login', element: <Login /> },
//         { path: '/signup', element: <Signup /> }
//     ]
//   }
// ])


// function App() {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/superadmin"
          element={
            <ProtectedRoute>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
