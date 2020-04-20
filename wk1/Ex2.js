const words = ['fooBar','nodeJs'];
const capitalize = ([first, ...rest]) =>{
    return first.toUpperCase()+rest.join('').toLowerCase();
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
