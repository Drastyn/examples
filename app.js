const main = () => {
    let firstSum        = sumNumbers(1, 2)
    let secondSum       = sumNumbers(4, 6)
    let firstSubstract  = substractNumbers(10, 3)
    let secondSubstract = substractNumbers(9, 4)
    console.log(firstSum)
    console.log(secondSum)
    console.log(firstSubstract)
    console.log(secondSubstract)
}

const sumNumbers = (first, second) => {
    return first + second
}

const substractNumbers = (first, second) => {
    return first - second
}

main()
