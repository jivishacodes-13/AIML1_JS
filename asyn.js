/*var promise = new Promise(function(resolve, reject) {
    let success = true; // Simulate success or failure
    if (success) {
        resolve("Data loaded successfully!");
    } else {
        reject("Failed to load data.");
    }
});
promise.then(result => console.log(result)
).catch(error => console.error(error));
try{
    var x= y+10;
} catch(error){
    console.log("An error occurred: " + error.message);
}                                                                                                                                                    
*/
localStorage.setItem("name", "Omika");
var name = localStorage.getItem("name");
localStorage.removeItem("name");
