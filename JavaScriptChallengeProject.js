//1.Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
function isNumberPositive(number) {
    if (number > 0) {
        return (console.log(true));
    } else if (number < 0) {
        return (console.log(false));
    } else {
        console.log("Wrong input");
    }
}
isNumberPositive(3);
isNumberPositive(-5);
isNumberPositive(0);
isNumberPositive("hello");

//2.Write a function that takes a number of days and converts it into an age.
function convertDaysToAge(days) {
    return (console.log(Math.round(days/365)));
}
convertDaysToAge(1000);
convertDaysToAge(98765);

//3.Write a function that takes three numbers and returns the largest of the three numbers.
function getLargestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return (console.log(num1));
    } else if (num2 > num1 && num2 > num3) {
        return (console.log(num2));
    } else {
        return (console.log(num3));
    }
}
getLargestNumber(20, 60, 40);
getLargestNumber(345, -43, 13);

//4.Write a function that takes an array of names and returns the last name from the array of names.
function getLastName(names) {
    return (console.log(names[names.length - 1]))
}
getLastName(["Jack", "Sally", "Matt"])
getLastName(["Martin", "Alice"])
getLastName(["NPC46", "Jerry", "Garry", "Tally", "Barry", "Larry"])

//5.Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
function allNumbersPositive(numbers) {
    let score= [];
    for (i= 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            score.push("true")
        } else {
            score.push("false")
        }
        if (score.includes("false")) {
            return (console.log(false))
        } else {
            return (console.log(true))
        }
    }
}
allNumbersPositive([3, 5, 67, 8, 3])
allNumbersPositive([-2, 2, 5, 7, 98, 28])
allNumbersPositive([-3, -23, -5, 5, 6, -76])
allNumbersPositive([23, 53, 68, 44, 55, 99, 105])