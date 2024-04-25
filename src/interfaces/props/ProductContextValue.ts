import Product from '../Product'

export interface ProductContextValue {
    products: Product[]
    isLoading: boolean
    error: string | null
    deleteProduct: (id: number) => Promise<void>
    createProduct: (product: Product) => Promise<void>
    updateProduct: (product: Product) => Promise<void>
}
