const fs = require('fs')
const { isOrderCorrect } = require('./is-order-correct')

function calculate(filename) {
    const fileContents = fs.readFileSync(filename, 'utf-8')

    let result = 0
    let pairNumber = 0

    let firstLine = null
    let secondLine = null
    fileContents.split(/\r?\n/).forEach(line => {
        if (line.length === 0) {
            pairNumber++
            const isOrderRight = isOrderCorrect(firstLine, secondLine)
            if (isOrderRight) result += pairNumber
            firstLine = null
            secondLine = null
        } else {
            firstLine
                ? (secondLine = JSON.parse(line))
                : (firstLine = JSON.parse(line))
        }
    })

    return result
}

module.exports = {
    calculate,
}
