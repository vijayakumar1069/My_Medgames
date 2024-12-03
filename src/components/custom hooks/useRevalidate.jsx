// hooks/useRevalidate.ts
import { useRouter } from 'next/navigation';

export function useRevalidate() {
  const router = useRouter();

  const revalidate = () => {
    router.refresh();
  };

  return revalidate;
}
