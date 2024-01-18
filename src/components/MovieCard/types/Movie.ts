import {UUID} from "node:crypto";

export type TMovie = {
  id: UUID;
  title: string;
  rate: number;
  productionYear: number;
  image: string;
  content: string;
}
