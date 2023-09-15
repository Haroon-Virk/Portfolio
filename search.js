const storedUsers = localStorage.getItem('users');
if (storedUsers){
    users = JSON.parse(storedUsers)
}



function search(){
    // event.preventDefault()
    const search = document.getElementById('search').value
    console.log(search)
    console.log(users)

    for(let user of users){
        
        if(search === user.name){
            const cont = document.getElementById('container')
            const person = document.createElement('div')
            const personname = document.createElement('h5')
            const personemail = document.createElement('h5')
            const personnumber = document.createElement('h5')
            personname.textContent = user.name
            personemail.textContent = user.email
            personnumber.textContent = user.number
            person.appendChild(personname)
            person.appendChild(personemail)
            person.appendChild(personnumber)
        }
        else{
            alert('No user with this name found')
        }
    }
}
search()
document.getElementById('formsearch').addEventListener('click',search)