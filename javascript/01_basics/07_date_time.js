// ******dates****** //

let myDate = new Date()
console.log(myDate.toString()); //shows day, date, time, and time zone
console.log(myDate.toDateString()); //shows day and date
console.log(myDate.toLocaleString());   //shows date and time
console.log(typeof myDate); //shows the datatype of myDate

let myCreatedDate = new Date(2023, 1, 23)   //creating own date - 1 is feb
let myCreatedDate1 = new Date(2023, 0, 23 , 5, 6)   //creating own date and time (year, month, day, hour, minute)
let myCreatedDate2 = new Date("2023-01-22")   //creating own date (year, month, day)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()   //used while designing quizes, polls to find who is first 
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());  //gets value in millisecond from the created date till now
console.log(Math.floor(Date.now()/100));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', { //customize date, day, time zone, etc
    weekday: "long"
})
