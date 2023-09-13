
document.addEventListener('DOMContentLoaded', function(){
    const storedcurrentuser = localStorage.getItem('currentuser')
    if (storedcurrentuser){
        const currentuser = JSON.parse(storedcurrentuser)

        if (currentuser && currentuser.projects && currentuser.projects.length > 0){
            function displayprojects(){
                const projectcontainer = document.getElementById('projectcontainer')
                projectcontainer.innerHTML = '';
                
                currentuser.projects.forEach((project, index) => {
                    const projectdiv = document.createElement('div')
                    projectdiv.className = 'project';
    
                    const projecttitleelement = document.createElement('h2');
                    projecttitleelement.className = 'title'
                    projecttitleelement.textContent = `Project ${index + 1}: ${project.title}`;
                    // projecttitleelement.textContent = project.title
                    const projectdescripelement = document.createElement('p')
                    projectdescripelement.className = 'descript'
                    projectdescripelement.textContent = project.description
    
                    const projectimgelement = document.createElement('img')
                    projectimgelement.className = 'image';
                    projectimgelement.src = project.image

                    const deletebutton = document.createElement('button')
                    deletebutton.className = 'del'
                    deletebutton.textContent = 'Delete'
                    deletebutton.addEventListener('click', () => {
                        deleteproject(project.id);
                    })

    
                    projectdiv.appendChild(projecttitleelement)
                    projectdiv.appendChild(projectdescripelement)
                    projectdiv.appendChild(projectimgelement)
                    projectdiv.appendChild(deletebutton)
                    projectcontainer.appendChild(projectdiv);
    
                })
            }
            displayprojects();
           
    
        }
    }
    
})
console.log(projects)




function deleteproject(projectid){
    const storedprojects = localStorage.getItem('projects')
if(storedprojects){
    projects = JSON.parse(storedprojects)
    console.log(storedprojects)
}
const storedcurrentuser = localStorage.getItem('currentuser')
if (storedcurrentuser){
    currentuser = JSON.parse(storedcurrentuser)
    console.log(currentuser)
    if (!currentuser){
        alert('You must be logged in')
    }
}
const storedUsers = localStorage.getItem('users');
if (storedUsers){
    users = JSON.parse(storedUsers)
    console.log(users)
}
    const userIndex = users.findIndex(user => user.email === currentuser.email)
    if (userIndex >= 0){
        const projectIndex = users[userIndex].projects.findIndex(project => project.id === projectid)
        console.log(projectIndex)
        if (projectIndex >= 0){
            currentuser.projects.splice(projectIndex, 1)
            users[userIndex] = currentuser
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentuser', JSON.stringify(currentuser))

            alert('Project deleted succesfully')
            window.location.href = 'delete.html'
        }
        else{
            alert('project not founded')
        }
    }
}