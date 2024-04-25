import { useEffect, useState } from 'react'
import CreateProductForm from '../components/productComponents/CreateProductForm'
import ProductList from '../components/productComponents/ProductList'
import '../styling/productPage.css'
import SearchBar from '../components/SearchBar'
import { useProductContext } from '../contexts/ProductsContext'
import NavBar from '../components/NavBar'

export default function ProductPage() {
    const { products } = useProductContext()
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
        const lowercasedFilter = searchInput.toLowerCase()
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(lowercasedFilter)
        )
        setFilteredProducts(filtered)
    }, [searchInput, products])

    function toggleCreateForm() {
        setShowCreateForm((prev) => !prev)
    }

    return (
        <>
            <div className="product-page-container">
                <NavBar />
                <div className="product-page-header">
                    <h1 className="product-page-h1">Product page</h1>
                    <SearchBar setSearchInput={setSearchInput} />
                </div>
                <ProductList filteredProducts={filteredProducts} />
                <div className="add-product-button-container">
                    <button
                        className="add-product-button"
                        onClick={toggleCreateForm}
                    >
                        Add new product
                    </button>
                </div>
                {showCreateForm && (
                    <CreateProductForm toggleCreateForm={toggleCreateForm} />
                )}
            </div>
        </>
    )
}
