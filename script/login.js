console.log("Login page script loaded");
document.getElementById("login-btn").addEventListener("click", function() {
    const mobileNumber = document.getElementById("input-number").value;
    const pin = document.getElementById("input-pin").value;
    if (mobileNumber === "01234567890" && pin === "1234") {
        alert("Login success!");
        window.location.assign("home.html");
    } else {
        alert("Invalid !");
        return;
    }
});
