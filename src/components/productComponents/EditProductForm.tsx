import { useState } from 'react'
import '../../styling/editProductForm.css'
import { EditProductFormProps } from '../../interfaces/props/EditProductFormProps'
import { useProductContext } from '../../contexts/ProductsContext'
import Product from '../../interfaces/Product'

export function EditProductForm({
    product,
    toggleEditClicked,
}: EditProductFormProps) {
    const { updateProduct } = useProductContext()
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [weight, setWeight] = useState(product.weightInGrams)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // Check if any values have changed
        if (
            name === product.name &&
            price === product.price &&
            weight === product.weightInGrams
        ) {
            toggleEditClicked(product)
            return // Exit the function early if no changes
        }

        try {
            const updatedProduct: Product = {
                id: product.id,
                name: name,
                price: price,
                weightInGrams: weight,
            }
            updateProduct(updatedProduct)

            toggleEditClicked(product)
        } catch (error) {
            console.error('Failed to update product:', error)
        }
    }

    return (
        <>
            <div className="edit-product-form-container">
                <form className="edit-product-form" onSubmit={handleSubmit}>
                    <h3 className="edit-product-form-header">Edit product</h3>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="price">Price in DKK:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <label htmlFor="weight">Weight in grams:</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                    />
                    <div className="edit-form-buttons-container">
                        <button
                            className="confirm-edit-product-button"
                            type="submit"
                        >
                            Confirm
                        </button>
                        <button
                            className="cancel-edit-product-button"
                            type="button"
                            onClick={() => toggleEditClicked(product)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
