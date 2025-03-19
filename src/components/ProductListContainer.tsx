import { useCallback, useEffect } from "react";
import { useProductStore } from "../store/store";
import ProductItem from "./ProductItem";
import { ProductFormValues } from "@/types";
import Swal from "sweetalert2";
import {
  confirmDeleteConfig,
  confirmUpdateConfig,
  deleteSuccessConfig,
  updateSuccessConfig,
} from "@/utils/sweetAlertConfig";

export default function ProductListContainer() {
  const { productos, cargarProductos, actualizarProducto, eliminarProductos } =
    useProductStore();

  useEffect(() => {
    cargarProductos(); // Cargar productos al montar el componente
  }, []);

  const handleUpdateProduct = useCallback(
    async (id: string, updatedProduct: ProductFormValues) => {
      const result = await Swal.fire(confirmUpdateConfig);
      if (result.isConfirmed) {
        await actualizarProducto(id, updatedProduct);
        await Swal.fire(updateSuccessConfig);
      }
    },
    []
  );

  const handleDeleteProduct = useCallback(async (id: string) => {
    const result = await Swal.fire(confirmDeleteConfig);
    if (result.isConfirmed) {
      await eliminarProductos(id);
      await Swal.fire(deleteSuccessConfig);
    }
  }, []);

  return (
    <ul className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
      {productos.map((producto) => (
        <ProductItem
          key={producto._id}
          producto={producto}
          onUpdate={(updatedProduct) =>
            handleUpdateProduct(producto._id, updatedProduct)
          }
          onDelete={handleDeleteProduct}
        />
      ))}
    </ul>
  );
}
