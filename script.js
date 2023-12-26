function nextPage() {
    var userName = document.getElementById("userName").value;
    var selectedDate = document.getElementById("selectedDate").value;
    var responseContainer = document.getElementById("responseContainer");
    if (selectedDate) {
        responseContainer.innerHTML = "Hello, " + userName + "! Let's fix a meetup for " + selectedDate + "!";
    } else {
        responseContainer.innerHTML = "Please select a date.";
    }
}
