import { Delivery } from '../../interfaces/Delivery'
import '../../styling/orderDetails.css'

interface OrderDetailsProps {
    deliveryDetails: Delivery | null
    setToggleDetails: (value: boolean) => void
}

export default function OrderDetails({
    deliveryDetails,
    setToggleDetails,
}: OrderDetailsProps) {
    return (
        <>
            <div className="order-details-container">
                <div className="exit-button-container">
                    <button
                        className="order-details-exit-button"
                        onClick={() => setToggleDetails(false)}
                    >
                        X
                    </button>
                </div>
                <div className="order-details-header">
                    <h3>{`Order ${deliveryDetails?.id} details`}</h3>
                    <p>Order weight: {deliveryDetails?.totalWeightInKg} kg</p>
                </div>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveryDetails?.productOrders.map((order, index) => (
                            <tr key={index} className="table-row-orders">
                                <td>{order.product.name}</td>
                                <td>{order.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="add-order-button-container">
                    <button className="add-order-button">Add order</button>
                </div>
            </div>
        </>
    )
}
