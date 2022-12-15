/**
 * @param {Array} first
 * @param {Array} second
 * @returns {boolean|undefined}
 */
function isOrderCorrect(first, second) {
    const a = JSON.parse(JSON.stringify(first))
    const b = JSON.parse(JSON.stringify(second))

    while (a.length > 0) {
        if (b.length === 0) return false

        const left = a.shift()
        const right = b.shift()

        if (Number.isInteger(left) && Number.isInteger(right)) {
            if (left !== right) {
                return left < right
            }
        } else {
            const isOrdered = isOrderCorrect(
                Array.isArray(left) ? left : [left],
                Array.isArray(right) ? right : [right]
            )

            if (typeof isOrdered === 'boolean') return isOrdered
        }
    }

    if (b.length === 0) return undefined

    return true
}

module.exports = {
    isOrderCorrect,
}
