import ProductFormContainer from "../components/ProductFormContainer";
import ProductListContainer from "../components/ProductListContainer";

export default function ProductsListPage() {
  return (
    <div>
      <section className="py-5">
        <h2 className="my-6 text-2xl text-center font-bold text-gray-300">
          Agregar Producto
        </h2>
        <div className="md:flex md:justify-center md:items-center">
          <ProductFormContainer />
        </div>
      </section>
      <section className="py-8">
        <h2 className="my-6 text-2xl text-center font-bold text-gray-300">
          Lista de Compras
        </h2>
        <div className="py-5">
          <ProductListContainer />
        </div>
      </section>
    </div>
  );
}
