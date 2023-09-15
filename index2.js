let users = [];

const storedUsers = localStorage.getItem('users');
if (storedUsers){
    users = JSON.parse(storedUsers)
}
let currentuser = [];


function signup(event){
    event.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const number = document.getElementById('number').value

    const existingUser = users.find((user) => user.email === email); // user is the current element in the iteration
    if (existingUser){
        alert("Email already exists")
        return
    }

    const newUser = {
        name,
        email,
        password,
        number,
        skills: [],
        education: [],
        projects: []
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('form').reset();
    alert('Sign Up successful');
    window.location.href = 'login.html';
}

function login(event){
    event.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const user = users.find((user) => user.email === email); 
    if (user && user.password === password){
        currentuser = user;
        localStorage.setItem('currentuser', JSON.stringify(currentuser));
        console.log(users)
        console.log(currentuser);
        window.location.href = 'profile.html';

    }
    else{
        alert('Login Unsuccessful')
    }
}

// let projects = [];
const storedprojects = localStorage.getItem('projects');
if (projects){
    projects = JSON.parse(storedprojects)
}

function saveProjectdata(event){
    event.preventDefault()
    const storedcurrentuser = localStorage.getItem('currentuser')
    if (storedcurrentuser){
        currentuser = JSON.parse(storedcurrentuser)
        console.log(currentuser)
        if (!currentuser){
            alert('You must be logged in')
        }
    }
    

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value
    const inputfile = document.getElementById('image');

    const reader = new FileReader();
    reader.onload = function(e){
        const imagedata = e.target.result;

        const project = {
            title,
            description,
            image: imagedata
        }
        if (!currentuser.projects){
            currentuser.projects = []
        }
        currentuser.projects.push(project);
        console.log(currentuser)
        const userIndex = users.findIndex(user => user.email === currentuser.email)
        if (userIndex !== -1){
            users[userIndex] = currentuser;
        }
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentuser', JSON.stringify(currentuser))
    
        document.getElementById('form').reset();
    
        alert('Project data saved')
    }
    localStorage.setItem('projects', JSON.stringify(projects))

    reader.readAsDataURL(inputfile.files[0])
    
}
document.getElementById('form').addEventListener('submit', saveProjectdata)

console.log(users)

function viewuser(event) {
    event.preventDefault();
    const usercontainer = document.getElementById('container');
    
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        const userdiv = document.createElement('div');
        userdiv.className = 'wrapper'
        userdiv.innerHTML = `
            <div class='na'><h4>Name: ${user.name}</h4></div>
            <div class='em'><h4>Email: ${user.email}</h4></div>
            <div class='na'><h4>Number: ${user.number}</h4></div>
            <div class='pa'><h4>Password: ${user.password}</h4></div>
        `;

        usercontainer.appendChild(userdiv);

        // Create a skill container for each user
        const skillcontainer = document.createElement('div');
        skillcontainer.className = 'wrapper'
        const skillheading = document.createElement('h2');
        skillheading.textContent = 'Skills'
        skillcontainer.appendChild(skillheading)
        for(let a of user.skills){
            for(let b in a){
                const skillelement = document.createElement('div');
                skillelement.innerHTML = `<h4> ${a[b]}</h4>`;
                skillcontainer.appendChild(skillelement);
            }
            
        };

        usercontainer.appendChild(skillcontainer);

        const educontainer = document.createElement('div')
        educontainer.className = 'wrapper'
        const eduheading = document.createElement('h2')
        eduheading.textContent = 'Education'
        educontainer.appendChild(eduheading)
        for(let a of user.education){
            for(let b in a){
                const eduelement = document.createElement('div')
                eduelement.innerHTML = `<h4> ${a[b]}</h4>`
                educontainer.appendChild(eduelement)
            }
        }
        usercontainer.appendChild(educontainer)
    }
}

