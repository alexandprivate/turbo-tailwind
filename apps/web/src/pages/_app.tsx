import { Navigation } from '../layouts/Navigation';
import { AppProps } from 'next/app';
import 'ui/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
}
