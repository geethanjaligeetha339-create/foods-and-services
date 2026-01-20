function botReply(type) {
    let chatBox = document.getElementById("chat-box");

    let userText = type.charAt(0).toUpperCase() + type.slice(1);
    chatBox.innerHTML += `<div class="user">You: ${userText}</div>`;

    let reply = "";

    if (type === "menu") {
        reply = "🍕 Menu:<br>Pizza - ₹199<br>Burger - ₹99<br>Pasta - ₹149<br>Drinks - ₹49";
    } 
    else if (type === "price") {
        reply = "💰 Price Range: Items start from ₹49 to ₹199.";
    }
    else if (type === "order") {
        reply = "🛒 To place an order, please select items from the menu.";
    }
    else if (type === "delivery") {
        reply = "🚚 Delivery available within 30 minutes. Free delivery on orders above ₹299.";
    }

    chatBox.innerHTML += `<div class="bot">Bot: ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
