let nameBox
let ageBox
let descriptionBox


const monsterContainerEl = document.querySelector('#monster-container')

const getMonsters = () => fetch(`http://localhost:3000/monsters`).then(resp=>resp.json())

const addMonster = (monster) => {
    headingEl = document.createElement('h1')
    headingEl.innerHTML=`${monster.name}`
    monsterContainerEl.appendChild(headingEl)

    ageEl = document.createElement('p')
    ageEl.innerHTML=`${monster.age}`
    monsterContainerEl.appendChild(ageEl)

    descriptionEl = document.createElement('p')
    descriptionEl.innerHTML=`${monster.description}`
    monsterContainerEl.appendChild(descriptionEl)
}

const addMonsters = (monsters) => monsters.forEach(monster=>addMonster(monster))


const addNewMonsterToDom = () => {
    headingEl = document.createElement('h1')
    headingEl.innerHTML= nameBox.value
    monsterContainerEl.appendChild(headingEl)

    ageEl = document.createElement('p')
    ageEl.innerHTML= ageBox.value
    monsterContainerEl.appendChild(ageEl)

    descriptionEl = document.createElement('p')
    descriptionEl.innerHTML= descriptionBox.value
    monsterContainerEl.appendChild(descriptionEl)
}

const addNewMonsterToServer = () => {
    let name=nameBox.value
    
    let age=parseInt(ageBox.value)
    let description=descriptionBox.value
    console.log(name,age,description)
    fetch(`http://localhost:3000/monsters`,{
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({name: name, age: age, description: description })
})}



const populateMonster=()=>{
    headingEl.innerHTML=`${monster.name}`
    ageEl.innerHTML=`${monster.age}`
    descriptionEl.innerHTML=`${monster.description}`
}

const monsterFormEl = document.querySelector('#create-monster')

const renderForm = () => {
    nameBox = document.createElement('input')
    nameBox.setAttribute("placeholder", "name")
    monsterFormEl.appendChild(nameBox)
    ageBox = document.createElement('input')
    ageBox.setAttribute("placeholder", "age")
    monsterFormEl.appendChild(ageBox)
    descriptionBox = document.createElement('input')
    descriptionBox.setAttribute("placeholder", "description")
    monsterFormEl.appendChild(descriptionBox)
    formButtonEl = document.createElement('button')
    formButtonEl.innerText=('Submit')
    formButtonEl.setAttribute("class", "form-button")
    monsterFormEl.appendChild(formButtonEl)

    formButtonEl.addEventListener('click', () => {
        addNewMonsterToDom()
        addNewMonsterToServer()
    })
}


renderForm()
getMonsters().then(monsters=>addMonsters(monsters))
