import { TMovie } from "../components/MovieCard/types/Movie";

const IMAGE_URL =
  "https://media.istockphoto.com/id/475133058/pl/wektor/kresk%C3%B3wka-ch%C5%82opiec-ogl%C4%85dania-filmu-w-kinie.jpg?s=2048x2048&w=is&k=20&c=CfjcxNlV4Tv4Br6ogiFoqRA1mZnDDzs6gtluK54dnjA=";

export const films: TMovie[] = [
  {
    title: "Spider-Man: Across the Spider-Verse",
    rating: 9.0,
    image: IMAGE_URL,
    description:
      "Miles Morales i Gwen Stacy wyruszają w międzywymiarową podróż, aby uratować Multiwersum.",
  },
  {
    title: "The Batman",
    rating: 8.5,
    image: IMAGE_URL,
    description:
      "A young Batman tracks down a serial killer terrorizing Gotham City.",
  },
  {
    title: "Top Gun: Maverick",
    rating: 8.0,
    image: IMAGE_URL,
    description:
      'Pete "Maverick" Mitchell returns to the Navy to train a new generation of pilots.',
  },
  {
    title: "Elvis",
    rating: 7.5,
    image: IMAGE_URL,
    description:
      "A biography of Elvis Presley, one of the most popular and influential musicians of the 20th century.",
  },
  {
    title: "The Northman",
    rating: 7.0,
    image: IMAGE_URL,
    description:
      "Współczesny syn księcia Wikingów wyrusza w zemstę na zabójcach swojego ojca.",
  },
  {
    title: "Inception",
    rating: 8.8,
    image: IMAGE_URL,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",
  },
  {
    title: "Interstellar",
    rating: 8.6,
    image: IMAGE_URL,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
];
