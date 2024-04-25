import Product from '../Product'

export interface EditProductFormProps {
    product: Product
    toggleEditClicked: (product: Product) => void
}
