import Image from "next/image";

export default function Header({ image }) {
  return(
    <header className='w-full h-80 relative shadow-2xl'>
        <Image className='w-full h-full absolute bg-cover' src={image} alt='foto ilustrativa do banner' />

        <div className='absolute z-10 flex justify-center items-center w-full h-full text-7xl font-bold text-white'>
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