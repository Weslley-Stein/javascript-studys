const date = new Date(0); 01/01/1970 //Timestamp unix or Age Unix
//The date is counted in Miliseconds so, 60 * 60 * 24 * 1000 = 1 day
//Date object Parameter: Date(Year, month, day, hour, minutes, seconds, miliseconds)
//If the instace of object Date dont have any parameter so he return atual date

// Methods of Date Object 
date.getDate()
date.getMonth()
date.getFullYear()
date.getHours()
date.getMinutes()
date.getSeconds()
date.getMilliseconds()
date.getDay()
Date.now() //that will get the actual time in Miliseconds, so you need to use a function to convert in date
//Or put this like a parameter of an instance of Date