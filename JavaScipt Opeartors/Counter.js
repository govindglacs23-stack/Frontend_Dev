let count=0;
function increment(){count++;console.log(count);}
function decrement(){count--;console.log(count);}
function simulate(){function nested(){count+=2;}nested();}
increment();decrement();simulate();console.log(count);