import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = (path: string, delay: number) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(path);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [navigate, path, delay]);
};

export default useRedirect;
