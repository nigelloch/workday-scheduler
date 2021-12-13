// starts the party
workDaySchedule();

// sets and displays the current date in the jumbotron
$("#today").text(moment().format('dddd')+", "+moment().format('MMMM Do YYYY'));

// iteration to verify valid color changes of time slots
var interval = setInterval(workDaySchedule,10000);

// pull values from localStorage
for (let index = 0; index < localStorage.length; index++) {
    $("#" + localStorage.key(index)+" .textData").val(localStorage.getItem(localStorage.key(index)))
    
}
// iterate through each hour to see which is in the past, present and future
function  workDaySchedule() {

    var textArea = document.getElementsByTagName("textArea")
    // current hour
    var currHour = moment().hours();
   // console.log(currHour)

    // iterate through each hour container and decide the correct color
    for (let i = 0; i < textArea.length; i++) {
        const element = textArea[i];
        
        // chosen colors depending on time of day
        var past = "rgb(255, 60, 60)"
        var present = "rgb(255, 241, 241)"
        var future = "rgb(201, 201, 201)"

        // variable which pulls in all time containers into an array
        var textAreaHour = element.getAttribute("id")

        // conditions to check which color should be active
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

// saves the textData and stores it in localStorage
$(".saveBtn").on("click", function() {
    
    // time = key
    var time = $(this).parent().attr("id")
    
    // textValue = value
    var textValue = $(this).siblings(".textData").val();

    localStorage.setItem(time, textValue);
});

// abandoning... for now.

// $(".deleteBtn").on("click", function() {

//     localStorage.removeItem(time);
//     textData = 0;
//     document.getElementById ("textData").innerHTML = textData;
// });
