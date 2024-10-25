let myArray = ["Cricket", "Tennis", "badminton", "football","basketball","Table Tennis"]
myArray.forEach((i) => console.log(i))
myArray = [3,2,5,6,7,8,5,3,1,2,66,77,8,6,5,333,6,6,7,5,45,4]
let filteredArray = myArray.filter((i) => i % 2 == 0 ).sort((a,b) => a-b)

filteredArray.forEach((i) => console.log(i))
