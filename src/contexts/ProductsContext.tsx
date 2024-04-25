import { createContext, useContext, useState, useEffect } from 'react'
import {
    createProductApi,
    deleteProductApi,
    getProductsApi,
    updateProductApi,
} from '../services/apiFacadeProducts' // Assuming you have a service for API calls
import Product from '../interfaces/Product'
import { ProductContextValue } from '../interfaces/props/ProductContextValue'

const ProductContext = createContext<ProductContextValue>({
    products: [],
    isLoading: false,
    error: null,
    deleteProduct: async () => {},
    createProduct: async () => {},
    updateProduct: async () => {},
})

// eslint-disable-next-line react-refresh/only-export-components
export function useProductContext() {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error(
            'useProductContext must be used within a ProductProvider'
        )
    }
    return context
}

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true)
            try {
                const fetchedProducts: Product[] = await getProductsApi()
                setProducts(fetchedProducts)
            } catch (error) {
                setError('Failed to fetch products')
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    async function deleteProduct(id: number) {
        await deleteProductApi(id)

        // After deletion, update the products state locally without refetching
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
        )
    }

    async function createProduct(product: Product) {
        const createdProduct: Product = await createProductApi(product)
        setProducts((prevProducts) => [...prevProducts, createdProduct])
    }

    async function updateProduct(product: Product) {
        const updatedProduct = await updateProductApi(product)

        setProducts((prevProducts) =>
            prevProducts.map((productItem) =>
                productItem.id === updatedProduct.id
                    ? updatedProduct
                    : productItem
            )
        )
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                isLoading,
                error,
                deleteProduct,
                createProduct,
                updateProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}
