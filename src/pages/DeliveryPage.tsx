import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import DeliveryList from '../components/deliveryComponents/DeliveryList'
import '../styling/deliveryPage.css'

export default function DeliveryPage() {
    return (
        <>
            <div className="delivery-page-container">
                <NavBar />
                <div className="delivery-page-header">
                    <h1 className="delivery-page-h1">Deliveries page</h1>
                    <SearchBar />
                </div>
                <DeliveryList />
                <div className="add-delivery-button-container">
                    <button className="add-delivery-button">
                        Add new product
                    </button>
                </div>
            </div>
        </>
    )
}
