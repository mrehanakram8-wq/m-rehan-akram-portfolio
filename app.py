from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"status": "Python Backend is Live!"})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json() or {}
    
    name = data.get('name', 'N/A')
    email = data.get('email', 'N/A')
    message = data.get('message', 'N/A')
    
    # 1. VS Code Terminal par output print karein
    print("\n==========================================")
    print(f"NEW MESSAGE RECEIVED:\nName: {name}\nEmail: {email}\nMessage: {message}")
    print("==========================================\n")
    
    # 2. Permanent record ke liye messages.txt file banayein
    with open("messages.txt", "a", encoding="utf-8") as f:
        f.write(f"Name: {name}\nEmail: {email}\nMessage: {message}\n----------------------------------\n")
    
    return jsonify({
        "status": "success",
        "message": f"Shukriya {name}! Aapka paigham Python backend ko mil gaya hai."
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)