import {UUID} from "node:crypto";

export type TMovie = {
  id: UUID;
  title: string;
  rating: number;
  image: string;
  content: string;
}
