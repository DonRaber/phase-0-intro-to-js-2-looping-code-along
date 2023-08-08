const gifter = ["Guadalupe,", "Ollie", "Aki"];

function writeCards(gifter) {
    var messages = [];
        for (let m = 0; m < gifter.length; m++) {
        messages.push(`Thank you, ${gifter[m]}, for the wonderful surprise gift!`);    
    }  
    return messages;
}

writeCards(gifter);

function countDown() {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter--);
    }
}

countDown();