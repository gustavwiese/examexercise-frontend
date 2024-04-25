import { ProductOrder } from './ProductOrder'

export interface Delivery {
    id?: number
    deliveryDate: Date
    fromWarehouse: string
    destination: string
    productOrders: ProductOrder[]
    totalWeightInKg?: number
}
