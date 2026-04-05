import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change (desktop)
    window.scrollTo(0, 0);
    
    // Also reset mobile container scroll if it exists
    const mobileContainer = document.querySelector('.tiktok-container') as HTMLElement;
    if (mobileContainer) {
      mobileContainer.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
