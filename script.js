function compute()
{
    // get user inputs from html <input> elements
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    // calculate the end year
    var year = new Date().getFullYear()+parseInt(years);

    // if (parseInt(principal) <= 0) {
    //     alert("Enter a positive number");
    //     document.getElementById("principal").focus();
    // }

    // print out the result of interest calculation
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";

}

// update rate_val based on user's selection
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// Check if principal is >= 0
function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
    if (parseInt(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
        
