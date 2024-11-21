import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      {/* Header */}
      <h3 className='text-4xl lg:text-5xl leading-[68px] font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>

      {/* Subscription Form */}
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input
          type='email'
          placeholder='subscribe@nike.com'
          className='input px-4 py-2 rounded-full w-full '
          aria-label='Enter your email address'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button 
            label='Sign Up' 
            fullWidth 
            className='bg-coral-red hover:bg-dark-coral text-white font-semibold py-2 px-6 rounded-full shadow-md transform transition-all hover:scale-105 ease-in-out duration-300' 
            aria-label='Click to sign up for the newsletter'
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
