let buttons = document.querySelectorAll("article button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.innerText = "Selected";
        button.classList.add("selected");
    });
});

let detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let details = button.previousElementSibling;

        if (details.style.display === "none") {
            details.style.display = "block";
            button.innerText = "Hide Details";
        } else {
            details.style.display = "none";
            button.innerText = "Show Details";
        }

    });

});

let form = document.querySelector("#booking form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let eventName = document.querySelector("#event").value;
    let tickets = document.querySelector("#tickets").value;

    if (name === "" || email === "" || eventName === "" || tickets === "") {
        alert("Please fill all required fields.");
        return;
    }

    alert("Booking submitted successfully!");

});