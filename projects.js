document.addEventListener('DOMContentLoaded', function(){
    const storedUsers = localStorage.getItem('users');
    if (storedUsers){
        users = JSON.parse(storedUsers);
    }

    function allprojects(event){
        const projectcontainer = document.getElementById('projectcontainer');
        projectcontainer.innerHTML = '';

        users.forEach((user, userIndex) => {
            if (user.projects && user.projects.length >= 0) {
                user.projects.forEach((project, projectIndex) => {
                    const projectdiv = document.createElement('div');
                    projectdiv.className = 'project';

                    const projecttitleelement = document.createElement('h2');
                    projecttitleelement.className = 'title';
                    projecttitleelement.textContent = `User ${userIndex + 1}, Project ${projectIndex + 1}: ${project.title}`;

                    const projectdescripelement = document.createElement('p');
                    projectdescripelement.className = 'descript';
                    projectdescripelement.textContent = project.description;

                    const projectimgelement = document.createElement('img');
                    projectimgelement.className = 'image';
                    projectimgelement.src = project.image;

                    projectdiv.appendChild(projecttitleelement);
                    projectdiv.appendChild(projectdescripelement);
                    projectdiv.appendChild(projectimgelement);

                    projectcontainer.appendChild(projectdiv);
                });
            }
        });
    }

    allprojects();    
});
