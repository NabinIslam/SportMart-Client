import { IoMdAddCircle } from 'react-icons/io';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { useGetAllBrandsQuery } from '@/redux/features/brand/brandApi';
import AddProductForm from './AddProductForm';
import { useState } from 'react';

const AddProductModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: categories } = useGetAllCategoriesQuery({});
  const { data: brands } = useGetAllBrandsQuery({});

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <IoMdAddCircle className="mr-1 text-xl" />
          Add a Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Add a Product</DialogTitle>
          <DialogDescription>
            Upload a product on SportMart sport e-commerce shop
          </DialogDescription>
        </DialogHeader>
        <AddProductForm
          categories={categories?.data}
          brands={brands?.data}
          setIsOpen={setIsOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
