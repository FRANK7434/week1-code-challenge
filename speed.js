function speedDetector() {
    let speed=Number(prompt("enter speed"));
    let points=0;
    if (speed < 70){
        return alert("ok")
}
else if ((points = Math.floor(speed - 70) / 5)> 12) {
    return alert ("License suspended");
}
else 
    return alert( "points: " + points)

}

return speed