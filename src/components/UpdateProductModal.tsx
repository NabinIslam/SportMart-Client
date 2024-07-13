import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { useGetAllBrandsQuery } from '@/redux/features/brand/brandApi';
import AddProductForm from './AddProductForm';
import { useState } from 'react';

const UpdateProductModal = () => {
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const { data: categories } = useGetAllCategoriesQuery({});
  const { data: brands } = useGetAllBrandsQuery({});

  return (
    <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
      <DialogContent className="sm:max-w-[500px] overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
        </DialogHeader>
        <AddProductForm
          categories={categories?.data}
          brands={brands?.data}
          setIsOpen={setIsUpdateOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductModal;
