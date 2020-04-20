const buffer_array = Buffer.from([ 8, 6, 7, 5, 3, 0, 9]);
const buffer_string = Buffer.from("I'm a string!", "utf-8");
hex = buffer_string.toString('hex');
console.log(buffer_array);
console.log(buffer_string.toString());
console.log(hex);
console.log(buffer_string.toString().slice(0,10));
myArr = [buffer_array, buffer_string]
const join_buffer = Buffer.concat(myArr);
console.log(join_buffer);
console.log(join_buffer.toJSON());