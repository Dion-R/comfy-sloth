import React from "react";
import { useEffect } from "react";

const useMounted = () => {
  const x = React.useRef(false);

  useEffect(() => {
    x.current = true;
  }, []);

  return x.current;
};
export default useMounted;
