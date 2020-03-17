const random = require('random')
const moment = require('moment')

const r_int = random.int(0,1000000)
const parity = r_int % 2
console.log(r_int);
if (parity) {
    console.log('Odd')
} else {
    console.log('Even')
}
