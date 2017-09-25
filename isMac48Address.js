// A media access control address (MAC address) is a unique identifier assigned to network interfaces
// for communications on the physical network segment.

// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups
// of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
function isMAC48Address(inputString) {
    if(inputString.length !== 17){
        return false;
    }else if(inputString.indexOf(' ') > -1){
        return false;
    }else{
        inputString = inputString.split('');
        for(var i = 0; i < inputString.length; i++){
            var c = inputString[i].charCodeAt(0);
            if(inputString[i] === '-'){
              if(inputString[i + 1] === '-'){
                return false;
              }else{
                continue;
              }
            }else{
                console.log(c);
                if((c > 47 && c < 58) || (c > 64 && c < 71)){
                    continue;
                }else{
                    return false;
                }
            }
        }
    }
    return true;
}
