let users = [];
const storedUsers = localStorage.getItem('users');
if (storedUsers){
    users = JSON.parse(storedUsers)
}
let currentuser;

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
        projects: []
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('form').reset();
    alert('Sign Up successful');
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

let projects = [];
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
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentuser', JSON.stringify(currentuser))
    
        document.getElementById('form').reset();
    
        alert('Project data saved')
    }

    reader.readAsDataURL(inputfile.files[0])
    
}
document.getElementById('form').addEventListener('submit', saveProjectdata)
