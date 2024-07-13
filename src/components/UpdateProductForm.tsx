import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { TBrand, TCategory } from '@/types';
import Rating from 'react-rating';
import { FaStar, FaUpload } from 'react-icons/fa';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from './ui/button';
import axios from 'axios';
import { useAddProductMutation } from '@/redux/features/product/productApi';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

type TAddProductFormProps = {
  categories: TCategory[];
  brands: TBrand[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Inputs = {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  image: FileList;
};

const AddProductForm = ({
  categories,
  brands,
  setIsOpen,
}: TAddProductFormProps) => {
  const [category, setCategory] = useState<null | string>(null);
  const [brand, setBrand] = useState<null | string>(null);
  const [rating, setRating] = useState<null | number>(null);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [addProduct, { isLoading }] = useAddProductMutation();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_APP_IMAGEBB_API_KEY
    }`;

    const imgRes = await axios.post(url, formData);

    if (imgRes.status === 200) {
      const product = {
        name: data.name,
        description: data.description,
        category,
        brand,
        stockQuantity: Number(data.stockQuantity),
        rating,
        price: Number(data.price),
        image: imgRes.data.data.url,
      };

      const res = await addProduct(product).unwrap();

      console.log(res);

      if (res.success) {
        reset();
        setIsOpen(false);
        toast.success(`Product added successfully`);
      } else {
        toast.error(`Could not add the product`);
      }
    }
  };

  return (
    <form className="space-y-3" action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          {...register('name')}
          className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
          type="text"
          placeholder="Enter product name"
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          {...register('description')}
          className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
          placeholder="Enter product description"
          rows={10}
        />
      </div>

      <div className="flex gap-2 justify-between">
        <div className="basis-1/2">
          <Label htmlFor="category">Select Category</Label>
          <Select onValueChange={(value: string) => setCategory(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories?.map((category: TCategory) => (
                  <SelectItem value={category._id} key={category._id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="basis-1/2">
          <Label htmlFor="brand">Select Brand</Label>
          <Select onValueChange={(value: string) => setBrand(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {brands?.map((brand: TBrand) => (
                  <SelectItem value={brand._id} key={brand._id}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        <div className="basis-1/2">
          <Label htmlFor="stockQuantity">Stock Quantity</Label>
          <Input
            {...register('stockQuantity')}
            className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
            type="number"
            placeholder="Enter stock quantity"
          />
        </div>
        <div className="basis-1/2">
          <div>
            <Label htmlFor="stockQuantity">Rating</Label>
          </div>
          {/* @ts-expect-error their is no type declaration file for react rating*/}

          <Rating
            onClick={(value: number) => setRating(value)}
            className="text-3xl text-primary"
        
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="stockQuantity">Price</Label>
        <Input
          {...register('price')}
          className="focus-visible:ring-0 focus:border-primary border-2 placeholder:text-slate-400"
          type="number"
          placeholder="Enter product price"
        />
      </div>
      <div>
        <Label htmlFor="stockQuantity">Image</Label>
        <Input {...register('image')} type="file" />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <FaUpload className="mr-1" />
              'Upload'
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
