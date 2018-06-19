import { ADD_CATEGORY } from '../actions';

const initialState = [
  {
    id: 1,
    icon: 'lightbulb-o',
    title_az: 'Kommunal',
    title_en: 'Communal',
    title_ru: 'Коммуналы',
    readonly: true
  },
  {
    id: 2,
    icon: 'shopping-cart',
    title_az: 'Ərzaq',
    title_en: 'Food',
    title_ru: 'Продукт',
    readonly: true
  },
  {
    id: 3,
    icon: 'shopping-bag',
    title_az: 'Aksesuar',
    title_en: 'Accessories',
    title_ru: 'Аксессуары',
    readonly: true
  },
  {
    id: 4,
    icon: 'money',
    title_az: 'Maaş/Borc',
    title_en: 'Salary/Debt',
    title_ru: 'Зарплата/Долги',
    readonly: true
  },
  {
    id: 5,
    icon: 'gamepad',
    title_az: 'Əyləncə',
    title_en: 'Fun',
    title_ru: 'Развлечения',
    readonly: true
  },
  {
    id: 60,
    icon: 'credit-card',
    title_az: 'Digər',
    title_en: 'Others',
    title_ru: 'Другие',
    readonly: true
  }
];

const categories = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, {id: state[state.length - 2].id + 1, ...action.payload, readonly:false}];
    default:
      return state;
  }
}

export default categories;
