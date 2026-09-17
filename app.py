from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Yeh browser security (CORS) ko allow karta hai

@app.route('/')
def home():
    return jsonify({"status": "Python Backend is Live!"})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    print(f"New Message Received:\nName: {name}\nEmail: {email}\nMessage: {message}")
    
    return jsonify({
        "status": "success",
        "message": f"Shukriya {name}! Aapka paigham Python backend ko mil gaya hai."
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)