// Chatbot Toggle Functionality
function toggleChatbot() {
    var chatbot = document.getElementById("chatbotFrame");
    chatbot.style.display = (chatbot.style.display === "block") ? "none" : "block";
}

// Show Chatbot Pop-up Notification on Page Load
window.onload = function () {
    var popup = document.createElement("div");
    popup.id = "chatbot-popup";
    popup.innerHTML = "💬 Need Help? Try our chatbot!";

    // Popup Styling
    popup.style.position = "fixed";
    popup.style.bottom = "80px";
    popup.style.right = "20px";
    popup.style.background = "#c19177";
    popup.style.color = "#fff";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "20px";
    popup.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
    popup.style.cursor = "pointer";
    popup.style.zIndex = "999";
    popup.style.fontSize = "16px";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.gap = "8px";
    
    // Chat icon inside popup
    var chatIcon = document.createElement("span");
    chatIcon.innerHTML = ""; // Chat emoji
    popup.prepend(chatIcon);

    document.body.appendChild(popup);

    // Open chatbot when clicked
    popup.onclick = function () {
        toggleChatbot();
        popup.style.display = "none"; // Hide pop-up after opening chatbot
    };

    // Auto-hide after 5 seconds
    setTimeout(function () {
        popup.style.display = "none";
    }, 5000);
};
