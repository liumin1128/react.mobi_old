import { useFetchList } from "@/hooks/graphql";
import { DYNAMIC_LIST } from "@/graphql/schema/dynamic";

export function useDynamicList(variables) {
  return useFetchList(DYNAMIC_LIST, variables);
}

export const test = "";
