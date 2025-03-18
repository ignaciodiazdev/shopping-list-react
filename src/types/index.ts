

export type Product  = {
    _id: string;
    nombre: string;
    categoria: string;
    precio: number;
    cantidad: number;
    unidad: string;
    comprado: boolean;
    createdAt: string;
    updatedAt: string;
}

export type ProductFormValues = Omit<Product, '_id' | 'createdAt' | 'updatedAt' >