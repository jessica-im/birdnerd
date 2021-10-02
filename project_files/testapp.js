const data = [
{ locName: 'pa',
  comName: 'warbler',
  county: 'montgomery'
},
{ locName: 'pa',
  comName: 'warbler',
  county: 'montgomery'
},
{ locName: 'pa',
  comName: 'robin',
  county: 'montgomery'
},
{ locName: 'pa',
  comName: 'bluejay',
  county: 'montgomery'
},
{ locName: 'pa',
  comName: 'thrush',
  county: 'montgomery'
}

];

// data.forEach(u => {delete u.locName})
// console.log(data);
//
// const uniqueSet = new Set(data)
// console.log(uniqueSet);
//
// const backToArray = [...uniqueSet]
// console.log(backToArray);
//
// backToArray.filter((item, index) => {
//     console.log(
//     // a. Item
//     item,
//     // b. Index
//     index,
//     // c. indexOf
//     backToArray.indexOf(item),
//     // d. Condition
//     backToArray.indexOf(item) === index,
//   );
//     return backToArray.indexOf(item) === index;
//     console.log(backToArray.indexOf(item) === index);
// })

// let compositeKey = data[0].comName + data[0].county
// console.log(compositeKey);
// data[0].compositeKey = compositeKey
// console.log(data);

for (let i = 0; i < data.length; i++) {
    let compositeKey = data[i].comName + data[i].county
    data[i].compositeKey = compositeKey
}
console.log(data);

const parseDupes = () => {
    if (compositeKey)
}
Now that I was able to combine and push in a new property that combines two strings. I can run a condition where if that key matches in any other objects, remove duplicates. 
