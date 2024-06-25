'use client';
import { Header } from '@/components/Header';
import { BackgroundBeams } from '@/components/background-beams';
import { Footer } from '@/components/Footer';
import { Meteors } from '@/components/meteors';
import { ArrowRight } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import { globalConfig } from '@/constants';
import { Button } from '@/components/ui/button';

const ProductCardItem = ({
  title,
  description,
  image,
  href
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) => {
  return (
    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
      <div className="h-8 w-8 rounded-full overflow-hidden border flex items-center justify-center mb-4 border-gray-500">
        <img src={image} className={'w-full'} alt="" />
      </div>

      <h1 className="font-bold text-xl text-white mb-4 relative z-50">{title}</h1>

      <p className="font-normal text-base text-slate-500 mb-4 relative z-50">{description}</p>

      <a href={href} target={'_blank'}>
        <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">Explore</button>
      </a>

      {/* Meaty part - Meteor effect */}
      <Meteors number={20} />
    </div>
  );
};

function Products() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="w-full relative grid grid-cols-3 gap-6">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <ProductCardItem
          title={'Astro Editor'}
          description={'Serverless online IDE built on top of WASM-Cairo.'}
          image={'/astro.png'}
          href={'https://astro-editor.vercel.app/'}
        />
        <ProductCardItem
          title={'Starklings App'}
          description={'A web interactive tutorial to start learning Cairo and Starknet.'}
          image={'/starklings.svg'}
          href={'https://starklings.app/'}
        />
        <ProductCardItem
          title={'Get Involved'}
          image={'/logo.png'}
          href={'https://github.com/cryptonerdcn/wasm-cairo'}
          description={
            'Fuel the open-source revolution and join WASM-Cairo’s adventure to conquer the technology landscape. Explore our repositories today and become part of something bigger!'
          }
        />
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/playground');
  };
  return (
    <main className="min-h-screen">
      <Header className="container" />
      <section className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
        <div className="max-w-2xl mx-auto p-4 text-center ">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Unleashing the potential of Cairo
          </h1>
          <p></p>
          <p className="mt-12 mb-12 text-center text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
            The WASM-Cairo Project is a sophisticated ensemble of development tools designed to offer developers a
            simplified and streamlined experience when working with the Cairo programming language.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleClick}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring translate-y-[-1rem] animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms] h-10 px-4 py-2"
            >
              <span>Playground</span>
            </Button>
            <a
              href={globalConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center translate-y-[-1rem] animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:600ms] "
            >
              <Button
                variant={'outline'}
                className="rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2"
              >
                Go to GitHub <ArrowRight />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section>
        <Products />
      </section>
      <Footer />
    </main>
  );
}
