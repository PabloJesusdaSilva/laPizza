import Image from 'next/image';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import Banner from '../img/banner.png';
import PizzaCuma from '../img/pizza1.png';
import PizzaMenta from '../img/pizza2.png';
import PizzaBana from '../img/pizza3.png';
import PizzaToca from '../img/pizza4.png';
import Store from '../img/store.png';

export default function Home() {
  return (
    <>
      <Header image={Banner} />

      <main className='w-full flex flex-col items-center gap-4 my-20'>
        <h1 className='text-3xl font-semibold'>Mais Vendidas</h1>

        <section className='flex flex-col items-center w-full md:flex-row'>
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

        <section className='w-3/4 mt-40 md:grid grid-cols-2'>
          <Image className='hidden md:block' src={Store} alt='Foto da fachada da loja' />

          <div className='flex flex-col justify-center w-full md:ml-8 gap-y-12'>
            <h1 className='text-2xl font-semibold tracking-wide'>
              Sobre a La P 
              <span className='text-yellow-500'>i</span>
              <span className='text-red-500'>z</span>
              <span className='text-green-500'>z</span>
              a
            </h1>
            <p className='tracking-wider leading-7'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. 
            </p>
            <button className='w-40 py-2 text-lg rounded-full font-semibold bg-yellow-500'>
              Ler mais
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
