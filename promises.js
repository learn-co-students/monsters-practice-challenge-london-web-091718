//get a promise with the monsters
function renderMonsters() {
    return fetch('http://localhost:3000/monsters')
        .then ( response => response.json())
}

//create monster
const updateMonster = (monster) => {
    fetch(`http://localhost:3000/monsters`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(monster)
        })
    }
    