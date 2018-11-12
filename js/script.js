const iAccuracy = 4;

let oWatch = new Stopwatch(function(oWatch){
    const oElapsedTime = oWatch.getElapsed();
    const iElapsedMilliseconds = oElapsedTime.milliseconds
        + (oElapsedTime.seconds * 1000)
        + (oElapsedTime.minutes * 60 * 1000)
        + (oElapsedTime.hours * 60 * 60 * 1000);

    document.getElementById("time").innerHTML = oWatch.toString();
    document.getElementById("ms").innerHTML = iElapsedMilliseconds;
    document.getElementById("sec").innerHTML = (iElapsedMilliseconds / 1000).toFixed(iAccuracy);
    document.getElementById("min").innerHTML = (iElapsedMilliseconds / 60000).toFixed(iAccuracy);
    document.getElementById("hours").innerHTML = (iElapsedMilliseconds / 3600000).toFixed(iAccuracy);
}, 1);

document.getElementById("startBtn").addEventListener("click", function(){
    oWatch.start();
});

document.getElementById("stopBtn").addEventListener("click", function(){
    oWatch.stop();
});

document.getElementById("resetBtn").addEventListener("click", function(){
    oWatch.stop();
    oWatch.reset();
});