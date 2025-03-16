import { SweetAlertOptions } from "sweetalert2";

export const confirmDeleteConfig: SweetAlertOptions = {
    title: '¿Estás seguro?',
    text: 'No se revertirá luego! ',
    iconColor: '#e8c71e',
    color: '#fff',
    icon: 'question',
    showCancelButton: true,
    cancelButtonColor: '#3c43a9',
    confirmButtonColor: '#d6305f',
    confirmButtonText: 'Sí, eliminar!',
    cancelButtonText: 'Cancelar',
    background: '#151950',
  };
  
export const deleteSuccessConfig: SweetAlertOptions = {
    title: 'Eliminado!',
    text: 'La acción ha sido exitosa.',
    icon: 'success',
    background: '#151950',
    color: '#fff',
    confirmButtonColor: '#d6305f',
    confirmButtonText: 'Ok',
};