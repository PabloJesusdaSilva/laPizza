import Image from "next/image";

export default function Header({ image }) {
  return(
    <header className='w-full h-40 relative shadow-2xl md:h-80'>
        <Image className='w-full h-full absolute bg-cover' src={image} alt='foto ilustrativa do banner' />

        <div className='absolute z-10 flex justify-center items-center w-full h-full text-4xl font-bold text-white md:text-7xl'>
          <h1 className='tracking-wider'>La P
            <span className='text-yellow-500'>i</span>
            <span className='text-red-500'>z</span>
            <span className='text-green-500'>z</span>
            a
          </h1>
        </div>
      </header>
  );
}