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

// DELETE FUNCTIONALITY
const deleteButtons = document.querySelectorAll('.delete')

deleteButtons.forEach(deletebutton => {
    deletebutton.addEventListener('click', () => {
        const parent = deletebutton.parentElement
        parent.remove()
    })
})
