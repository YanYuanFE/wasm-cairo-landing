import { Header } from '@/components/Header';
import { BackgroundBeams } from '@/components/background-beams';
import { Footer } from '@/components/Footer';
import { Meteors } from '@/components/meteors';
import { TypewriterEffectSmooth } from '@/components/typewriter-effect';

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
  return (
    <main className="min-h-screen">
      <Header />
      <section className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 text-center">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Unleashing the potential of Cairo
          </h1>
          <p></p>
          <p className="mt-12 mb-12 text-center text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
            The WASM-Cairo Project is a sophisticated ensemble of development tools designed to offer developers a
            simplified and streamlined experience when working with the Cairo programming language.
          </p>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 h-9 px-4 py-2 translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
            <span>Get Started</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <BackgroundBeams />
      </section>

      <section>
        <Products />
      </section>

      {/*<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">*/}
      {/*  <WobbleCard*/}
      {/*    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"*/}
      {/*    className=""*/}
      {/*  >*/}
      {/*    <div className="max-w-xs">*/}
      {/*      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">*/}
      {/*        Astro Editor*/}
      {/*      </h2>*/}
      {/*      <p className="mt-4 text-left  text-base/6 text-neutral-200">*/}
      {/*        Serverless online IDE built on top of WASM-Cairo.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <Image*/}
      {/*      src="/linear.webp"*/}
      {/*      width={500}*/}
      {/*      height={500}*/}
      {/*      alt="linear demo image"*/}
      {/*      className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"*/}
      {/*    />*/}
      {/*  </WobbleCard>*/}
      {/*  <WobbleCard containerClassName="col-span-1 min-h-[300px]">*/}
      {/*    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">*/}
      {/*      No shirt, no shoes, no weapons.*/}
      {/*    </h2>*/}
      {/*    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">*/}
      {/*      If someone yells “stop!”, goes limp, or taps out, the fight is over.*/}
      {/*    </p>*/}
      {/*  </WobbleCard>*/}
      {/*  <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">*/}
      {/*    <div className="max-w-sm">*/}
      {/*      <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">*/}
      {/*        Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!*/}
      {/*      </h2>*/}
      {/*      <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">*/}
      {/*        With over 100,000 mothly active bot users, Gippity AI is the most popular AI platform for developers.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <Image*/}
      {/*      src="/linear.webp"*/}
      {/*      width={500}*/}
      {/*      height={500}*/}
      {/*      alt="linear demo image"*/}
      {/*      className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"*/}
      {/*    />*/}
      {/*  </WobbleCard>*/}
      {/*</div>*/}
      <Footer />
    </main>
  );
}
