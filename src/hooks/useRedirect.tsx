import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = (path: string, delay: number) => {
  const navigate = useNavigate();

  // 라우팅 경로, 초(ms)를 입력하면 해당 경로로 일정 시간 이후 리다이렉트
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(path);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [navigate, path, delay]);
};

export default useRedirect;
