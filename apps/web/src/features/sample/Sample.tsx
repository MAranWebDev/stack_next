import { SampleContextProvider } from './Sample.context';
import { SampleButton } from './SampleButton';
import { SampleCounter } from './SampleCounter';

export const Sample = () => {
  return (
    <SampleContextProvider>
      <SampleCounter />
      <SampleButton />
    </SampleContextProvider>
  );
};