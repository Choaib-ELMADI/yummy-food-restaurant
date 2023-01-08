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
        price: '$99.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, magnam!',
        category: 'breakfast',
    },
    {
        id: 1,
        name: 'Couscous',
        img: [images.couscous__1, images.couscous__2, images.couscous__3, images.couscous__4, images.couscous__5],
        price: '$99.99',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe maiores nam!',
        category: 'dinner',
    },
    {
        id: 2,
        name: 'Bastilla',
        img: [images.bastilla__1, images.bastilla__2, images.bastilla__3, images.bastilla__4],
        price: '$99.99',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum nobis, at alias, enim, maxime nostrum expedita quaerat ut laborum repellendus rerum quis porro temporibus ea fugiat rem minima in.',
        category: 'breakfast',
    },
    {
        id: 3,
        name: 'Morocco Secret',
        img: [images.secret__1, images.secret__2, images.secret__3, images.secret__2],
        price: '$99.99',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum repudiandae consectetur magni nisi voluptatum error!',
    },
    {
        id: 4,
        name: 'F-Tajine',
        img: [images.candy__6, images.candy__7, images.candy__8, images.candy__9, images.candy__10],
        price: '$99.99',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, ad! Deserunt vero sapiente ad beatae perferendis.',
        category: 'lunch',
    },
    {
        id: 5,
        name: 'Harira',
        img: [images.harira__1, images.harira__1, images.harira__1, images.harira__1, images.harira__1],
        price: '$99.99',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nam autem voluptas aspernatur mollitia facilis iure similique laborum?',
        category: 'breakfast'
    },
    
];