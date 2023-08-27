import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { WordData } from "./interfaces/Dictionary.type";

export default function useSearch(filter: string) {
  console.log("filter value:", filter);
  return useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      return axios
        .get<WordData>(
          "https://api.dictionaryapi.dev/api/v2/entries/en/" + filter
        )
        .then((res) => res.data);
    },
  });
}
