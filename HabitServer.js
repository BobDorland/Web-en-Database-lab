import { setInterval } from "timers";

var http = require("http");                                     // retrieves HTTP package
var server;   
var app;

server = http.createServer(function(req, res) {                  // creates a web server 

    res.writeHead(200, {"Content-Type" : 
                                          "text/plain"});        // creates a HTTP response & sends it 
            res.end("Processed.");                               

    console.log("HTTP response was sent.");
                                                                
});

var port = 2345;                                                 // accepts ports between 1024 and 49151
server.listen(port);                                             // matches the server with the specified port
console.log("Server is listening on port" + port);


var habits = [];                                                 // in memory list of habits 

function addHabit(habit) {                                       // add a habit to the memory of the server

    habits.push(habit);

}

function removeHabit(habit) {                                    // remove a habit from the memory of the server
    
            var index = habits.indexOf(habit);
    
            if(index >= 0) {
    
                habits.splice(index, 1);
    
            }
    
}

function updateHabitName(habit, newName) {                      // updates the name of a habit

    habit.setName(newName);

}

function updateHabitDays(habit, newDays) {                      // updates the days a habit is planned

    habit.setDays(newDays);

}

app.get(function(reg, req) {                          // sends JSON to the client

    res.json(habits);

});   

setInterval(function() {                                        // retrieves a list of habits from the server every 2 seconds (addHabit)

    console.log("Fetching the habit list from the server.");
    $.getJSON(habits, addHabit());

}, 2000);

setInterval(function() {                                        // retrieves a list of habits from the server every 2 seconds (removeHabit)
    
    console.log("Fetching the habit list from the server.");
    $.getJSON(habits, removeHabit());
    
}, 2000);

setInterval(function() {                                        // retrieves a list of habits from the server every 2 seconds (updateHabitName)
        
     console.log("Fetching the habit list from the server.");
     $.getJSON(habits, updateHabitName());
        
}, 2000);

setInterval(function() {                                        // retrieves a list of habits from the server every 2 seconds (updateHabitDays)
    
 console.log("Fetching the habit list from the server.");
 $.getJSON(habits, updateHabitDays());
    
}, 2000);


