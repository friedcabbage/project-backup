const { Board, Sensor } = require("johnny-five");
const Raspi = require("raspi-io");

const board = new Board({
 io: new Raspi(),
 repl: false,
});

board.on("ready", () => {
 const sensor = new Sensor("GPIO13");

 sensor.on("change", () => {
    const { value, enabled } = sensor;
    console.log(`Sensor value: ${value}, Sensor enabled: ${enabled}`);
 });
});