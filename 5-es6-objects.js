//object shorthand property
const name = 'Kiran'
const userAge = 25
const user = {
    name,       //name : name
    age: userAge,
    location: 'Delhi'
}
console.log(user);

//object destructuring
const product = {
    label : 'Red notebook',
    price: 30,
    stocks: 201,
    salePrice: undefined,
    rating : 4.2
}
// const label = product.label
// const stock = product.stock
const { label,stock } = product
console.log(label)
console.log(stock)
const { label: productLabel, price, rating = 5 } = product
console.log(productLabel)
console.log(rating)