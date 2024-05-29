import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Product from "./domain/Product";

const cart = new Cart();
console.log(cart.items);

cart.add(new Movie(1001, 'Мстители', 1000, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
cart.add(new MusicAlbum(1021, 'Музыка', 'Музыкант', 100));
cart.add(new MusicAlbum(1021, 'Музыка', 'Музыкант', 100));
cart.add(new Product(1031, 'Ноутбук', 20000));
cart.add(new Product(1031, 'Ноутбук', 20000));
cart.add(new Product(1031, 'Ноутбук', 20000));
cart.add(new Book(1041, 'Книга', 'Автор', 700, 123));

console.log(cart.items);
console.log(cart.sumProducts);
console.log(cart.getSum(10));
cart.remove(1001);
cart.changeQuantity(1031, 'plus');
cart.changeQuantity(1031, 'plus');
cart.changeQuantity(1031, 'minus');
console.log(cart.items);
