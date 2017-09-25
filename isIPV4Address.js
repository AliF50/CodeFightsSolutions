// An IP address is a numerical label assigned to each device (e.g., computer, printer)
// participating in a computer network that uses the Internet Protocol for communication.
// There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers,
// each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1.

// Given a string, find out if it satisfies the IPv4 address naming rules.
function isIPv4Address(inputString) {
    inputString = inputString.split('.');
    if(inputString.length != 4){
        return false;
    }
    for(var i = 0; i < inputString.length; i++){
        if(inputString[i] < 0 || inputString[i] > 255 || inputString[i] === '' || isNaN(inputString[i]) ){
            return false;
        }
    }
    return true;
}
