
// Problem 01

// function kilometerToMeter(kilo) {
//     var meter = 1000 * kilo;
//     return meter;
// }  
// var result = kilometerToMeter(5);
// console.log(result);

// Problem 02

// function budgetCalculator(watch, phone, laptop){
//     var WatchPrice = 50;
//     var phonePrice = 100;
//     var laptopPrice = 500;
//     var totalCost = (50 * watch) + (100 * phone) + (500 * laptop);
//     return totalCost;
// }

// var result = budgetCalculator(2, 5, 6);
// console.log(result);

// Problem 03

// function hotelCost(days){
//     var first10DaysCost = 100;
//     if(days <= 10){
//         cost = days * 100;
//     } else if(days <= 20){
//         var first10DaysCost = 100 * 10;
//         var remaining = days - 10;
//         var second20DaysCost = remaining * 80;
//          cost = first10DaysCost + second20DaysCost;
        
//     } else {
//         var first10DaysCost = 100 * 10;
//         var second20DaysCost = 80 * 10;
//         var remaining = days - 20;
//         var remainingDaysCost = remaining * 50;
//         cost = first10DaysCost + second20DaysCost + remainingDaysCost;
//     }
//     return cost;
// }  

// var result = hotelCost(23);

// console.log(result);

// Problem 04

// function megaFriend(arr){
//     var result = '';
//     for( var i = 0; i < arr.length; i++){
//         var currentItem = arr[i];
//         if(currentItem.length > result.length){
//             result = arr[i];
//         }
//     }
//     return result;
// }
// var myFriends = ['kazi', 'Nurul', 'Jannat', 'Abdulla Al Mamun', 'Kazi Al Nomanul Haque'];
// var longestStrings = megaFriend(myFriends);
// console.log(longestStrings);