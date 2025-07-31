import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // jump to the very top of the page
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // or 'smooth'
  }, [pathname]);

  return null; // this component doesn’t render anything
}
