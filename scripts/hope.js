window.onload = function() {

    // Get the current page's URL
    var currentUrl = window.location.pathname;

    // Check which page the user is on and set the corresponding heading to be bold
    if (currentUrl.includes("home.html")) {
    document.getElementById("homeheading").style.color = "#ffffff";
    } else if (currentUrl.includes("haute.html")) {
    document.getElementById("hauteheading").style.color = "#ffffff";
    } else if (currentUrl.includes("history.html")) {
    document.getElementById("historyheading").style.color = "#ffffff";
    } else if (currentUrl.includes("hope.html")) {
    document.getElementById("hopeheading").style.color = "#ffffff";
    }

    document.getElementById("homeheading").addEventListener("click", function() {
        window.location.href = "home.html";
    });
    
    document.getElementById("hauteheading").addEventListener("click", function() {
        window.location.href = "haute.html";
    });
    
    document.getElementById("historyheading").addEventListener("click", function() {
        window.location.href = "history.html";
    });
    
    document.getElementById("hopeheading").addEventListener("click", function() {
        window.location.href = "hope.html";
    });

    
    document.getElementById("hhlogo").addEventListener("click", function() {
        window.location.href = "haute.html";
    });
}

function submitOpportunity() {
	// Get the user's input
	var name = document.getElementById("user_name").value;

    if (name == "") {
        document.getElementById("confirmation").innerHTML = "Please enter your name."
        document.getElementById("confirmation").style.display = "block";
    }
    else {
        try {
            // Create the confirmation message
            var message = "Thank you, " + name + "! Your submission has been received.";

            // Display the confirmation message
            document.getElementById("confirmation").innerHTML = message;
            document.getElementById("confirmation").style.display = "block";
        }
        catch {
            document.getElementById("confirmation").innerHTML = "An error occurred during the submission."
            document.getElementById("confirmation").style.display = "block";
        }
    }
}