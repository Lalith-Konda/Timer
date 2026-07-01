const solves = JSON.parse(localStorage.getItem("solves")) || [];

document.getElementById("solveCount").textContent = solves.length;

if(solves.length){

    document.getElementById("currentSolve").textContent =
        solves[solves.length-1].toFixed(2);

    document.getElementById("bestSolve").textContent =
        Math.min(...solves).toFixed(2);

    document.getElementById("worstSolve").textContent =
        Math.max(...solves).toFixed(2);

    const avg =
        solves.reduce((a,b)=>a+b,0)/solves.length;

    document.getElementById("averageSolve").textContent =
        avg.toFixed(2);

}
