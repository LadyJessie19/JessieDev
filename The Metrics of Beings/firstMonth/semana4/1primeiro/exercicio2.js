const io = require('./../io-lib/io')

// letra a
/* 
let a = 10
let b = 20
io.write(b) // terminal retorna 20
b = 5 
io.write(a)// terminal retorna 10
io.write(b)// terminal retorna 5
 */
// letra b
/* 
let a = 30
let b = 20
let c = a + b // resultado é 50
io.write(c) // 50
b = 10
io.write(b) // 10
io.write(c) // 50, pois a variavel ainda não foi redeclarada
c = a + b // resultado é 40
io.write(a) // 30
io.write(b) // 10
io.write(c) // 40
 */
// letra c
/* 
let a = 10
let b = 20
c = a // c é igual a 10
b = c // b é igual a 10
a = b // a é igual a 10
io.write(a) // 10
io.write(b) // 10
io.write(c) // 10
 */
//letra d
/* 
let a = 10
let b = a + 1// b = 11
a = b + 1// a = 12
b = a + 1// b = 13
io.write(a) // 12
a = b + 1 // a = 14
io.write(a) // 14
io.write(b) // 13
 */
//letra e
/* 
let a = 10
let b = 5
let c = a + b // c = 15
b = 20
a = 10
io.write(a) // 10
io.write(b) // 20
io.write(c) // 15
 */
//letra f
/* 
let x = 1
let y = 2
let z = y - x // z = 1
io.write(z) // 1
x = 5
y = x + z // y = 6
io.write(x) // 5
io.write(y) // 6
io.write(z) // 1
 */
