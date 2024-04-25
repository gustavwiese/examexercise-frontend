import Product from '../Product'

export interface ProductItemProps {
    product: Product
    toggleEditClicked: () => void
}
