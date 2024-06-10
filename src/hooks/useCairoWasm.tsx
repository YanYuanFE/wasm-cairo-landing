import { useEffect, useRef } from 'react';
import * as Comlink from 'comlink';
import useSWRMutation from 'swr/mutation';
import { CairoWorker } from '../../worker';

interface ICompileCairo {
  cairoProgram: string;
  replaceIds: boolean;
}

interface ICompileContract {
  starknetContract: string;
  replaceIds: boolean;
  allowWarnings: true;
}

interface IRunCairo {
  cairoProgram: string;
  replaceIds: boolean;
  availableGas?: number;
  printFullMemory: boolean;
  useDBGPrintHint: boolean;
}

export const useCairoWasm = () => {
  const workerRef = useRef<CairoWorker>();

  const initWorker = async () => {
    const CairoWorkerWrap = Comlink.wrap<CairoWorker>(new Worker(new URL('../../worker.ts', import.meta.url)));
    // @ts-ignore
    const worker = await new CairoWorkerWrap();
    console.log(worker, 'wrorker');
    workerRef.current = worker;
  };

  useEffect(() => {
    initWorker();
  }, []);

  const { trigger: runCairo, isMutating: runLoading } = useSWRMutation(
    'runCairoProgram',
    (_: string, { arg }: { arg: IRunCairo }) => {
      return workerRef.current!.runCairoProgram(arg);
    }
  );

  const { trigger: compileCairo, isMutating: compileCairoLoading } = useSWRMutation(
    'compile-cairo',
    (_: string, { arg }: { arg: ICompileCairo }) => {
      return workerRef.current!.compileCairoProgram(arg);
    }
  );

  const { trigger: compileContract, isMutating: compileContractLoading } = useSWRMutation(
    'compile-contract',
    (_: string, { arg }: { arg: ICompileContract }) => workerRef.current!.compileStarknetContract(arg)
  );

  const { trigger: runTests, isMutating: testLoading } = useSWRMutation(
    'compile-contract',
    (_: string, { arg }: { arg: { cairoProgram: string } }) => workerRef.current!.runTests(arg)
  );

  return {
    runCairo,
    compileCairo,
    runLoading,
    compileLoading: compileCairoLoading || compileContractLoading,
    compileContract,
    runTests,
    testLoading
  };
};
