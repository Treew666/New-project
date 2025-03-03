from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Включаем CORS для всех маршрутов

LOGIN = "login"
PASSWORD = "password"

@app.route('/auth', methods=['post'])
def auth():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username == LOGIN and password == PASSWORD:
        return {"status": "success", "message": "Login successful"}, 200
    else:
        return {"status": "error", "message": "Invalid credentials"}, 401


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)