const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={`${label} icon`} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray overflow-hidden text-ellipsis max-h-[4rem]">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
