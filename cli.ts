import { convertTime } from "./mod.ts";

const cli = async () => {
  var convertedTime=await convertTime();
  if(convertedTime.status==='fail')
    console.log('Not able to connect this time')
  else{
    console.log("Time accoding to server  is :");
    console.log(convertedTime.defaultDate)
    console.log("Time accoding to User's location is :");
    console.log(convertedTime.newDate)
  }
}

cli();
