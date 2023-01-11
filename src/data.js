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
        price: '$9.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, magnam!',
        category: 'breakfast',
    },
    {
        id: 1,
        name: 'Couscous',
        img: [images.couscous__1, images.couscous__2, images.couscous__3, images.couscous__4, images.couscous__5],
        price: '$25.00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe maiores nam!',
        category: 'dinner',
    },
    {
        id: 2,
        name: 'Bastilla',
        img: [images.bastilla__1, images.bastilla__2, images.bastilla__3, images.bastilla__4],
        price: '$20.00',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum nobis, at alias, enim, maxime nostrum expedita quaerat ut laborum repellendus rerum quis porro temporibus ea fugiat rem minima in.',
        category: 'breakfast',
    },
    {
        id: 3,
        name: 'Morocco Secret',
        img: [images.secret__1, images.secret__2, images.secret__3, images.secret__2],
        price: '$25.00',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum repudiandae consectetur magni nisi voluptatum error!',
    },
    {
        id: 4,
        name: 'Chicken Tajine',
        img: [images.tajine__3, images.tajine__5, images.tajine__10, images.tajine__11],
        price: '$20.00',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, ad! Deserunt vero sapiente ad beatae perferendis.',
        category: 'lunch',
    },
    {
        id: 5,
        name: 'Harira',
        img: [images.harira__1, images.harira__1, images.harira__1, images.harira__1, images.harira__1],
        price: '$2.99',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nam autem voluptas aspernatur mollitia facilis iure similique laborum?',
        category: 'breakfast'
    },
    {
        id: 6,
        name: 'moroccan rfissa',
        img: [images.rfissa__1, images.rfissa__2, images.rfissa__1, images.rfissa__2],
        price: '$5.99',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, magnam!',
        category: 'lunch',
    },
    {
        id: 7,
        name: 'moroccan tea',
        img: [images.tea__1, images.tea__2, images.tea__3, images.tea__4, images.tea__5],
        price: '$1.00',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe maiores nam!',
        category: 'All Time',
    },
    {
        id: 8,
        name: 'Tanjia',
        img: [images.tanjia__1, images.tanjia__2, images.tanjia__3, images.tanjia__1],
        price: '$20.00',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsum nobis, at alias, enim, maxime nostrum expedita quaerat ut laborum repellendus rerum quis porro temporibus ea fugiat rem minima in.',
        category: 'breakfast',
    },
    {
        id: 9,
        name: 'Morocco Spices',
        img: [images.secret__3, images.secret__2, images.secret__1, images.secret__3],
        price: '$5.00',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum repudiandae consectetur magni nisi voluptatum error!',
    },
    {
        id: 10,
        name: 'Beef Tajine',
        img: [images.tajine__1, images.tajine__7, images.tajine__6, images.tajine__9, images.tajine__2],
        price: '$20.00',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, ad! Deserunt vero sapiente ad beatae perferendis.',
        category: 'lunch',
    },
    
];