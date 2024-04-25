import { Delivery } from '../../interfaces/Delivery'

interface DeliveryItemProps {
    delivery: Delivery
    handleToggleDetails: (delivery: Delivery) => void
}

export default function DeliveryItem({
    delivery,
    handleToggleDetails,
}: DeliveryItemProps) {
    return (
        <>
            <tr className="table-row-delivery">
                <td>{delivery.deliveryDate.toString()}</td>
                <td>{delivery.fromWarehouse}</td>
                <td>{delivery.destination}</td>
                <td>{delivery.id}</td>
                <td>
                    <button
                        className="table-button-delivery"
                        onClick={() => handleToggleDetails(delivery)}
                    >
                        See details
                    </button>
                </td>
            </tr>
        </>
    )
}
