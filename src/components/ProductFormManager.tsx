import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product, ProductFormValues } from "@/types";

interface ProductFormProps {
  onSubmit: (data: ProductFormValues) => void;
  initialValues?: Product;
}

export default function ProductFormManager({
  onSubmit,
  initialValues,
}: ProductFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    defaultValues: initialValues
      ? {
          nombre: initialValues.nombre,
          categoria: initialValues.categoria,
          precio: initialValues.precio,
          cantidad: initialValues.cantidad,
          unidad: initialValues.unidad,
          comprado: initialValues.comprado,
        }
      : {
          nombre: "",
          categoria: "",
          precio: undefined,
          cantidad: undefined,
          unidad: "",
          comprado: false,
        },
  });

  useEffect(() => {
    if (initialValues) {
      reset({
        nombre: initialValues.nombre,
        categoria: initialValues.categoria,
        precio: initialValues.precio,
        cantidad: initialValues.cantidad,
        unidad: initialValues.unidad,
        comprado: initialValues.comprado,
      });
    }
  }, [initialValues, reset]);

  const handleSubmitForm: SubmitHandler<ProductFormValues> = (data) => {
    console.log(data);
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="p-5 flex flex-col gap-3 text-gray-300"
    >
      {/* <====  Input['nombre'] ====> */}
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="nombre" className="">
          Nombre del Producto:
        </label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingrese el nombre"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
          {...register("nombre", {
            required: {
              value: true,
              message: "Digite un nombre.*",
            },
            minLength: {
              value: 2,
              message: "Minimo de 2 caracteres.*",
            },
          })}
        />
        {errors.nombre && (
          <p className="text-green-500/70 text-[12px]">
            {errors.nombre.message}
          </p>
        )}
      </div>

      {/* <====  Select['categoria'] ====> */}
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="categoria" className="">
          Categoría:
        </label>
        <select
          id="categoria"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
          {...register("categoria", {
            required: {
              value: true,
              message: "Seleccione una categoría.*",
            },
          })}
        >
          <option value="" disabled>
            Selecccione la categoría
          </option>
          <option value="Frutas">Frutas</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Verduras">Verduras</option>
          <option value="Snacks">Snacks</option>
          <option value="Carnes">Carnes</option>
        </select>
        {errors.categoria && (
          <p className="text-green-500/70 text-[12px]">
            {errors.categoria.message}
          </p>
        )}
      </div>

      {/* <====  Input['precio'] ====> */}
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="precio" className="">
          Precio:
        </label>
        <input
          type="number"
          id="precio"
          step="any"
          min={0.1}
          placeholder="Ingrese el precio"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
          {...register("precio", {
            valueAsNumber: true,
            min: {
              value: 0.1,
              message: "Digite un valor más alto que 0",
            },
            required: {
              value: true,
              message: "Digite un precio.*",
            },
          })}
        />
        {errors.precio && (
          <p className="text-green-500/70 text-[12px]">
            {errors.precio.message}
          </p>
        )}
      </div>

      {/* <====  Input['cantidad'] ====> */}
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          step="any"
          min={1}
          placeholder="Ingrese la cantidad"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
          {...register("cantidad", {
            valueAsNumber: true,
            min: {
              value: 1,
              message: "Digite un valor más alto que 0",
            },
            required: {
              value: true,
              message: "Digite una cantidad.*",
            },
          })}
        />
        {errors.cantidad && (
          <p className="text-green-500/70 text-[12px]">
            {errors.cantidad.message}
          </p>
        )}
      </div>

      {/* <====  Select['unidad'] ====> */}
      <div className="flex flex-col gap-1 text-sm">
        <label htmlFor="unidad">Unidad:</label>
        <select
          id="unidad"
          className="focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:outline-hidden bg-slate-800 border border-gray-700 rounded-md p-2 placeholder:text-gray-400 text-gray-200 font-semibold"
          {...register("unidad", {
            required: {
              value: true,
              message: "Seleccione una unidad.*",
            },
          })}
        >
          <option value="" disabled>
            Selecccione la unidad
          </option>
          <option value="Kg">Kg</option>
          <option value="Unid.">Unidades</option>
          <option value="Lit.">Litros</option>
        </select>
        {errors.unidad && (
          <p className="text-green-500/60 text-[12px]">
            {errors.unidad.message}
          </p>
        )}
        <button
          type="submit"
          className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white py-2 mt-4 rounded-md cursor-pointer hover:from-indigo-400 font-black"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
