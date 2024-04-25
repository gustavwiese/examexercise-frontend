import { Delivery } from '../Delivery'

export interface DeliveriesContextValue {
    deliveries: Delivery[]
    isLoading: boolean
    error: string | null
}
