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
        img: '',
        description: 'Sushi is a traditional Japanese dish.',
        category: 'dinner',
    },
    {
        id: 2,
        name: 'Bushi',
        img: '',
        description: 'Sushi is a traditional Japanese dish.',
        category: 'breakfast',
    },
    {
        id: 3,
        name: 'Sushi',
        img: '',
        description: 'Sushi is a traditional Japanese dish.',
        category: 'dinner',
    },
    {
        id: 4,
        name: 'Nushi',
        img: '',
        description: 'Sushi is a traditional Japanese dish.',
        category: 'lunch',
    },
    {
        id: 5,
        name: 'Cushi',
        img: '',
        description: 'Sushi is a traditional Japanese dish.',
        category: 'lunch',
    },
    {
        id: 6,
        name: 'Dal',
        img: '',
        description: 'The most common way of preparing dal.',
        category: 'dinner'
    },
    {
        id: 7,
        name: 'Pierogi',
        img: '',
        description: 'Pierogi are filled dumplings.',
        category: 'breakfast'
    },
    {
        id: 8,
        name: 'Shish kebab',
        img: '',
        description: 'Shish kebab is a popular meal.',
        category: 'dinner'
    },
    {
        id: 9,
        name: 'Dim sum',
        img: '',
        description: 'Dim sum is a large range of small dishes.',
        category: 'lunch'
    }
];