document.addEventListener('DOMContentLoaded', function(){
  const storedUsers = localStorage.getItem('users');
  if (storedUsers){
    users = JSON.parse(storedUsers)
  }
  function allusers(event){
    // event.preventDefault();
    const usercontainer = document.getElementById('usercontainer')
    usercontainer.innerHTML = '';

    users.forEach((user, userIndex) => {
      let userdiv = document.createElement('div')
      userdiv.className = 'user';;

      const username = document.createElement('h4')
      username.className = 'userr'
      // userNumber.textContent = userIndex
      username.textContent = user.name


      const userEmail = document.createElement('h4')
      userEmail.className = 'userr'
      userEmail.textContent = user.email

      const userNumber = document.createElement('h4')
      userNumber.className = 'userr'
      userNumber.textContent = user.number

      const userPassword =  document.createElement('h4')
      userPassword.className = 'userr'
      userPassword.textContent = user.password
      let userskills = document.createElement('h4')
      users.forEach((user) => {
        const skills = user.skills;
        user.skills.forEach((skill) => {
        userskills.innerHTML = `Skills: ${skill.language} 
          ${skill.framework} 
          ${skill.other}`
        
        });
      });

      let usereducation = document.createElement('h4')
      users.forEach((user) => {
        const education = user.education
        user.education.forEach((educate) => {
          usereducation.innerHTML = `Education: ${educate.degree}
          ${educate.university}
          ${educate.other}`
        });
       
      })
      const deletebut = document.createElement('button')
      deletebut.className = 'del'
      deletebut.textContent = 'Delete'
      deletebut.addEventListener('click', () => {
        deleteuser(user.name);
    })
      
      userdiv.appendChild(username)
      userdiv.appendChild(userEmail)
      userdiv.appendChild(userNumber)
      userdiv.appendChild(userPassword)
      userdiv.appendChild(userskills)
      userdiv.appendChild(usereducation)
      userdiv.appendChild(deletebut)
      usercontainer.appendChild(userdiv)

      
    });

      


    }
    allusers();

})

function deleteuser(username){
  storedUsers = localStorage.getItem('users')
  if (storedUsers){
    users = JSON.parse(storedUsers)
    console.log(users)
  }

  const userIndex = users.findIndex(user => username === user.name)
  console.log(userIndex)
  if (userIndex){
    users.splice(userIndex,1)
    localStorage.setItem('users', JSON.stringify(users));
    alert('User deleted successfully')
    window.location.href = 'admuser.html'
  }
  else{
    alert('User not founded')
  }


}
