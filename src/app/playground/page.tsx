'use client';
import { Header } from '@/components/Header';
import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BugPlay, Hammer, Play } from 'lucide-react';
import { useCairoWasm } from '@/hooks/useCairoWasm';
import { checkIsContract, defineTheme } from '@/lib/common';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';

const code = `#[starknet::contract]
mod HelloCairo {
    #[storage]
    struct Storage {}

    #[external(v0)]
    fn hello_cairo(self: @ContractState) -> felt252 {
        return 'Hello World!';
    }
}`;

const { isReplaceIds, availableGas, printFullMemory, useCairoDebugPrint } = {
  isReplaceIds: true,
  availableGas: 1000000,
  printFullMemory: false,
  useCairoDebugPrint: false
};

export default function PlayGround() {
  const [value, setValue] = useState(code || '');
  const [output, setOutput] = useState('');
  const { compileCairo, compileContract, compileLoading, runCairo, runLoading, testLoading, runTests } = useCairoWasm();

  useEffect(() => {
    defineTheme('oceanic-next');
  }, []);

  const handleEditorChange = (value?: string) => {
    setValue(value || '');
  };

  const handleCompile = async () => {
    //get textarea cairo_program's value
    const cairo_program = value;
    console.log(cairo_program);
    if (!cairo_program) {
      return;
    }
    if (checkIsContract(cairo_program)) {
      const res = await compileContract({
        starknetContract: cairo_program,
        replaceIds: isReplaceIds,
        allowWarnings: true
      });
      console.log(res, 'res');
      setOutput(res);
    } else {
      const res = await compileCairo({ cairoProgram: cairo_program, replaceIds: isReplaceIds });
      console.log(res, 'res');
      setOutput(res);
    }
  };

  const handleRun = async () => {
    //get textarea cairo_program's value
    const cairo_program = value;
    if (!cairo_program) {
      return;
    }
    const gasValue = availableGas;
    const res = await runCairo({
      cairoProgram: cairo_program,
      replaceIds: isReplaceIds,
      availableGas: !gasValue ? undefined : parseInt(String(gasValue)),
      printFullMemory: printFullMemory,
      useDBGPrintHint: useCairoDebugPrint
    });
    console.log(res, 'res');
    setOutput(res);
  };

  const handleRunTest = async () => {
    const cairo_program = code;
    if (!cairo_program) {
      return;
    }
    const res = await runTests({
      cairoProgram: cairo_program
    });
    console.log(res, 'res');
    setOutput(res);
  };

  const hasError = output.includes('failed');

  return (
    <main className="min-h-screen">
      <Header />
      <div className={'pt-24 px-6 flex gap-4'}>
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl flex-1">
          <Editor
            height="86vh"
            width={`100%`}
            language={'rust'}
            value={value}
            theme={'oceanic-next'}
            onChange={handleEditorChange}
          />
        </div>
        <div className={'flex-[0_0_500px]'}>
          <div className="flex gap-4 mb-4">
            <Button onClick={handleCompile} loading={compileLoading} className={'gap-1'}>
              <Hammer size={16} />
              Compile
            </Button>
            <Button onClick={handleRun} loading={runLoading} className={'gap-1'}>
              <Play size={16} />
              Run Cairo
            </Button>
            <Button onClick={handleRunTest} loading={testLoading} className={'gap-1'}>
              <BugPlay size={16} />
              Run Test
            </Button>
          </div>
          <h1 className="font-bold text-xl text-white my-2">Output</h1>
          <Textarea
            className={cn(
              'w-full h-[73.5vh] bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto py-1 px-2',
              hasError ? 'text-red-500' : 'text-green-500'
            )}
            value={output}
            readOnly
          ></Textarea>
        </div>
      </div>
    </main>
  );
}
