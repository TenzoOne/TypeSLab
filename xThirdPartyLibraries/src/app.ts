import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { validate } from "class-validator";
import { Product } from './product.model';


const products = [
    { title: 'a carpet', price: 29.99 },
    { title: 'b carpet', price: 29.99 },
    { title: 'c carpet', price: 29.99 },
    { title: 'd carpet', price: 29.99 }
];

const newProd = new Product('',-23);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERROS!');
        console.log(errors);
        
    }
});
console.log(newProd.getInformation());

//const p1 = new Product('A book', 1234);

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price)
// });

//classTransformer
const loadedProducts = plainToClass(Product,products);

console.log(loadedProducts);

//console.log(p1.getInformation());

// for (const prod of loadedProducts) {
//     console.log(prod.getInformation());
// }