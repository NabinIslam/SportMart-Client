import { useGetAllProductsQuery } from '@/redux/features/product/productApi';
import { TProduct } from '@/types';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchProduct = () => {
  const { data } = useGetAllProductsQuery({});
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(data?.data[1]);

  const filteredProduct =
    query === ''
      ? data?.data
      : data?.data?.filter((product: TProduct) => {
          return product.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="border mt-4 shadow rounded-lg">
      <Combobox
        value={selected}
        onChange={value => setSelected(value)}
        onClose={() => setQuery('')}
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-black',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            placeholder="Search product"
            onChange={event => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5"></ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-xl border bg-white shadow [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50 shadow mt-2 rounded-lg'
          )}
        >
          {filteredProduct?.map((product: TProduct) => (
            <ComboboxOption
              key={product._id}
              value={product}
              className="group flex cursor-default items-center gap-2 rounded-lg select-none data-[focus]:bg-white/10 text-black "
            >
              <Link
                className="hover:bg-slate-200 w-full rounded-md p-2"
                to={`/products/${product.slug}`}
              >
                <div className="flex items-center gap-4">
                  <img
                    className="size-12 border rounded-md"
                    src={product.image}
                    alt={product.name}
                  />
                  <h5 className="font-semibold text-sm">{product.name}</h5>
                </div>
              </Link>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default SearchProduct;
