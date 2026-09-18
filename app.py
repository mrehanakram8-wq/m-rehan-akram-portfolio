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
    
    full_name = data.get('fullName', 'N/A')
    email = data.get('email', 'N/A')
    mobile = data.get('mobile', 'N/A')
    subject = data.get('subject', 'N/A')
    message = data.get('message', 'N/A')
    
    # Terminal Output
    print("\n==========================================")
    print(f"NEW MESSAGE RECEIVED:\nName: {full_name}\nEmail: {email}\nMobile: {mobile}\nSubject: {subject}\nMessage: {message}")
    print("==========================================\n")
    
    # Save to File
    with open("messages.txt", "a", encoding="utf-8") as f:
        f.write(f"Name: {full_name}\nEmail: {email}\nMobile: {mobile}\nSubject: {subject}\nMessage: {message}\n----------------------------------\n")
    
    return jsonify({
        "status": "success",
        "message": f"Thanks {full_name}! Your message saved to the backend."
    }), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)