import dynamic from 'next/dynamic';

const LazyLoaded = dynamic(() => import('./LazyLoaded'));

export default function Test() {
  return <LazyLoaded />;
}
