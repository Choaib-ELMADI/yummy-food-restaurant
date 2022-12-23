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
        img: images.candy__1,
        description: 'Moroccan traditional candies.',
        category: 'breakfast',
    },
    {
        id: 1,
        name: 'Couscous',
        img: images.couscous__1,
        description: 'Couscous is a traditional Moroccan dish.',
        category: 'dinner',
    },
    {
        id: 2,
        name: 'Couscous',
        img: images.couscous__2,
        description: 'Couscous is a traditional Moroccan dish.',
        category: 'breakfast',
    },
    {
        id: 3,
        name: 'Morocco Secret',
        img: images.secret__2,
        description: 'One of the secrets behind moroccan dishes.',
    },
    {
        id: 4,
        name: 'Couscous',
        img: images.couscous__3,
        description: 'Couscous is a traditional Moroccan dish.',
        category: 'lunch',
    },
    {
        id: 5,
        name: 'Morocco Secret',
        img: images.secret__1,
        description: 'Another secret.',
    },
    {
        id: 6,
        name: 'Morocco Secret',
        img: images.secret__3,
        description: 'The most common way of preparing dal.',
    },
    {
        id: 7,
        name: 'Harira',
        img: images.harira__1,
        description: 'The Moroccan delicious Harira',
        category: 'breakfast'
    },
    {
        id: 8,
        name: 'Couscous',
        img: images.couscous__2,
        description: 'Couscous is a traditional Moroccan dish.',
        category: 'dinner'
    },
];