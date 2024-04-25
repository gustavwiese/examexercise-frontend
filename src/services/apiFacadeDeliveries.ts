import { API_URL } from '../settings'
import { handleHttpErrors, makeOptions } from './fetchUtils'

export async function getDeliveriesApi() {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/deliveries`, options)
    const data = await handleHttpErrors(response)

    return data
}
