import Image from 'next/image';

import Header from './components/Header';
import Card from './components/Card';

import Banner from '../img/banner.png';
import PizzaCuma from '../img/pizza1.png';
import PizzaMenta from '../img/pizza2.png';
import PizzaBana from '../img/pizza3.png';
import PizzaToca from '../img/pizza4.png';

export default function Home() {
  return (
    <>
      <Header image={Banner} />

      <main className='w-full flex flex-col items-center gap-4 my-16'>
        <h1 className='text-4xl font-semibold'>Mais Vendidas</h1>

        <section className='flex justify-center gap-x-10 mt-4'>
          <Card 
            image={PizzaCuma}
            title='La Cuma' 
          />
          <Card 
            image={PizzaMenta}
            title='La Menta'
           />
          <Card 
            image={PizzaBana}
            title='La Bana' 
          />
          <Card 
            image={PizzaToca}
            title='La Toca' 
          />
        </section>
      </main>
    </>
  );
}
