import { useState, useEffect } from "react";

export function useScreen(breakpoint = 799) {
  const [isLargeScreen, setIsLargeScreen] = useState(null);

  const largeScreen = () => setIsLargeScreen(true);

  const smallScreen = () => setIsLargeScreen(false);

  useEffect(() => {
    const getScreenWidth = () => {
      const widthValue = screen.width;
      widthValue > breakpoint ? largeScreen() : smallScreen();
    };
    getScreenWidth();
  }, []);

  return [isLargeScreen];
}
