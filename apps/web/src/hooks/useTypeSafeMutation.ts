import ConnectionContext from "@/contexts/ConnectionContext";
import { Await } from "@/utils/util-types";
import { wrap } from "@spek/client";
import { useContext } from "react";
import { UseMutationOptions, useMutation } from "react-query";

type Keys = keyof ReturnType<typeof wrap>["mutation"];

export const useTypeSafeMutation = <K extends Keys>(
  key: K,
  opts?: UseMutationOptions<
    Await<ReturnType<ReturnType<typeof wrap>["mutation"][K]>>,
    any,
    Parameters<ReturnType<typeof wrap>["mutation"][K]>,
    any
  >
) => {
  const { conn } = useContext(ConnectionContext);

  return useMutation<
    Await<ReturnType<ReturnType<typeof wrap>["mutation"][K]>>,
    any,
    Parameters<ReturnType<typeof wrap>["mutation"][K]>
  >(
    async (params) =>
      await (
        wrap(conn!).mutation[typeof key === "string" ? key : key[0]] as any
      )(...params),
    opts
  );
};
