const monsterCont = document.querySelector('#monster-container')
const next = document.querySelector('#forward')
const back = document.querySelector('#back')
const monsterForm = document.querySelector('#create-monster')

let counter = 0;
const pagination = 50;

function monsterCount() {
    let newLimit = counter + pagination
        back.disabled = Boolean(!counter);
    renderMonsters()
        .then(json => {
            for (let i = counter; i < newLimit; i++) {
                displayMonster(json[i])
            }
        });
}

monsterCount(pagination)


function displayMonster(monster) {
    mdiv = document.createElement('div');
    
        console.log('yes')
        mdiv.innerHTML = `
            <h1>${monster.id}. ${monster.name}</h1><br>
            <h2>${monster.age}</h2><br>
            <h3>${monster.description}<h3>
        `
        monsterCont.appendChild(mdiv)
}

next.addEventListener('click', event => {
    counter += pagination
    monsterCont.innerHTML = ""
    monsterCount()
})

back.addEventListener('click', event => {
    if (counter) {
        counter -= pagination
        monsterCont.innerHTML = ""
        monsterCount()
    }
})

const addMonster = monster => {
  let monsterEl = document.createElement('form')

  const title = document.createElement('h3')

  let nameInput = document.createElement('input')
  nameInput.setAttribute('type',"text");
  nameInput.setAttribute('name',"monster-name");
  let nameField = document.createElement('field')

  let ageInput = document.createElement('input')
    ageInput.setAttribute('type',"text");
    ageInput.setAttribute('class',"monster-age");
  let ageField = document.createElement('field')

  let descripitionInput = document.createElement('input')
    nameInput.setAttribute('type',"text");
    nameInput.setAttribute('class',"monster-descripition");
  let descripitionField = document.createElement('field')

  let submit = document.createElement('button')
    submit.setAttribute('type',"button");
    submit.setAttribute('class',"submit");

  title.innerText = "Create a  monster"
  nameField.innerText = "Name:"
  ageField.innerText = "Age:"
  descripitionField.innerText = "Descripition:"
  submit.innerText = "Submit" 

  monsterEl.appendChild(title)

  monsterEl.appendChild(nameField)
  monsterEl.appendChild(nameInput)
  
  monsterEl.appendChild(ageField)
  monsterEl.appendChild(ageInput)

  monsterEl.appendChild(descripitionField)
  monsterEl.appendChild(descripitionInput)

  monsterEl.appendChild(submit) 

  submit.addEventListener('click', event => {
      event.preventDefault()
      console.log("submit")

      const monster = {
          name: nameInput.value,
          age: ageInput.value,
          description: descripitionInput.value
      }

    console.log(monster)

    updateMonster(monster)
  })

  monsterForm.appendChild(monsterEl)
  
}

addMonster()

