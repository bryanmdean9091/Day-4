let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
        case 1:
            day = "Monday";
            break;
            case 2:
                day = Tuesday;
                break;
                case 3:
                day = Wednesday;
                break;
                case 4:
                    day = "Thursday";
                    break;
                    case 5:
                        day = "Friday";
                        break;
                        case 6: 
                        day = "Saturday";                      
}
console.log(day);

var bandMember = prompt("Enter the first name of a member of The Beatles");
switch(bandMember) {
case "John", "john":
    alert("John played rhythm guitar");
    break;
    case "Ringo", "ringo":
        alert("Ringo played the drums");
        break;
        case "Paul","paul":
            alert("Paul played the bass");
            break;
            case "George", "george":
            alert("George played lead guitar");
            break;
            case (""):
            default:
                alert("This is not a member of The Beatles");
          
}
