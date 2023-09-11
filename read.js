
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
    
                    projectdiv.appendChild(projecttitleelement)
                    projectdiv.appendChild(projectdescripelement)
                    projectdiv.appendChild(projectimgelement)
    
                    projectcontainer.appendChild(projectdiv);
    
                })
            }
            displayprojects();
           
    
        }
    }
    
})


