import { Product, ProductFormValues } from "../types";
import { BsTrash } from "react-icons/bs";
import ProductModal from "./ProductModal";

type ProductItemProps = {
  producto: Product;
  onUpdate: (updatedProduct: ProductFormValues) => void;
  onDelete: (id: string) => void;
};

export default function ProductItem({
  producto,
  onUpdate,
  onDelete,
}: ProductItemProps) {
  return (
    <li
      key={producto._id}
      className="p-6 bg-slate-900/70 rounded-xl shadow-xl relative overflow-hidden cursor-pointer hover:scale-105 hover:bg-slate-800 transition-all duration-500 border border-gray-600/40"
    >
      <div className="w-2 h-full absolute bg-green-700 top-0 left-0"></div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black text-green-700 ">
            {producto.categoria.toLocaleUpperCase()}
          </p>
          <p className="text-xl font-bold text-gray-300">{producto.nombre}</p>
          <div className="text-amber-400/75 font-bold text-sm flex flex-col sm:flex-row sm:gap-5 w-full">
            <p>
              <span className="text-gray-400">Precio: {""}</span> $
              {producto.precio}
            </p>
            <p>
              <span className="text-gray-400">Cantidad: {""}</span>
              {producto.cantidad} {producto.unidad}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <ProductModal producto={producto} onUpdate={onUpdate} />
          </div>
          <button
            className="text-gray-500 text-xl border border-gray-500 rounded-md bg-gray-300/10 hover:border-white hover:text-white hover:bg-pink-600 cursor-pointer transition-all duration-500 w-9 flex justify-center items-center"
            onClick={() => onDelete(producto._id)}
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </li>
  );
}
