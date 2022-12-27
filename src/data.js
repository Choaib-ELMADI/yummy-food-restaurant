import { images } from "./constants";

export function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
      item.name.split(' ').some(word =>
        word.toLowerCase().startsWith(query)
      )
    );
}

export const foods = [
    {
        id: 0,
        name: 'moroccan candy',
        img: [images.candy__2, images.candy__3, images.candy__4, images.candy__5],
        description: 'Moroccan traditional candies.',
        category: 'breakfast',
    },
    {
        id: 1,
        name: 'Couscous',
        img: [images.couscous__1, images.couscous__2, images.couscous__3, images.couscous__4, images.couscous__5],
        description: 'Couscous is a traditional Moroccan dish.',
        category: 'dinner',
    },
    {
        id: 2,
        name: 'Bastilla',
        img: [images.bastilla__1, images.bastilla__2, images.bastilla__3, images.bastilla__4],
        description: 'Bastilla is a traditional Moroccan dish.',
        category: 'breakfast',
    },
    {
        id: 3,
        name: 'Morocco Secret',
        img: [images.secret__1, images.secret__2, images.secret__3, images.secret__2],
        description: 'One of the secrets behind moroccan dishes.',
    },
    {
        id: 4,
        name: 'F-Tajine',
        img: [images.candy__6, images.candy__7, images.candy__8, images.candy__9, images.candy__10],
        description: 'Tajine is a traditional Moroccan dish.',
        category: 'lunch',
    },
    {
        id: 5,
        name: 'Harira',
        img: [images.harira__1, images.harira__1, images.harira__1, images.harira__1, images.harira__1],
        description: 'The Moroccan delicious Harira',
        category: 'breakfast'
    },
    
];