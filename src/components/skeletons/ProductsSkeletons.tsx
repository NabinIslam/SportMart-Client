import { Skeleton } from '../ui/skeleton';

const ProductsSkeletons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
      <Skeleton className="border h-[525px] w-[270px] rounded-xl" />
    </div>
  );
};

export default ProductsSkeletons;
