function recurringMessage() {
    console.log("Hello! This message repeats every 2 seconds.");
    setTimeout(recurringMessage, 2000);
}

recurringMessage(); 