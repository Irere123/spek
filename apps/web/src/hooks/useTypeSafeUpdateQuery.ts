import { http } from "@spek/client";
import { useCallback } from "react";
import { useQueryClient } from "react-query";

import { Await } from "@/utils/util-types";

type Keys = keyof ReturnType<typeof http.wrap>["query"];

type PaginatedKey<K extends Keys> = [K, ...(string | number | boolean)[]];

export const useTypeSafeUpdateQuery = () => {
  const client = useQueryClient();
  return useCallback(
    <K extends Keys>(
      key: K | PaginatedKey<K>,
      fn: (
        x: Await<ReturnType<ReturnType<typeof http.wrap>["query"][K]>>
      ) => Await<ReturnType<ReturnType<typeof http.wrap>["query"][K]>>
    ) => {
      client.setQueryData<
        Await<ReturnType<ReturnType<typeof http.wrap>["query"][K]>>
      >(key, fn as any);
    },
    [client]
  );
};
