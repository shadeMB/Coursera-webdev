document.addEventListener("DOMContentLoaded", function (event) {
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {

        // Call server to get the name
        $ajaxUtils.sendGetRequest("/data/name.json", function (res) {
            var message = res.firstName + " " + res.lastName;
            if (res.likesMovies) {
                message += " likes movies";
            } else {
                message += " doesn't like movies";
            }
            message += " and is ";
            message += res.age;
            message += " years old.";

            document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
        });
    });
});