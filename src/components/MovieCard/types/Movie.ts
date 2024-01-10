import {UUID} from "node:crypto";

export type TMovie = {
  id: UUID;
  title: string;
  rate: number;
  image: string;
  content: string;
}
