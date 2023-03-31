import { RestaurantsDataTypes } from './global';
import defaultImage from '../Assets/default-image.png';

export enum RestaurantCost {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export const RestaurantsData: RestaurantsDataTypes[] = [
  {
    id: '1',
    image: defaultImage,
    name: 'Princes Hot Chicken',
    reviews: 238,
    typeofFood: 'American',
    cost: RestaurantCost.LOW,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt fugit consequuntur, quasi aperiam consequatur earum recusandae autem suscipit quam eveniet. Aliquam veniam possimus ipsum laborum rem ab, sint eius.',
    rating: 3,
    reservations: [],
  },
  {
    id: '2',
    image: defaultImage,
    name: 'Virago',
    reviews: 149,
    typeofFood: 'Sushi',
    cost: RestaurantCost.MEDIUM,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt fugit consequuntur, quasi aperiam consequatur earum recusandae autem suscipit quam eveniet. Aliquam veniam possimus ipsum laborum rem ab, sint eius.',
    rating: 5,
    reservations: [],
  },
  {
    id: '3',
    image: defaultImage,
    name: 'Kanye Steak House',
    reviews: 97,
    typeofFood: 'Southern',
    cost: RestaurantCost.HIGH,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt fugit consequuntur, quasi aperiam consequatur earum recusandae autem suscipit quam eveniet. Aliquam veniam possimus ipsum laborum rem ab, sint eius.',
    rating: 4.5,
    reservations: [],
  },
  {
    id: '4',
    image: defaultImage,
    name: 'The Dutch',
    reviews: 498,
    typeofFood: 'Contemporary',
    cost: RestaurantCost.HIGH,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt fugit consequuntur, quasi aperiam consequatur earum recusandae autem suscipit quam eveniet. Aliquam veniam possimus ipsum laborum rem ab, sint eius.',
    rating: 4,
    reservations: [],
  },
  {
    id: '5',
    image: defaultImage,
    name: 'Bar Taco',
    reviews: 991,
    typeofFood: 'Spanish',
    cost: RestaurantCost.MEDIUM,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt fugit consequuntur, quasi aperiam consequatur earum recusandae autem suscipit quam eveniet. Aliquam veniam possimus ipsum laborum rem ab, sint eius.',
    rating: 5,
    reservations: [],
  },
  {
    id: '6',
    image: defaultImage,
    name: 'Moxy',
    reviews: 150,
    typeofFood: 'Southern',
    cost: RestaurantCost.LOW,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos sunt fugit consequuntur, quasi aperiam consequatur earum recusandae autem suscipit quam eveniet. Aliquam veniam possimus ipsum laborum rem ab, sint eius.',
    rating: 5,
    reservations: [],
  },
];
