const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
   ]

for (const row of listOfNeighbours) {
    for (const word of row) {
        console.log('Neighbour:',word);
    }
}   