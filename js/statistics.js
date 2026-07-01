const solves = JSON.parse(localStorage.getItem("solves")) || [];

function average(arr){

    return arr.reduce((a,b)=>a+b,0)/arr.length;

}

function wcaAverage(arr){

    if(arr.length < 3)
        return null;

    const sorted = [...arr].sort((a,b)=>a-b);

    sorted.shift();

    sorted.pop();

    return average(sorted);

}

document.getElementById("solveCount").textContent = solves.length;

if(solves.length){

    document.getElementById("currentSolve").textContent =
        solves.at(-1).toFixed(2);

    document.getElementById("bestSolve").textContent =
        Math.min(...solves).toFixed(2);

    document.getElementById("worstSolve").textContent =
        Math.max(...solves).toFixed(2);

    document.getElementById("averageSolve").textContent =
        average(solves).toFixed(2);

}

// ---------- Current Ao5 ----------

if(solves.length >= 5){

    const currentAo5 =
        wcaAverage(solves.slice(-5));

    document.getElementById("currentAo5").textContent =
        currentAo5.toFixed(2);

}else{

    document.getElementById("currentAo5").textContent = "-";

}

// ---------- Best Ao5 ----------

if(solves.length >= 5){

    let best = Infinity;

    for(let i=0;i<=solves.length-5;i++){

        const ao5 =
            wcaAverage(solves.slice(i,i+5));

        if(ao5 < best)
            best = ao5;

    }

    document.getElementById("bestAo5").textContent =
        best.toFixed(2);

}else{

    document.getElementById("bestAo5").textContent = "-";

}

// ---------- Current Ao12 ----------

if(solves.length >= 12){

    const currentAo12 =
        wcaAverage(solves.slice(-12));

    document.getElementById("currentAo12").textContent =
        currentAo12.toFixed(2);

}else{

    document.getElementById("currentAo12").textContent = "-";

}

// ---------- Best Ao12 ----------

if(solves.length >= 12){

    let best = Infinity;

    for(let i=0;i<=solves.length-12;i++){

        const ao12 =
            wcaAverage(solves.slice(i,i+12));

        if(ao12 < best)
            best = ao12;

    }

    document.getElementById("bestAo12").textContent =
        best.toFixed(2);

}else{

    document.getElementById("bestAo12").textContent = "-";

}
