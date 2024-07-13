import { useDeleteProductMutation } from '@/redux/features/product/productApi';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { toast } from 'sonner';

type TDeleteAlertProps = {
  openDeleteAlert: boolean;
  setOpenDeleteAlert: React.Dispatch<React.SetStateAction<boolean>>;
  productId: string | null;
};

const DeleteAlert = ({
  openDeleteAlert,
  setOpenDeleteAlert,
  productId,
}: TDeleteAlertProps) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDeleteProduct = async () => {
    const res = await deleteProduct(productId).unwrap();

    if (res.success) {
      setOpenDeleteAlert(false);
      toast.success(`Product deleted successfully`);
    }
  };

  return (
    <AlertDialog open={openDeleteAlert} onOpenChange={setOpenDeleteAlert}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            product and remove the product data from database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDeleteProduct()}
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : ' Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
