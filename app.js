const main = () => {
    let firstSum  = sumNumbers(1, 2)
    let secondSum = sumNumbers(4, 6)
    console.log(firstSum)
    console.log(secondSum)
}

const sumNumbers = (first, second) => {
    return first + second
}

main()
