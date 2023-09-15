document.addEventListener('DOMContentLoaded', function(){
    function write(){
        const storedcurrentuser = localStorage.getItem('currentuser')
        if (storedcurrentuser){
            currentuser = JSON.parse(storedcurrentuser)
            console.log(currentuser)
        }
        const name = document.getElementById('username')
        name.textContent = currentuser.name
        const project = document.getElementById('Projects')

       
        for (let proj in currentuser.projects){
            console.log(currentuser.projects[proj].title)
            const projecttitleelement = document.createElement('h5')
            const projectdescription = document.createElement('p')
            const projimage = document.createElement('img')
            projimage.className = 'projimg'
            projecttitleelement.textContent = currentuser.projects[proj].title;
            projectdescription.textContent = currentuser.projects[proj].description;
            projimage.src = currentuser.projects[proj].image;

            project.appendChild(projecttitleelement)
            project.appendChild(projectdescription)
            project.appendChild(projimage)

        }
        // project.textContent = currentuser.projects
    
    }
write()

})