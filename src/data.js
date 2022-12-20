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
        name: 'Sushi',
        img: images.plat__1,
        description: 'Sushi is a traditional Japanese dish.',
        category: 'breakfast',
    },
    {
        id: 1,
        name: 'Mushi',
        img: images.plat__1,
        description: 'Sushi is a traditional Japanese dish.',
        category: 'dinner',
    },
    {
        id: 2,
        name: 'Bushi',
        img: images.plat__2,
        description: 'Sushi is a traditional Japanese dish.',
        category: 'breakfast',
    },
    {
        id: 3,
        name: 'Sushi',
        img: images.plat__2,
        description: 'Sushi is a traditional Japanese dish.',
        category: 'dinner',
    },
    {
        id: 4,
        name: 'Nushi',
        img: images.plat__3,
        description: 'Sushi is a traditional Japanese dish.',
        category: 'lunch',
    },
    {
        id: 5,
        name: 'Cushi',
        img: images.plat__3,
        description: 'Sushi is a traditional Japanese dish.',
        category: 'lunch',
    },
    {
        id: 6,
        name: 'Dal',
        img: images.plat__4,
        description: 'The most common way of preparing dal.',
        category: 'dinner'
    },
    {
        id: 7,
        name: 'Pierogi',
        img: images.plat__4,
        description: 'Pierogi are filled dumplings.',
        category: 'breakfast'
    },
    {
        id: 8,
        name: 'Shish kebab',
        img: images.plat__5,
        description: 'Shish kebab is a popular meal.',
        category: 'dinner'
    },
    {
        id: 9,
        name: 'Dim sum',
        img: images.plat__5,
        description: 'Dim sum is a large range of small dishes.',
        category: 'lunch'
    }
];