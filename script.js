function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var peopleAmt = document.getElementById("peopleAmt").value;
}

if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
}

if (peopleAmt === "" || peopleAmt <=1) {
    peopleAmt = 1;
}