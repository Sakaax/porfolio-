"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PAGES_TO_PRELOAD = [
  '/about',
  '/stack', 
  '/contact',
  '/cv',
  '/projects/promptfix'
];

export function usePreloadPages() {
  const router = useRouter();

  useEffect(() => {
    // Précharger les pages après un petit délai pour ne pas ralentir le chargement initial
    const preloadTimer = setTimeout(() => {
      PAGES_TO_PRELOAD.forEach(page => {
        router.prefetch(page);
        
        // Précharger aussi les ressources avec un fetch léger
        if (typeof window !== 'undefined') {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        }
      });
    }, 500); // 500ms de délai

    return () => clearTimeout(preloadTimer);
  }, [router]);

  // Précharger une page spécifique au hover
  const preloadPage = (page: string) => {
    router.prefetch(page);
  };

  return { preloadPage };
}