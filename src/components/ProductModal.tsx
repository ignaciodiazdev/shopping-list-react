import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import ProductFormManager from "./ProductFormManager";
import { Product, ProductFormValues } from "@/types";

interface ProductModalProps {
  producto: Product;
  onUpdate: (updatedProduct: ProductFormValues) => void;
  onClose: () => void;
}

export default function ProductModal({
  producto,
  onUpdate,
  onClose,
}: ProductModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 text-white border-gray-400/50">
        <DialogHeader>
          <DialogTitle>Editar producto</DialogTitle>
          <DialogDescription className="text-gray-400">
            Actualizar el producto a comprar
          </DialogDescription>
        </DialogHeader>
        <ProductFormManager onSubmit={onUpdate} initialValues={producto} />
      </DialogContent>
    </Dialog>
  );
}
