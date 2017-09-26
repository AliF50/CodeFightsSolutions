//Check if the given string is a correct time representation of the 24-hour clock.
function validTime(time) {
  time = time.split(':');
  console.log(time);
  if(time[0] < 0 || time[0] > 23 || time[1] < 0 || time[1] > 59){
    return false;
  }
  return true;
}
