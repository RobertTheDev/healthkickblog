import Recipe from '../interfaces/Recipe';

const recipes: Recipe[] = [
  {
    id: '1',
    name: "Chris' Bolognese",
    category: 'pasta',
    image:
      'https://assets.bonappetit.com/photos/5c2f8fe22efb8f2d33e396ca/3:4/w_640,c_limit/bolognese.jpg',
  },
  {
    id: '2',
    name: 'Shortcut Baked Rigatoni',
    category: 'pasta',
    image:
      'https://assets.bonappetit.com/photos/6765f1be8ee303515b236d56/3:4/w_640,c_limit/short-baked-rigatoni-spicy-italian-sausage_RECIPE_V2_110624_7379_VOG_final.jpg',
  },
  {
    id: '23',
    name: 'One-Pot Buffalo Chicken Pasta',
    category: 'pasta',
    image:
      'https://assets.bonappetit.com/photos/672aa2c1e3f955ece429b1b4/3:4/w_640,c_limit/one-pot-buffalo-chicken-pasta_RECIPE_V2_103124_7016_VOG_final.jpg',
  },
  {
    id: '4',
    name: "Dis' Lemon-Chili Calamari Pasta",
    category: 'pasta',
    image:
      'https://assets.bonappetit.com/photos/6734d80aa466e2a089997ebb/3:4/w_640,c_limit/dis-lemon-chili-calamari-pasta-RECIPE_V1_091824_3661_VOG_final.jpg',
  },
  {
    id: '5',
    name: 'The Gooiest Baked Mac and Cheese',
    category: 'pasta',
    image:
      'https://assets.bonappetit.com/photos/67042bd3a44d588aca1dc44b/3:4/w_640,c_limit/1124_Reasons%20to%20Love%20Thanksgiving_Joe%20Lingeman_003.jpg',
  },
  {
    id: '6',
    name: 'Happy Fridge Salad',
    category: 'salads',
    image:
      'https://assets.bonappetit.com/photos/676607d69e8c547046bdfbf0/1:1/w_2240,c_limit/20241112_04_Happy%20Fridge%20Salad_Recipe_030_Final.jpg',
  },
  {
    id: '7',
    name: "Andy's Mom's Grilled Romaine",
    category: 'salads',
    image:
      'https://assets.bonappetit.com/photos/64f9ee9c0daa35ccd0f2801a/1:1/w_2240,c_limit/20230726-1023-PANTRY-1327%201.jpg',
  },
  {
    id: '8',
    name: "Chris' Cheese Cabbage",
    category: 'salads',
    image:
      'https://assets.bonappetit.com/photos/67660b5ee662c03c07ebd0d1/1:1/w_2240,c_limit/111244-BA-Cheese_Cabbage-270.jpg',
  },
  {
    id: '9',
    name: 'Dilly Bean Salad',
    category: 'salads',
    image:
      'https://assets.bonappetit.com/photos/672a4bb35d5d5cea54368b04/1:1/w_2240,c_limit/dilly-bean-salad_RECIPE_103124_6955_VOG_final.jpg',
  },
  {
    id: '10',
    name: 'Spicy Tempeh and Coconut Larb',
    category: 'salads',
    image:
      'https://assets.bonappetit.com/photos/6745f99e0fb950abdec52e40/1:1/w_2240,c_limit/20241112_01_Spicy%20Tempeh%20and%20Coconut%20Larb_021.jpg',
  },
  {
    id: '11',
    name: 'Green Curry Lentils with Pasta',
    category: 'soups',
    image:
      'https://assets.bonappetit.com/photos/67660186f300e79455602b21/1:1/w_2240,c_limit/20241112_03_Green%20Curry%20Lentils%20with%20Pasta_027.jpg',
  },
  {
    id: '12',
    name: 'Red Miso Chicken Soup',
    category: 'soups',
    image:
      'https://assets.bonappetit.com/photos/6761a98b01519dd1ae66fc6d/1:1/w_2240,c_limit/20241119_05_Red%20Miso%20Chicken%20Soup_015.jpg',
  },
  {
    id: '13',
    name: 'Curried Lentil, Tomato, and Coconut Soup',
    category: 'soups',
    image:
      'https://assets.bonappetit.com/photos/5a05c9df3388d32a6ed54e97/1:1/w_2240,c_limit/curried-lentil-tomato-and-coconut-soup.jpg',
  },
  {
    id: '14',
    name: 'HLY Veggie Ramen',
    category: 'soups',
    image:
      'https://assets.bonappetit.com/photos/5e3c7a3c866b940008106763/1:1/w_2240,c_limit/HLY-Veggie-Ramen-16x9.jpg',
  },
  {
    id: '15',
    name: "Dis' Beef Barley Stew",
    category: 'soups',
    image:
      'https://assets.bonappetit.com/photos/6734d80c0ee52e6076f0ab3e/1:1/w_2240,c_limit/dis-beef-barley-stew-LEDE_091824_3713_VOG_final.jpg',
  },
  {
    id: '16',
    name: 'Haitian Bouyon',
    category: 'soups',
    image:
      'https://assets.bonappetit.com/photos/6708364dc5416fa9bc4d5744/1:1/w_2240,c_limit/20241002_BA_WebRecipes_03_Bouyon_024_V1_Web.jpg',
  },
  {
    id: '17',
    name: 'Basil Fried Rice',
    category: 'rice',
    image:
      'https://assets.bonappetit.com/photos/6697147674b37746b41a39e3/1:1/w_2240,c_limit/0924_DIS_Basil-Fried-Rice_Web.jpg',
  },
  {
    id: '18',
    name: 'MVP Rice',
    category: 'rice',
    image:
      'https://assets.bonappetit.com/photos/66574ca322b55c927df0bcf1/1:1/w_2240,c_limit/240426%20MVP2122.jpg',
  },
  {
    id: '19',
    name: 'One-Pot Salmon and Shiitake Rice',
    category: 'rice',
    image:
      'https://assets.bonappetit.com/photos/663949f04e90b4f89d3d6682/1:1/w_2240,c_limit/BA-DIS_One-Pot-Salmon-Shiitake-Rice_WEB.jpg',
  },
  {
    id: '20',
    name: 'Kimchi Fried Rice',
    category: 'rice',
    image:
      'https://assets.bonappetit.com/photos/65e6256e772f7486f6146913/1:1/w_2240,c_limit/20240131-0424-LUCASSIN-1545.jpg',
  },
];

export default recipes;
