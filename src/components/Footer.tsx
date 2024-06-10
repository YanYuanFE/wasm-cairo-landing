import { Github, Twitter } from 'lucide-react';
import { globalConfig } from '@/constants';

export const Footer = () => {
  return (
    <footer className={'max-w-7xl mx-auto w-full'}>
      <div className={'gap-4 p-4 py-16 sm:pb-16 md:flex md:justify-between'}>
        <div className={'mb-12 flex flex-col gap-4'}>
          <a href="/" className={'flex items-center gap-2'}>
            <img src="/logo.png" className={'size-7'} alt="" />
            <span className={'self-center whitespace-nowrap text-2xl font-semibold text-neutral-900 dark:text-white'}>
              WASM Cairo
            </span>
          </a>
          <p className="max-w-xs">
            A suite of development tools and an environment for Cairo, all based on WebAssembly.
          </p>
        </div>
        <div className={'grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2'}>
          <div>
            <h2 className={'mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white'}>Products</h2>
            <ul className={'grid gap-2'}>
              <li>
                <a
                  target={'_blank'}
                  href="https://astro-editor.vercel.app/"
                  className={
                    'group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                  }
                >
                  astro editor
                </a>
              </li>
              <li>
                <a
                  target={'_blank'}
                  href="https://starklings.app/"
                  className={
                    'group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                  }
                >
                  starklings app
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">Legal</h2>
            <ul className="grid gap-2">
              <li>
                <a
                  href="#"
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  Privacy Policy
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  Terms of Service
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
        <div className="flex space-x-5 sm:mt-0 sm:justify-center">
          <a
            href={globalConfig.githubUrl}
            className="fill-neutral-500 text-neutral-500 hover:fill-neutral-900 hover:text-neutral-900 dark:hover:fill-neutral-600 dark:hover:text-neutral-600"
          >
            <Github size={16} />
            <span className="sr-only">Linkedin</span>
          </a>
          <a
            target={'_blank'}
            href="https://x.com/WasmCairo"
            className="fill-neutral-500 text-neutral-500 hover:fill-neutral-900 hover:text-neutral-900 dark:hover:fill-neutral-600 dark:hover:text-neutral-600"
          >
            <Twitter size={16} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <span className="text-sm tracking-tight text-neutral-500 dark:text-neutral-400 sm:text-center">
          Copyright © {new Date().getFullYear()}{' '}
          <a href="/" className="cursor-pointer">
            WASM-Cairo
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
