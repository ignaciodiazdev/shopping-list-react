export default function ProductFormManager() {
  return (
    <form className="p-5 flex flex-col gap-3 text-gray-300">
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="nombre" className="">
          Nombre del Producto:
        </label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingrese el nombre"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
        />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="categoria" className="">
          Categoría:
        </label>
        <select
          id="categoria"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
        >
          <option value="Frutas">Frutas</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Verduras">Verduras</option>
          <option value="Snacks">Snacks</option>
          <option value="Carnes">Carnes</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="precio" className="">
          Precio:
        </label>
        <input
          type="number"
          id="precio"
          placeholder="Ingrese el precio"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
        />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="cantidad" className="">
          Cantidad:
        </label>
        <input
          type="number"
          id="cantidad"
          placeholder="Ingrese la cantidad"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
        />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="unidad" className="">
          Unidad:
        </label>
        <select
          id="unidad"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
        >
          <option value="Frutas">Kg</option>
          <option value="Bebidas">Unidades</option>
          <option value="Verduras">Litros</option>
        </select>
      </div>
      <div className="bg-green-500"></div>
    </form>
  );
}
