from datetime import datetime
import requests
import timeit
FIREBASE_URL = "https://us-central1-weather-station-554c2.cloudfunctions.net/saveWeatherData/"


def firebase_cloud_post(data):
    response = requests.post(FIREBASE_URL, json=data)

    if(response.status_code != 200):
        return print ("API Firebase Error!", response, data)
    else:
        return print ("Succesfully Data sent to Firebase")

block = 32
key = 64
message_size = 50
reset_wind()
time.sleep(wind_interval)
start = timeit.default_timer()
humi_temp()
soilVal="{:.1f}".format(soilVal)
speed = calculate_speed(wind_interval)
format_speed = "{:.3f}".format(speed)

firebase_cloud_post(sendData)