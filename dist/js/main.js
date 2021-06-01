// NAVBAR ANIMATION
const menu = document.querySelector('.menu')
const navBar = document.querySelector('.nav-bar')
const closebutton = document.querySelector('.close')

menu.addEventListener('click', function() {
    navBar.classList.add('open')
    menu.classList.add('open')
})

closebutton.addEventListener('click', function() {
    navBar.classList.remove('open')
    menu.classList.remove('open')
})

// CHECKBOXES

const checkboxes = document.querySelectorAll('.checkbox')

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checked')
    })
})


// TODO ADD FUNCTIONALITY

const addButton = document.querySelector('.add-button')
const input = document.querySelector('.input')
const list = document.querySelector('.list ul')

addButton.addEventListener('click', () => {
    const newLI = document.createElement('li')

    const checkBox = document.createElement('div')
    checkBox.classList.add('checkbox')

    const span = document.createElement('span')
    span.innerText = input.value

    const delete_ = document.createElement('button')
    delete_.classList.add('delete')
    delete_.innerText = 'Delete'

    // DELETE FUNCTIONALITY
    delete_.addEventListener('click', function() {
        newLI.remove()
    })

    newLI.appendChild(checkBox)
    newLI.appendChild(span)
    newLI.appendChild(delete_)

    list.appendChild(newLI)

})