$(document).ready(function () {
    // Variables to keep track of stats
    var counter = 0;
    var targetScore = 0;
    var randomNumCrystal = []; // Array to hold the values for each of the four crystals
    var wins = 0;
    var losses = 0;
    var crystals = $("#crystals");


    
    function startGame() {
        
        // Generete a random number between 19 and 120 for our target score
        targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        // reset variables
        randomNumCrystal = [];
        counter = 0;
        crystals.empty();
        
        //Populate four random values from 1 and 12 to the array
        for (var i = 0; i < 4; i++) {
            var value = Math.floor(Math.random() * 12) + 1;
            randomNumCrystal.push(value);
        }
        
        console.log(randomNumCrystal);
        
        // Create the four crystals buttons and assign the value from the array to each
        for (var i = 0; i < 4; i++) {
            
            // Create an input with a class of "cystal-image" and set its type to image
            var buttonCrystal = $("<input>");
            buttonCrystal.addClass("crystal-image img-thumbnail");
            buttonCrystal.attr("type", "image");
            // Add the src to the link
            buttonCrystal.attr("src", "assets/images/crystal" + (i + 1) + ".jpg");
            // Add a data attribue and set equal to the randomNumCrystal array
            buttonCrystal.attr("data-crystalvalue", randomNumCrystal[i]);
            // Append the button to the page
            crystals.append(buttonCrystal);
        }

        // Print stats to the page
        $("#target-score").text(targetScore);
        $("#user-score").text(counter);
        $("#losses").text(losses);
        $("#wins").text(wins);
    }

    // On click event
    $("#crystals").on("click", ".crystal-image", function () {

        // Extract the crystal's data attribute value
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        // Add the crystal value to the user's total score
        counter += crystalValue;

        // Print total score to the page
        $("#user-score").text(counter);

        // Winning condition
        if (counter === targetScore) {
            wins++;
            $("#alert-window").hide("fade")
            $("#alert-window").show("fade")
            $("#alert-message").text("You Won!")
            startGame();
        }
        // Losing Condition
        else if (counter >= targetScore) {
            losses++;
            $("#alert-window").hide("fade")
            $("#alert-window").show("fade")
            $("#alert-message").text("You lost!")
            startGame();
        }
    });

    startGame();

});