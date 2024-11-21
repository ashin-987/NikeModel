import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      {/* Image Section */}
      <div className='flex-1'>
        <img
          src={offer}
          alt='Special discount on Nike shoes, limited time offer'
          width={773}
          height={687}
          className='object-contain w-full rounded-xl shadow-xl transition-transform transform hover:scale-105 ease-in-out duration-300'
          srcSet={`${offer} 773w, ${offer} 400w`} // Add your actual image sizes
        />
      </div>

      {/* Text and Button Section */}
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Embark on a shopping adventure like no other, where unbeatable deals meet premium picks. Dive into a world of incredible value, blending top-notch selections with jaw-dropping savings.
        </p>
        <p className='mt-6 info-text'>
        Discover endless possibilities tailored to your style and needs, exceeding every expectation. Your experience with us will be nothing short of extraordinary.
        </p>

        {/* Action Buttons */}
        <div className='mt-11 flex flex-wrap gap-6'>
          <Button 
            label='Shop now' 
            iconURL={arrowRight} 
            aria-label="Shop now for the special offer"
            className='bg-coral-red hover:bg-dark-coral text-white font-semibold py-2 px-6 rounded-lg shadow-md transform transition-all hover:scale-105 ease-in-out duration-300'
          />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            aria-label="Learn more about the special offer"
            className='border-2 border-slate-gray hover:border-coral-red text-slate-gray hover:text-coral-red py-2 px-6 rounded-lg shadow-md transform transition-all hover:scale-105 ease-in-out duration-300'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
