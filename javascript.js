


// This the place where you get items from local storage and set them to variables
var textareaVal9 = localStorage.getItem("hr-9");
var textareaVal10 = localStorage.getItem("hr-10");
var textareaVal11 = localStorage.getItem("hr-11");
var textareaVal12 = localStorage.getItem("hr-12");
var textareaVal1 = localStorage.getItem("hr-1");
var textareaVal2 = localStorage.getItem("hr-2");
var textareaVal3 = localStorage.getItem("hr-3");
var textareaVal4 = localStorage.getItem("hr-4");
var textareaVal5 = localStorage.getItem("hr-5");

// This is where id's are assigned to variables
var textarea9 = $("#hr-9");
var textarea10 = $("#hr-10");
var textarea11 = $("#hr-11");
var textarea12 = $("#hr-12");
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");

// By using id variables the values from local storage are displayed in the text area.
textarea10.val(textareaVal10);
textarea11.val(textareaVal11);
textarea12.val(textareaVal12);
textarea1.val(textareaVal1);
textarea2.val(textareaVal2);
textarea3.val(textareaVal3);
textarea4.val(textareaVal4);
textarea5.val(textareaVal5);

// variable "date" holds the current date.
var date = moment().format("dddd, MMMM Do, YYYY");

// display date in currentDay id 
$("#currentDay").text(date);

// The function for time
function time() {

    // variable "currentHour" holds current hour.
    var currentHour = moment().hours();

    // function for each class block to determine whether it is past, present, or future
    $(".block").each(function () {

        // variable "hour" holds the id hour from class block and the parent is used to 
        //change it from a string to an integer.
        var hour = parseInt($(this).attr("id"));

        // An if statement to determine if in the past hour
        if (hour < currentHour) {
            // adds grey to blocks
            $(this).addClass("past");
        }

        //An else if statement to determine if in the present hour
        else if (hour === currentHour) {
            // removes grey to blocks
            $(this).removeClass("past");
            // adds red to blocks
            $(this).addClass("present");
        }

        // An else statement to determine if in the future
        else {
            // removes grey for blocks
            $(this).removeClass("past");
            // removes red for blocks
            $(this).removeClass("present");
            // adds green for blocks
            $(this).addClass("future");
        }

    });

};

// call the funtion time()
time();

// on click function
$(".saveButton").on("click", function (event) {
    // prevents refresh when the saveButton is clicked
    event.preventDefault();

    // variable "textarea" holds the previous sibling of saveButton which is (textarea).
    var textarea = $(this).prev();

    // variable "id" holds (sets variable textarea to its id)
    var id = textarea.attr("id");

    // variable "value" holds (the value of textarea)
    var value = textarea.val();
    // sets items id and value in local storage
    localStorage.setItem(id, value);
});