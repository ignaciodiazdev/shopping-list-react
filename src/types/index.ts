

export type Product  = {
    _id: string;
    nombre: string;
    categoria: string;
    precio: number;
    cantidad: number;
    unidad: string;
    comprado: boolean;
    createdAt: string;
}

export type ProductForm = Omit<Product, '_id' | 'createdAt' | 'comprado'>