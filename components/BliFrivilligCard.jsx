export const BliFrivilligCard = () => {
    return (
      <div className="bg-ivory-default w-full h-72 lg:h-96 flex flex-col md:flex-row justify-center items-center md:gap-3 lg:gap-5 p-2 px-6 md:w-4/5 lg:w-3/4 max-w-readable md:px-20 lg:px-40 mx-auto md:mb-10 lg:mb-30 lg:mt-2">

        <div className="flex flex-col justify-center items-center ">
        <h3 className="font-jomhuria text-5xl tracking-wide text-forestgreen-default">
          Vil du bli frivillig?
        </h3>
        <p className="font-opensans text-base lg:text-lg">Ønsker du å hjelpe bruktmiljøet? Ved å være frivillig er du med på å gjøre en forandring. Les mer om hva det går ut på og bli frivillig i dag!  </p>
        </div>
        <button className="mt-4 outline outline-offset-2 outline-1 p-1 px-2 font-opensans font-semibold rounded-sm outline-forestgreen-default md:px-4 md:outline-1.5 text-forestgreen-default lg:order-last hover:bg-forestgreen-default hover:text-ivory-default transition transition-duration-300">
          Bli frivillig!
        </button>
      </div>
    );
  };
  