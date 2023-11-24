from flask import Flask, render_template, request, jsonify
import RPi.GPIO as GPIO

app = Flask(__name__)

# Pin setup
GPIO.setmode(GPIO.BCM)
pin = 18
GPIO.setup(pin, GPIO.OUT)

@app.route('/')
def home():
    return render_template('switch.html')

@app.route('/raspberry/switch', methods=['POST'])
def switch():
    if request.form['state'] == '1':
        GPIO.output(pin, GPIO.HIGH)
    else:
        GPIO.output(pin, GPIO.LOW)
    return jsonify({"result": "success"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)