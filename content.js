var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = "Good Evening";
} else if (12 < hourNow < 18) {
	greeting = "Good Afternoon";
} else if (0 < hourNow < 12) {
	greeting = "Good Morning";
}
document.write(greeting);