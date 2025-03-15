import ProductFormManager from "./ProductFormManager";
import coffeeLogo from "../assets/shop-store.svg";

export default function ProductFormContainer() {
  return (
    <div className="shadow-2xl rounded-lg md:min-w-3xl relative overflow-hidden">
      <div className="absolute w-full h-4 bg-slate-700"></div>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full flex justify-center items-center">
          <img
            src={coffeeLogo}
            alt="React logo"
            className="hidden md:flex md:p-5 max-h-[370px]"
          />
        </div>
        <div className="w-full">
          <ProductFormManager />
        </div>
      </div>
    </div>
  );
}
