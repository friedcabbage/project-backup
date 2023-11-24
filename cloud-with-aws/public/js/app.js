// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9argUjBuHWnd3P6m2rCWh584Ez8_4v58",
    authDomain: "weather-station-554c2.firebaseapp.com",
    projectId: "weather-station-554c2",
    storageBucket: "weather-station-554c2.appspot.com",
    messagingSenderId: "786960725705",
    appId: "1:786960725705:web:91fd2d209b4173ed80bf18",
    measurementId: "G-7PPXC0YTW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Insert data to Firebase
async function fetchWeatherData() {
    const table = document.getElementById("weather-table");
    const collectionRef = query(collection(db, "weather_data"), orderBy("datetime", "desc"));
    onSnapshot(collectionRef, (snapshot) => {
        const lists = []

        snapshot.docs.forEach((doc) => {
            const list = doc.data();

            if (!lists.find(l => l.id === doc.id)) {
                lists.push({
                    ...list,
                    id: doc.id
                })
            }
        });

        console.log({lists})

        const body = table.querySelector("tbody");

        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }

        lists.forEach(list => {
            const date = list.datetime?.toDate().toDateString()
            const time = list.datetime?.toDate().toLocaleTimeString('id-Id')
            // Create a new row
            const newRow = document.createElement("tr");

            // Create new cells and add content to them
            const timeCell = document.createElement("td");
            const humidityCell = document.createElement("td");
            const windCell = document.createElement("td");
            const rainfallCell = document.createElement("td");
            const soilCell = document.createElement("td");
            const tempCell = document.createElement("td");
            timeCell.textContent = `${date} - ${time}`;
            humidityCell.textContent = `${list.h} %`
            windCell.textContent = `${list.w} km/h`
            rainfallCell.textContent = `${list.r} mm`
            soilCell.textContent = `${list.s} %`
            tempCell.textContent = `${list.t} C`

            // Append the cells to the new row
            newRow.appendChild(timeCell);
            newRow.appendChild(humidityCell);
            newRow.appendChild(windCell);
            newRow.appendChild(rainfallCell);
            newRow.appendChild(soilCell);
            newRow.appendChild(tempCell);

            // Append the new row to the table
            const firstTr = table.getElementsByTagName("tbody tr")[0];
            if (firstTr) {
                body.insertBefore(newRow, firstTr);
            } else {
                body.appendChild(newRow);
            }
        })
    });
}

// Call the function to fetch data
fetchWeatherData();