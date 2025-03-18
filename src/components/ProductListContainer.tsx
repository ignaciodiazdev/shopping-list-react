import { useEffect } from "react";
import { useProductStore } from "../store/store";
import ProductItem from "./ProductItem";
import { ProductFormValues } from "@/types";
import Swal from "sweetalert2";
import {
  confirmDeleteConfig,
  deleteSuccessConfig,
} from "@/utils/sweetAlertConfig";

export default function ProductListContainer() {
  const { productos, cargarProductos, actualizarProducto, eliminarProductos } =
    useProductStore();

  useEffect(() => {
    cargarProductos(); // Cargar productos al montar el componente
  }, [cargarProductos]);

  console.log("hello");

  const handleUpdateProduct = (
    id: string,
    updatedProduct: ProductFormValues
  ) => {
    actualizarProducto(id, updatedProduct);
  };

  const handleDeleteProduct = (id: string) => {
    Swal.fire(confirmDeleteConfig).then((result) => {
      if (result.isConfirmed) {
        eliminarProductos(id);
        Swal.fire(deleteSuccessConfig);
      }
    });
  };

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
