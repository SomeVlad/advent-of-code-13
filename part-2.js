const fs = require('fs')
const { isOrderCorrect } = require('./is-order-correct')

function calculate(filename) {
    const fileContents = fs.readFileSync(filename, 'utf-8')

    let result = 1
    const dividerPacketList = [[[2]], [[6]]]

    const sortedPacketList = fileContents
        .split(/\r?\n/)
        .filter(Boolean)
        .map(JSON.parse)
        .concat(dividerPacketList)
        .sort((a, b) => {
            const isSorted = isOrderCorrect(a, b)

            if (typeof isSorted === 'undefined') return 0

            if (isSorted) return -1

            return 1
        })

    dividerPacketList.forEach(dividerPacket => {
        const packetIndex = sortedPacketList.findIndex(
            packet =>
                typeof isOrderCorrect(packet, dividerPacket) === 'undefined'
        )

        result *= packetIndex + 1
    })

    return result
}

// console.log(calculate('input.txt'))

module.exports = {
    calculate,
}
