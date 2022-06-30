// call function colorSchedule upon initialization to set apropriate time-based color scheme
colorSchedule();

// set routine timeinterval of 10 sec to call colorSchedule function, inorder to periodically update the schedule's color scheme
var interval = setInterval(colorSchedule,10000); 

// get data from local storge upon initialization
for( i=0; i < localStorage.length; i++ ) {

    // for each key in local storage return the value associated with that key, and place in its corresponding div container
    $("#"+localStorage.key(i)+" .description").val(localStorage.getItem(localStorage.key(i)));

}

// on click event listener for each save button (icon) 
$(".saveBtn").on("click", function() {

    // get text from corresponding div and save it to global var "value" 
    var value = $(this).siblings(".description").val();

    // get id attribute associated with the div containing the text and save it to global var "time" 
    var time = $(this).parent().attr("id");

    // save the text in "value" to localStorage using "time" as the key
    localStorage.setItem(time, value);
});

// function that sets the workday schedule's time-based color scheme
function colorSchedule(){

    // initialize global variable that keeps the current hours using Moment.js
    var currentTimeHours = moment().hours();

    // add the current date to the jumbotron display area
    $("#currentDay").text(moment().format('dddd')+", "+moment().format('MMMM Do YYYY'));

    // loop iterates through the time blocks availible (hour 9a - 5p)
    for( i = 9; i < ($(".time-block").length + 9) ; i++ ) {

        // initialize global variable that refers to each time block's id
        var ths = $("#hour-"+i).children(".description")

        // remove previous styling to avoid conflicting styles
        ths.removeClass("past");
        ths.removeClass("present");
        ths.removeClass("future");
        ths.removeAttr("placeholder");

        // if current time is equal to the time block in this loop iteratation
        if (currentTimeHours == i) {

            // add class "present" to style this time block as current
            ths.addClass("present");

            // add placeholder text "Current hour - Let's begin your day..." to the current time block
            ths.attr("placeholder","Current hour - Type to plan your day...");
            
        // if current time is greater than the time block in this loop iteratation
        } else if (currentTimeHours > i) {

            // add class "past" to style this time block as old
            ths.addClass("past");
        
        // else current time is must be less than the time block in this loop iteratation
        } else {

            // in which case we apply the "future" class to style this time block as new
            ths.addClass("future");

        }

    }

}