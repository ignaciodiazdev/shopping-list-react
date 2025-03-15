import ProductFormContainer from "../components/ProductFormContainer";

export default function ProductsListPage() {
  return (
    <div>
      <h2 className="my-8 text-2xl text-center font-bold text-gray-300">
        Agregar Producto
      </h2>
      <div className="md:flex md:justify-center md:items-center">
        <ProductFormContainer />
      </div>
    </div>
  );
}
