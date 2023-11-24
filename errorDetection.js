function deteksiError(dataSensor) {
    if (dataSensor.temperature < 0 || dataSensor.temperature > 40) {
        return true;
    } else {
        return false;
    }
}


function Dataerror(dataError) {
    this.status = "Data Error";
}