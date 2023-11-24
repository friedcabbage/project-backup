import
function calculateAverage(dataArray) {
    let totalData = 0;
    let average;
   
    dataArray.forEach(dataPoint => {
       totalData += dataPoint;
    });
   
    let numberOfDataPoints = dataArray.length;
    average = totalData / numberOfDataPoints;
   
    return average;
   }
   
   let dataArray = [2, 3, 4, 5, 6];
   console.log("The average is: " + calculateAverage(dataArray));