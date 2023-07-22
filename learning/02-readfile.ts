// Read text file
const file = await Deno.readTextFile('./readme.txt')
console.log(file)
