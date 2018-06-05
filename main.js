let Arr=[];
for(i=0;i<=100;i++){
    Arr.push(60+40*Math.random())
}

function Main(arr) {
    let observingDataLength = Math.floor(arr.length/Math.E);
    let maxOfObs = getMax(arr.slice(0,observingDataLength));

    let firstOfRest ;
    for(i=observingDataLength;arr.length;i++){
        if(arr[i]>maxOfObs){
            firstOfRest = arr[i];
            break;
        }
    }
    return [maxOfObs,firstOfRest,getMax(arr),arr]
}


function getMax(arr) {
    return arr.sort((a,b)=>a<b)[0]
}

console.log(Main(Arr));