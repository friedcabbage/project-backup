const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { FieldValue } = require("firebase-admin/firestore");

admin.initializeApp();

exports.saveWeatherData = functions
  .runWith({ maxInstances: 3 })
  .https.onRequest(async (request, response) => {
    // Get method property from "request" object
    const { method } = request;
    // Get all request body 
    const { h, s, t, w, r } = request.body;
    // initialize firebase admin with firestore feature
    const db = admin.firestore();

    // Check request method wheter is GET or POST, if its get will return 405
    if (method === "GET") {
      return response.status(405).json({ message: "Method not allowed" });
    }

    // Get firestore collection data to save
    const weatherDatRef = db.collection("weather_data");

    // Assign request body to weather_data's collection and save it!
    await weatherDatRef.add({
      h,
      s,
      t,
      w,
      r,
      datetime: FieldValue.serverTimestamp(),
    });

    // Return success message
    response.status(200).json({ message: "Data saved" });
  });
