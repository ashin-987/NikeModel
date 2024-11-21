import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container py-12'
    >
      {/* Text Section */}
      <div className='flex-1 flex flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:text-5xl font-bold leading-snug'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text text-lg leading-relaxed'>
        Step into the perfect fusion of comfort and style with footwear crafted to redefine your every move. Designed for unmatched quality and innovation, each pair adds a sleek touch of elegance to your journey.
        </p>
        <p className='mt-6 lg:max-w-lg info-text text-lg leading-relaxed'>
        Experience excellence in every detail, because your satisfaction is our ultimate goal.
        </p>
        
        {/* Button Section */}
        <div className='mt-10'>
          <Button 
            label='View details' 
            className='bg-coral-red hover:bg-dark-coral text-white font-semibold py-2 px-6 rounded-full shadow-md transform transition-all hover:scale-105 ease-in-out duration-300' 
          />
        </div>
      </div>

      {/* Image Section */}
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain transform transition-all hover:scale-105 hover:shadow-lg ease-in-out duration-300'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
