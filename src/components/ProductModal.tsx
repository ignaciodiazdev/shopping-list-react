import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ProductFormManager from "./ProductFormManager";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Product, ProductFormValues } from "@/types";

interface ProductModalProps {
  producto: Product;
  onUpdate: (updatedProduct: ProductFormValues) => void;
}

export default function ProductModal({
  producto,
  onUpdate,
}: ProductModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-gray-500 text-xl border w-9 border-gray-500 rounded-md bg-gray-300/10 hover:border-white hover:text-white hover:bg-blue-600 cursor-pointer transition-all duration-500"
        >
          <HiOutlinePencilSquare />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 text-white border-gray-400/50">
        <DialogHeader>
          <DialogTitle>Editar producto</DialogTitle>
          <DialogDescription className="text-gray-400">
            Actualizar el producto a comprar
          </DialogDescription>
        </DialogHeader>
        <ProductFormManager
          onSubmit={(updatedProduct) => onUpdate(updatedProduct)}
          initialValues={producto}
        />
      </DialogContent>
    </Dialog>
  );
}
