// remember to convert hours id's in html


// iterate through each hour to see which is in the past, present and future
function  workDaySchedule() {

    var textArea = document.getElementsByTagName("textArea")
    // current hour
    var currHour = moment().hours();
   // console.log(currHour)

    for (let i = 0; i < textArea.length; i++) {
        const element = textArea[i];
        
        var past = "rgb(255, 60, 60)"
        var present = "white"
        var future = "rgb(139, 139, 255"

        //console.log(element.getAttribute("id"))
        var textAreaHour = element.getAttribute("id")

        if (textAreaHour < currHour) {
            element.style.background = past;
        }
        else if (textAreaHour == currHour) {
            element.style.background = present;
        }
        else {
            element.style.background = future;
        }
    }

}

workDaySchedule();