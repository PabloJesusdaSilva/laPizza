import Image from "next/image";

export default function Card({ image, title }) {
  return(
    <div className="w-1/5 flex flex-col items-center text-center">
      <div>
        <Image src={image} />
      </div>

      <h1 className='my-4 font-semibold text-xl'>{title}</h1>
      <p className='w-52 tracking-wide text-zinc-700' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <span className='my-10 text-4xl font-bold text-zinc-800'>R$ 23</span>

      <button className='py-2 px-5 text-lg rounded-full font-semibold bg-yellow-500'>Comprar agora</button>
    </div>
  );
}