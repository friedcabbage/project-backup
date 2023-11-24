# Import necessary libraries
import time
import sys
import PyBluez
import Pyrebase
import Adafruit_DHT

# Define your Firebase project's configuration
firebaseConfig = {
    "apiKey": "YOUR_API_KEY",
    "authDomain": "YOUR_AUTH_DOMAIN",
    "databaseURL": "YOUR_DATABASE_URL",
    "projectId": "YOUR_PROJECT_ID",
    "storageBucket": "YOUR_STORAGE_BUCKET",
    "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
    "appId": "YOUR_APP_ID"
}

# Initialize Pyrebase to interact with Firebase
firebase = Pyrebase.initializeApp(firebaseConfig)
db = firebase.database()

# Initialize Bluetooth and RFCOMM server
server_sock = BluetoothSocket(RFCOMM)
server_sock.bind(("", PORT_ANY))
server_sock.listen(1)

port = server_sock.getsockname()[1]

uuid = "YOUR_UUID"

advertise_service(server_sock, "SampleServer", service_classes=[uuid], profiles=[SERIAL_PORT_PROFILE])

print("Waiting for connection on RFCOMM channel %d" % port)

# Establish Bluetooth connection
client_sock, client_info = server_sock.accept()
print("Accepted connection from ", client_info)

try:
    while True:
        # Read data from the transmitter raspberry
        data = client_sock.recv(1024)
        if len(data) == 0:
            break

        print("received [%s]" % data)