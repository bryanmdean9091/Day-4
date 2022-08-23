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


const img = document.createElement("img");
img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1563356%2Fpexels-photo-1563356.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-craig-adderley-1563356.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffree%2F&tbnid=9KN8wQ21Z2njvM&vet=12ahUKEwiYhcCV_dj5AhWikWoFHSZ8ASEQMygAegUIARDbAQ..i&docid=pB2ggFAh5BKxrM&w=5472&h=3648&q=pexels&ved=2ahUKEwiYhcCV_dj5AhWikWoFHSZ8ASEQMygAegUIARDbAQ"

var bandMember = prompt("Enter the first name of a member of The Beatles");
switch(bandMember) {
case "John", "john":
    alert("John played rhythm guitar")
    body.appendChild(img);
    break;
    case "Ringo", "ringo":
        alert("Ringo played the drums");
        document.querySelector("#a2")
        break;
        case "Paul","paul":
            alert("Paul played the bass");
            document.querySelector("#a3")
            break;
            case "George", "george":
            alert("George played lead guitar");
            document.querySelector("#a4")
            break;
            case (""):
            default:
                alert("This is not a member of The Beatles");
                document.querySelector("#a5")
          
}
