import { createContext, useContext, useEffect, useState } from 'react'
import { DeliveriesContextValue } from '../interfaces/props/DeliveriesContextValue'
import { getDeliveriesApi } from '../services/apiFacadeDeliveries'
import { Delivery } from '../interfaces/Delivery'

const DeliveriesContext = createContext<DeliveriesContextValue>({
    deliveries: [],
    isLoading: false,
    error: null,
})

// eslint-disable-next-line react-refresh/only-export-components
export function useDeliveriesContext() {
    const context = useContext(DeliveriesContext)
    if (!context) {
        throw new Error(
            'useDeliveriesContext must be used within a DeliveriesProvider'
        )
    }
    return context
}

export function DeliveriesProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [deliveries, setDeliveries] = useState<Delivery[]>([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchDeliveries() {
            setLoading(true)
            try {
                const fetchedDeliveries: Delivery[] = await getDeliveriesApi()
                setDeliveries(fetchedDeliveries)
            } catch (error) {
                setError('Failed to fetch deliveries')
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchDeliveries()
    }, [])

    return (
        <DeliveriesContext.Provider value={{ deliveries, isLoading, error }}>
            {children}
        </DeliveriesContext.Provider>
    )
}
