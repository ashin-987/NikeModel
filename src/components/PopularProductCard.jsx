import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating = 4.5 }) => {
  return (
    <div className='flex flex-col w-full max-w-[282px]'>
      <img 
        src={imgURL} 
        alt={`Image of ${name}`} 
        className='w-full h-[282px] object-cover' 
      />
      <div className='mt-4 flex items-center gap-2'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl text-slate-gray'>
          ({rating})
        </p>
      </div>
      <h3 className='mt-2 text-2xl font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
