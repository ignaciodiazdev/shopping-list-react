import { create } from 'zustand'
import axios from 'axios'
import { Product, ProductFormValues } from '../types'

const API_URL = 'http://localhost:3000/api/products'

interface ProductState {
    productos: Product[];
    loading: boolean;
    error: string | null;
    cargarProductos: () => Promise<void>;
    agregarProducto: (product: ProductFormValues) => Promise<void>;
    actualizarProducto: (id: Product['_id'], product: ProductFormValues) => Promise<void>;
    eliminarProductos: (id: Product['_id']) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
    productos: [],
    loading: false,
    error: null,
    cargarProductos: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get<Product[]>(`${API_URL}`)
            set({ productos: response.data, loading: false })
        } catch (error) {
            set({ error: 'Error al cargar productos', loading: false });
        }
    },
    agregarProducto: async(product) => {
        set({ loading: true, error: null });
        try {
          const response = await axios.post<Product>(`${API_URL}`, product);
          set((state) => ({ productos: [...state.productos, response.data], loading: false }));
        } catch (error) {
          set({ error: 'Error al agregar producto', loading: false });
        }
    },
    actualizarProducto: async (id, product) => {
        set({ loading: true, error: null });
        try {
          const response = await axios.patch<Product>(`${API_URL}/${id}`, product);
          set((state) => ({
            productos: state.productos.map((p) => (p._id === id ? response.data : p)),
            loading: false,
          }));
        } catch (error) {
          set({ error: 'Error al actualizar producto', loading: false });
        }
      },
    eliminarProductos: async (id)  => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`${API_URL}/${id}`)
            set((state) => ({
                productos: state.productos.filter(product => product._id !== id),
                loading: false
            }))
        } catch (error) {
            set({ error: 'Error al eliminar producto', loading: false });
        }
    },
}))