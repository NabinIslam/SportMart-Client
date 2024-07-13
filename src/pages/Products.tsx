import ProductsContainer from '@/components/ProductsContainer';
import SearchProduct from '@/components/SearchProduct';
import ProductsSkeletons from '@/components/skeletons/ProductsSkeletons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetAllBrandsQuery } from '@/redux/features/brand/brandApi';
import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { TBrand, TCategory } from '@/types';
import { useState } from 'react';

const Products = () => {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    sortBy: '',
  });
  const { data: categories } = useGetAllCategoriesQuery({});
  const { data: brands } = useGetAllBrandsQuery({});
  const { data: products, isLoading } = useGetAllProductsQuery(filters);

  return (
    <main className="">
      <div className="container mx-auto px-4">
        <SearchProduct />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 px-4">
        <div className="basis-1/5 py-4 px-4 lg:px-0">
          <div className="w-full rounded-md shadow border">
            <Accordion
              type="multiple"
              defaultValue={['category', 'brand']}
              className="w-full px-3"
            >
              <AccordionItem value="category">
                <AccordionTrigger className="text-xl">
                  Categories
                </AccordionTrigger>
                <AccordionContent>
                  <RadioGroup
                    onValueChange={(value: string) => {
                      setFilters({ ...filters, category: value });
                    }}
                  >
                    {categories?.data?.map((category: TCategory) => (
                      <div
                        className="flex items-center space-x-2"
                        key={category._id}
                      >
                        <RadioGroupItem
                          className="cursor-pointer"
                          value={category.slug}
                          id={category._id}
                        />
                        <Label
                          className="cursor-pointer"
                          htmlFor={category._id}
                        >
                          {category.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="brand">
                <AccordionTrigger className="text-xl">Brands</AccordionTrigger>
                <AccordionContent>
                  <RadioGroup
                    onValueChange={(value: string) => {
                      setFilters({ ...filters, brand: value });
                    }}
                  >
                    {brands?.data?.map((brand: TBrand) => (
                      <div
                        className="flex items-center space-x-2"
                        key={brand._id}
                      >
                        <RadioGroupItem
                          className="cursor-pointer"
                          value={brand.slug}
                          id={brand._id}
                        />
                        <Label className="cursor-pointer" htmlFor={brand._id}>
                          {brand.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button
              className="m-3"
              onClick={() =>
                setFilters({
                  category: '',
                  brand: '',
                  sortBy: '',
                })
              }
            >
              Clear filters
            </Button>
          </div>
        </div>
        <div className="basis-full py-4">
          <div>
            <div className="bg-white py-2 px-2 mb-2 flex items-center justify-between rounded-lg shadow border">
              <h2 className="text-lg font-bold">Products</h2>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm">Sort By: </p>
                <div>
                  <Select
                    onValueChange={(value: string) =>
                      setFilters({ ...filters, sortBy: value })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="price-low-high">
                          Price (Low to High)
                        </SelectItem>
                        <SelectItem value="price-high-low">
                          Price (High to Low)
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            {isLoading ? (
              <ProductsSkeletons />
            ) : (
              <ProductsContainer products={products?.data} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
