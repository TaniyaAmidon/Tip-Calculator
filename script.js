function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var peopleAmt = document.getElementById("peopleAmt").value;

if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
}

if (peopleAmt === "" || peopleAmt <=1) {
    peopleAmt = 1;
    document.getElementById("each").style.display = "none";   
} else {
    document.getElementById("each").style.display = "block";
}

var total = Math.round(billAmt * serviceQual) / peopleAmt;

total = total.toFixed(2);

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick =  function() {
        calculateTip();   
    };
