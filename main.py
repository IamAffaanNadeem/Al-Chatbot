from flask import Flask, request, jsonify

app = Flask(__name__)

# Default route
@app.route('/')
def home():
    return """
    <h1>Welcome to the AI Chatbot Backend</h1>
    <p>The server is running successfully!</p>
    <p>Use the chatbot interface to interact. If you see this page, the server is ready.</p>
    """

# Chatbot route
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    
    # Basic chatbot logic
    if user_message.lower() == 'hi':
        bot_response = 'Hello! How can I help you today?'
    elif user_message.lower() == 'bye':
        bot_response = 'Goodbye! Have a great day!'
    else:
        bot_response = "I'm still learning! Can you rephrase your question?"

    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
