import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import { TCategory, TIconMapping } from '@/types';
import { FaSkiing } from 'react-icons/fa';
import {
  GiAmericanFootballBall,
  GiBasketballBall,
  GiCycling,
  GiGolfFlag,
  GiSoccerBall,
  GiTennisRacket,
} from 'react-icons/gi';
import { IoBaseballSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
  const { data } = useGetAllCategoriesQuery({});

  const iconMapping: TIconMapping = {
    Soccer: (
      <GiSoccerBall className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
    Basketball: (
      <GiBasketballBall className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
    Baseball: (
      <IoBaseballSharp className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
    Football: (
      <GiAmericanFootballBall className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
    Tennis: (
      <GiTennisRacket className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
    Golf: (
      <GiGolfFlag className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
    Cycling: (
      <GiCycling className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
    Skiing: (
      <FaSkiing className="text-4xl group-hover:rotate-[360deg] group-hover:text-primary duration-300" />
    ),
  };

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center font-bold text-4xl">Featured Categories</h2>
        <p className="text-center my-3">
          Get Your Desired Product from Featured Category!
        </p>

        <div className="mt-10 max-w-lg mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10">
          {data?.data?.map((category: TCategory) => (
            <Link
              className="group hover:scale-125 duration-300"
              to="/products"
              key={category._id}
            >
              <div className="size-20 flex flex-col items-center gap-2">
                {iconMapping[category.name]}
                <span className="font-semibold group-hover:text-primary duration-200">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
