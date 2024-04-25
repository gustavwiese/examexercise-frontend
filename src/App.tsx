import { Route, Routes, Navigate } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import { ProductProvider } from './contexts/ProductsContext'
import DeliveryPage from './pages/DeliveryPage'
import { DeliveriesProvider } from './contexts/DeliveriesContext'
// Import the ProductProvider

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProductProvider>
                        <ProductPage />
                    </ProductProvider>
                }
            />
            <Route
                path="/deliveries"
                element={
                    <DeliveriesProvider>
                        <DeliveryPage />
                    </DeliveriesProvider>
                }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
