import { RefObject, useCallback, useEffect, useRef } from "react";

export const useInfinityScroll = <T>({
  limit = 10,
  setItems,
  getItems,
}: {
  limit?: number;
  setItems: (values: T[]) => void;
  getItems: (page: number, limit: number) => Promise<T[]>;
}): RefObject<HTMLUListElement> => {
  const observer = useRef<HTMLUListElement>(null);
  const isLoading = useRef(false);
  const currentPage = useRef(0);

  const loadItems = async () => {
    if (!isLoading.current) {
      isLoading.current = true;
      currentPage.current += 1;
      const data = await getItems(currentPage.current, limit);
      setItems(data);
      isLoading.current = false;
    }
  };

  const onScrollHandler = useCallback(async () => {
    if (!observer.current) return;
    if (
      observer.current.scrollTop + observer.current.clientHeight <=
      observer.current.scrollHeight - 200
    )
      return;
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    if (observer.current) {
      observer.current.addEventListener("scroll", onScrollHandler);
    }
    loadItems();
    return () => {
      if (observer.current) {
        observer.current.removeEventListener("scroll", onScrollHandler);
      }
    };
  }, []);

  return observer;
};
