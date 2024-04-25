import Product from './Product'

export interface ProductOrder {
    product: Product
    quantity: number
    weightInGrams: number
}
