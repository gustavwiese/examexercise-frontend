import { API_URL } from '../settings'
import Product from '../interfaces/Product'
import { handleHttpErrors, makeOptions } from './fetchUtils'

export async function getProductsApi(): Promise<Product[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/products`, options)
    const data = await handleHttpErrors(response)

    return data
}

export async function deleteProductApi(id: number): Promise<void> {
    const options = makeOptions('DELETE', null)
    const response = await fetch(`${API_URL}/products/${id}`, options)

    if (response.status == 409) {
        throw new Error('Cannot delete product with active orders')
    } else return await handleHttpErrors(response)
}

export async function createProductApi(product: Product) {
    const options = makeOptions('POST', product)
    const response = await fetch(`${API_URL}/products`, options)

    if (response.status == 400) {
        throw new Error(
            'Invalid product data, name already exists or ID provided'
        )
    } else {
        return await handleHttpErrors(response)
    }
}

export async function updateProductApi(product: Product) {
    const options = makeOptions('PUT', product)
    const response = await fetch(`${API_URL}/products/${product.id}`, options)

    return await handleHttpErrors(response)
}

export async function searchProductsByNameApi(name: string): Promise<Product> {
    const options = makeOptions('GET', null)
    const encodedName = encodeURIComponent(name)
    const response = await fetch(
        `${API_URL}/products/name/${encodedName}`,
        options
    )
    return await handleHttpErrors(response)
}
