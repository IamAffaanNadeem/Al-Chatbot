const sendButton = document.getElementById("sendButton");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

sendButton.addEventListener("click", () => {
    const message = userInput.value;
    if (message.trim() === "") {
        return; // Do nothing if the input is empty
    }

    // Display user's message
    const userMessageElement = document.createElement("p");
    userMessageElement.classList.add("user-message");
    userMessageElement.textContent = message;
    chatBox.appendChild(userMessageElement);

    // Clear the input box
    userInput.value = "";

    // Send the message to the backend
    fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    })
        .then(response => response.json())
        .then(data => {
            const botMessageElement = document.createElement("p");
            botMessageElement.classList.add("bot-message");
            botMessageElement.textContent = data.response;
            chatBox.appendChild(botMessageElement);
        })
        .catch(error => {
            console.error("Error:", error);
            const errorMessageElement = document.createElement("p");
            errorMessageElement.classList.add("error-message");
            errorMessageElement.textContent = "Error connecting to the server!";
            chatBox.appendChild(errorMessageElement);
        });
});
