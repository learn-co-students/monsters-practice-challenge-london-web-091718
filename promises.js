//get a promise with the monsters
function renderMonsters() {
    return fetch('http://localhost:3000/monsters')
        .then ( response => response.json())
}

//update monster
const updateMonster = (monster) => {
    console.log(monster)
    fetch(`http://localhost:3000/monsters`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(monster)
        })
    }
    