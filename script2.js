document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded. Initializing auction items...");

    
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const currentBidElement = item.querySelector(".current-bid");
        const itemName = item.querySelector("h2").textContent.trim();
        const storedBid = localStorage.getItem(itemName);

        if (storedBid) {
            currentBidElement.textContent = `$${storedBid}`;
            console.log(`Loaded bid for ${itemName}: $${storedBid}`);
        }
    });
});

function submitBid() {
    console.log("Submit bid button clicked.");
    
    const button = event.target;
    const item = button.closest(".item");

    if (!item) {
        console.error("Could not find the parent item. Ensure the HTML structure is correct.");
        return;
    }

    const currentBidElement = item.querySelector(".current-bid");
    const inputField = item.querySelector(".new-bid");

    const itemName = item.querySelector("h2").textContent.trim();
    const newBid = parseInt(inputField.value, 10);
    const currentBid = parseInt(currentBidElement.textContent.replace("$", ""), 10);

    if (isNaN(newBid)) {
        alert("Please enter a valid number.");
        console.error("Invalid bid entered.");
        return;
    }

    if (newBid <= currentBid) {
        alert("Your bid must be higher than the current bid.");
        console.log(`Bid too low: ${newBid} <= ${currentBid}`);
        return;
    }

    currentBidElement.textContent = `$${newBid}`;
    localStorage.setItem(itemName, newBid);

    alert("Your bid has been successfully submitted!");
    console.log(`Bid submitted for ${itemName}: $${newBid}`);


    inputField.value = "";
}
