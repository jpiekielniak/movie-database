const IMAGE_URL =
  "https://media.istockphoto.com/id/475133058/pl/wektor/kresk%C3%B3wka-ch%C5%82opiec-ogl%C4%85dania-filmu-w-kinie.jpg?s=2048x2048&w=is&k=20&c=CfjcxNlV4Tv4Br6ogiFoqRA1mZnDDzs6gtluK54dnjA=";

export interface Film {
  title: string;
  rating: number;
  image: string;
  description: string;
}

export const films: Film[] = [
  {
    title: "Spider-Man: Across the Spider-Verse",
    rating: 9.0,
    image: IMAGE_URL,
    description:
      "Miles Morales i Gwen Stacy wyruszają w międzywymiarową podróż, aby uratować Multiwersum.",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    rating: 9.0,
    image: IMAGE_URL,
    description:
      "Miles Morales and Gwen Stacy embark on an interdimensional journey to save the Multiverse.",
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
    title: "The Batman",
    rating: 8.5,
    image: IMAGE_URL,
    description:
      "Młody Batman ściga seryjnego mordercę, który terroryzuje Gotham City.",
  },
  {
    title: "Top Gun: Maverick",
    rating: 8.0,
    image: IMAGE_URL,
    description:
      "Pete Maverick Mitchell powraca do służby w marynarce wojennej, aby przeszkolić nowe pokolenie pilotów.",
  },
  {
    title: "Elvis",
    rating: 7.5,
    image: IMAGE_URL,
    description:
      "Biografia Elvisa Presleya, który był jednym z najpopularniejszych i najbardziej wpływowych muzyków XX wieku.",
  },
  {
    title: "The Northman",
    rating: 7.0,
    image: IMAGE_URL,
    description:
      "Współczesny syn księcia Wikingów wyrusza w zemstę na zabójcach swojego ojca.",
  },
];
