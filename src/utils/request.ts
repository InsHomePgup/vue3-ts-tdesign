import { $fetch } from 'ofetch'

const instance = $fetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  onRequest({ options }) {
    const token = localStorage.getItem('token')
    if (token) {
      options.headers = { ...options.headers, Authorization: `Bearer ${token}` }
    }
  },
  onResponseError({ response }) {
    if (response.status === 401) {
      localStorage.removeItem('token')
    }
  },
})

export const request = <T>(url: string, options?: RequestInit): Promise<T> => {
  return instance<T>(url, options)
}
