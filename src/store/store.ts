import { create } from 'zustand'
import axios from 'axios'
import { Product } from '../types'

const API_URL = 'http://localhost:3000/api/products'

interface ProductState {
    productos: Product[]
    cargarProductos: () => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
    productos: [],
    cargarProductos: async () => {
        try {
            const response = await axios.get<Product[]>(`${API_URL}`)
            set({ productos: response.data })
        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    }
}))