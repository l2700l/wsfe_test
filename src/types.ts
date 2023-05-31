import { ReactNode } from "react";

export type childrenProp = { children: ReactNode };

export type imageModel = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};