function saveskills(event){
    event.preventDefault();
    const storedcurrentuser = localStorage.getItem('currentuser')
    if (storedcurrentuser){
        currentuser = JSON.parse(storedcurrentuser)
        // console.log(currentuser)
        if (!currentuser){
            alert('You must be logged in')
        }
    }

    const language = document.getElementById('language').value
    const framework = document.getElementById('framework').value
    const other = document.getElementById('other').value
    const skill = {
        language,
        framework,
        other
    }
    console.log(skill)
    currentuser.skills.push(skill)
    console.log(currentuser)

    const userIndex = users.findIndex(user => user.email === currentuser.email)
    if (userIndex !== -1){
        users[userIndex] = currentuser;
    }
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentuser', JSON.stringify(currentuser))
    document.getElementById('skillset').reset()
}
document.getElementById('skillset').addEventListener('submit', saveskills)


function saveeducation(event){
    event.preventDefault()
    const storedcurrentuser = localStorage.getItem('currentuser')
    if (storedcurrentuser){
        currentuser = JSON.parse(storedcurrentuser)
        // console.log(currentuser)
        if (!currentuser){
            alert('You must be logged in')
        }
    }

    const degree = document.getElementById('degree').value
    const university = document.getElementById('university').value
    const other = document.getElementById('other').value
    const edu = {
        degree,
        university,
        other
    }
    currentuser.education.push(edu)
    console.log(currentuser)
    const userIndex = users.findIndex(user => user.email === currentuser.email)
    if (userIndex !== -1){
        users[userIndex] = currentuser;
    }
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentuser', JSON.stringify(currentuser))
    document.getElementById('education').reset()


}
document.getElementById('education').addEventListener('submit', saveeducation)

function updateuser(event){
    event.preventDefault();
    const storedcurrentuser = localStorage.getItem('currentuser')
    if (storedcurrentuser){
        currentuser = JSON.parse(storedcurrentuser)
        // console.log(currentuser)
        if (!currentuser){
            alert('You must be logged in')
        }
    }

    const updatename = document.getElementById('updatedname').value
    const updateemail = document.getElementById('updatedemail').value
    const upadtednumber =  document.getElementById('updatednumber').value
    const updatedpassword = document.getElementById('updatedpassword').value
    
    const userIndex = users.findIndex(user => user.email === currentuser.email)
    if (userIndex >= 0){
        currentuser.name = updatename;
        currentuser.email = updateemail;
        currentuser.number = upadtednumber;
        currentuser.password = updatedpassword;

        users[userIndex] = currentuser;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentuser', JSON.stringify(currentuser))
    }
    else{
        alert("User not found")
    }
    document.getElementById('update').reset()

}
document.getElementById('update').addEventListener('submit', updateuser)


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

// const storedprojects = localStorage.getItem('projects')
// if(storedprojects){
//      projects = JSON.parse(storedprojects)
//     console.log(storedprojects)
// }
function deleteproject(projectid){
 
    const userIndex = users.findIndex(user => user.email === currentuser.email)
    if (userIndex >= 0){
        const projectIndex = projects.findIndex(project => project.id === projectid)
        console.log(projectIndex)
        if (projectIndex >= 0){
            currentuser.projects.splice(projectIndex, 1)
            users[userIndex] = currentuser
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentuser', JSON.stringify(currentuser))

            alert('Project deleted succesfully')
        }
        else{
            alert('project not founded')
        }
    }
}


function write(event){
    event.preventDefault()
    console.log(currentuser.name)
   
    // const userNameElement = document.getElementById('username')
    const userProjectElement = document.getElementById('Projects')
    if (userProjectElement){
        console.log('Project id found')
    }
    else{
        console.log('PRoject id not found')
    }

    // if (userNameElement){
    //     userNameElement.textContent = currentuser.name
    //     console.log(userNameElement)
    // }
    // else{
    //     alert('No user with that id found')
    // }
        
        
        if (currentuser && currentuser.projects.length > 0){
            for (const project of currentuser.projects){
                console.log(project)
                const projectElement = document.createElement('div');
                userProjectElement.innerHTML = '' //For clearing previous content
                `<h4> ${project.title}</h4>
                <p> ${project.description}</p>
                <img src = ${project.image}/>`    
                userProjectElement.appendChild(projectElement)

            }

        }
    

}

document.addEventListener('DOMContentLoaded', write)
// document.getElementById('cont').addEventListener('click', write)