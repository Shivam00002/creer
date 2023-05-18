import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setProgress(0);
    };

    const handleRouteComplete = () => {
      setProgress(100);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router]);

  return (
    <div
      style={{
        width: `${progress}%`,
        height: '4px',
        background: '#0070f3',
        transition: 'width 0.2s',
      }}
    />
  );
};

export default Progress;
