import AddProductModal from '@/components/AddProductModal';
import DeleteAlert from '@/components/DeleteAlert';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { TProduct } from '@/types';
import { useState } from 'react';

const ManageProducts = () => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState<null | string>(null);
  const { data } = useGetAllProductsQuery({});

  return (
    <main className="py-10">
      <div className="container">
        <AddProductModal />

        <h2 className="font-bold text-2xl mt-3">All Products</h2>

        {/* separator */}
        <div className="bg-primary h-1 w-16 my-1 rounded-full"></div>

        <div className="mt-6">
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Stock Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.map((product: TProduct) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <img className="size-16" src={product.image} alt="" />
                  </TableCell>
                  <TableCell className="font-semibold">
                    {product.name}
                  </TableCell>
                  <TableCell>{product.category.name}</TableCell>
                  <TableCell>{product.brand.name}</TableCell>
                  <TableCell>{product.stockQuantity}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      className="bg-yellow-500 hover:bg-yellow-600"
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        setOpenDeleteAlert(true);
                        setDeleteProductId(product._id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div></div>
      </div>
      <DeleteAlert
        openDeleteAlert={openDeleteAlert}
        setOpenDeleteAlert={setOpenDeleteAlert}
        productId={deleteProductId}
      />
    </main>
  );
};

export default ManageProducts;
