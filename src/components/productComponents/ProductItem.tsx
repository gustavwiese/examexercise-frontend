import { useProductContext } from '../../contexts/ProductsContext'
import { ProductItemProps } from '../../interfaces/props/ProductItemProps'

export default function ProductItem({
    product,
    toggleEditClicked,
}: ProductItemProps) {
    const { deleteProduct } = useProductContext()

    function handleDeleteClicked(id: number) {
        deleteProduct(id)
    }

    return (
        <>
            <tr className="table-row">
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.weightInGrams}</td>
                <td>
                    <button
                        className="table-button"
                        onClick={() =>
                            handleDeleteClicked(product.id as number)
                        }
                    >
                        Delete
                    </button>
                </td>
                <td>
                    <button
                        className="table-button"
                        onClick={toggleEditClicked}
                    >
                        Edit
                    </button>
                </td>
            </tr>
        </>
    )
}
