function logout(){
    window.location = 'index.html'
}

let logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', ()=>{
    logout()
})



let user = {}

function currentUser(){
    user.userName = localStorage.getItem('userName')
    user.isAdmin = localStorage.getItem('isAdmin')
    user.avatar = localStorage.getItem('avatar')
}
currentUser()


let userNameParagraph = document.querySelector('.userNameParagraph')
let userStatus = document.querySelector('.userStatus')
let avatar = document.querySelector('.avatar')

function avatarClear(){
    let avatars = avatar.querySelectorAll('img')
    for(let i = 0; i < avatars.length; i++){
        avatars[i].remove()
    }
}

// displaying user's data in navbar

function userDisplay(){

    avatarClear()
    let userImage = document.createElement('img')
    for(let i = 0 ; i < userDataBase.length; i++){
        
        if(userDataBase[i].username == user.userName){
            if(userDataBase[i].avatar == ''){
                userImage.src = 'img/default.webp'
            } else{
                userImage.src = `img/${userDataBase[i].avatar}`
            }
            
            avatar.append(userImage)
        }
    }
    
    
    userNameParagraph.innerText = user.userName
    if(user.isAdmin == 'true'){
        userStatus.innerText = 'Admin'
    } else{
        userStatus.innerText = 'User'
    }
}
userDisplay()


// clear all function call

function clearAll(){
    userDisplay()
    clear()
    selectClear()
    imgClear()
    listClear()
    buttonClear()
    tableClear()
    savebuttonClear()
}



// menu points based on access rights:
let adminMenu = ['Statistics', 'Users', 'Gallery']
let userMenu = ['', '','Gallery']


// menu generator

let sideBar = document.querySelector('.sideBar')
let content = document.querySelector('.content')


function menuGenny(){
    if(user.isAdmin == "true"){
        let list = document.createElement('ul')
        sideBar.append(list)
        for(let i = 0; i < adminMenu.length; i++){
            let li = document.createElement('li')
            let link = document.createElement('a')
            link.href = "#"
            link.innerText = adminMenu[i]
            li.append(link)
            list.append(li)
        }
    } else{
        let list = document.createElement('ul')
        sideBar.append(list)
        for(let i = 0; i < userMenu.length; i++){
            let li = document.createElement('li')
            let link = document.createElement('a')
            link.href = "#"
            link.innerText = userMenu[i]
            li.append(link)
            list.append(li)
        }
    }
}
menuGenny()


//admin Menu

let links = sideBar.querySelectorAll('a')


function clear(){
    let paragraphs = content.querySelectorAll('p')
    for(let i = 0 ; i< paragraphs.length; i++){
        paragraphs[i].remove()
    }
}

function selectClear(){
    let selects = content.querySelectorAll('select')
    for(let i = 0 ; i < selects.length; i++){
        selects[i].remove()
    }
}


// Statistics function:
function firstFunction(){
    clearAll()

    let userCount = document.createElement('p')
    userCount.innerText = `Number of users on the page: ${userDataBase.length}`
    content.append(userCount)
    
    let counter = 0;

    for(let i = 0; i < userDataBase.length; i++){
        if(userDataBase[i].avatar !== ''){
            counter++
        }
    }
    let usersWithAvatars = document.createElement('p')
    usersWithAvatars.innerText = `${counter} user(s) have profile image on their record.`
    content.append(usersWithAvatars)
}

//table function


function savebuttonClear(){
    let savebuttons = document.querySelectorAll('.savebutton')
    for(sbutton of savebuttons){
        sbutton.remove()
    }
}

function tableClear(){
    let tables = document.querySelectorAll('table');
    for(tablet of tables){
        tablet.remove()
    }

    let forms = document.querySelectorAll('.databaseForm')
    for(dtforms of forms){
        dtforms.remove()
    }
    
    
}


function secondFunction(){
    clearAll()
    //creating form
    let dtform = document.createElement('form')
    dtform.classList.add('databaseForm')

    let useridInput = document.createElement('input')
    useridInput.name = 'useridInput'
    useridInput.id = 'useridInput'
    useridInput.placeholder = 'ID'
    useridInput.disabled = true

    let usernameInput = document.createElement('input')
    usernameInput.name = 'usernameInput'
    usernameInput.id = 'usernameInput'
    usernameInput.placeholder = 'Username'

    let passwordInput = document.createElement('input')
    passwordInput.name = 'passwordInput';
    passwordInput.id = 'passwordInput';
    passwordInput.placeholder = "Password"

    let adminInput = document.createElement('input')
    adminInput.name = 'adminInput';
    adminInput.id = 'adminInput';
    adminInput.placeholder = 'isAdmin'

    let avatarInput = document.createElement('input');
    avatarInput.name = 'avatarInput';
    avatarInput.id = 'avatarInput';
    avatarInput.placeholder = 'Avatar'

    let emailInput = document.createElement('input');
    emailInput.type = 'email'
    emailInput.name = 'emailInput';
    emailInput.id = 'emailInput';
    emailInput.placeholder = 'Email'

    let addButton = document.createElement('button')
    addButton.innerText = 'add user'
    addButton.type = 'button'

   

    dtform.append(useridInput, usernameInput, passwordInput, adminInput, avatarInput, emailInput, addButton)
    content.append(dtform)
    
    let newUser = {}

    addButton.addEventListener('click', ()=>{
        newUser.userID = userDataBase.length + 1;
        if(usernameInput.value == '' || usernameInput.value.length < 4){
            window.alert('Please use a valid Username.');
        } else{
            newUser.username = usernameInput.value
        }
        newUser.password = passwordInput.value;
        if(adminInput.value == 'true'){
            newUser.isAdmin = true;
        } else{
            newUser.isAdmin = false;
        }
        newUser.avatar = avatarInput.value;
        for(let i = 0; i < userDataBase.length ; i++){
            if(userDataBase[i].email == emailInput.value){
                return window.alert('This email has already been registered');
            }   
            newUser.email = emailInput.value     
            
        }
        
        userDataBase.push(newUser)
        newUser = {}
        secondFunction()

    })



    //creating table
  
    let dataTable = document.createElement('table')
    dataTable.classList.add('dataTable')
    content.append(dataTable)

    //table head
    let tableHeader = document.createElement('tr')
    let firstColumn = document.createElement('th')
    let secondColumn = document.createElement('th')
    let thirdColumn = document.createElement('th')
    let fourthColumn = document.createElement('th')
    let fifthColumn = document.createElement('th')
    let sixthColumn = document.createElement('th')
    let seventhColumn = document.createElement('th')
    
    firstColumn.innerText = 'ID';
    secondColumn.innerText = 'User name:';
    thirdColumn.innerText = 'Password';
    fourthColumn.innerText = 'isAdmin'
    fifthColumn.innerText = 'AvatarSource';
    sixthColumn.innerHTML = 'Email'
    seventhColumn.innerHTML = 'remove'
    tableHeader.append(firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn, seventhColumn)
    dataTable.append(tableHeader)
    
    for(let i = 0 ; i < userDataBase.length ; i ++){
        let tableRow = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let td7 = document.createElement('td')
        let td8 = document.createElement('td')
        
        let modifyButton = document.createElement('button')


        //eventlistener to edit button
        modifyButton.innerHTML = '<i class="fas fa-edit"></i>'
        modifyButton.addEventListener('click', ()=> {
           
            
            //assigning values to input.value
            useridInput.value = userDataBase[i].userID;

            usernameInput.value = userDataBase[i].username;

            passwordInput.value = userDataBase[i].password;

            adminInput.value = userDataBase[i].isAdmin;

            avatarInput.value = userDataBase[i].avatar;

            emailInput.value = userDataBase[i].email;

            savebuttonClear()

            let saveButton = document.createElement('button');
            saveButton.type = 'button';
            saveButton.classList.add('savebutton')
            saveButton.innerHTML = '<i class="fas fa-save"></i>'
            saveButton.addEventListener('click', ()=> {
                userDataBase[i].username = usernameInput.value;
                userDataBase[i].password = passwordInput.value;
        
                let bool = false;
                if(adminInput.value == 'true'){
                    bool = true
                } else{
                    bool = false
                }
                userDataBase[i].isAdmin = bool;
                userDataBase[i].avatar = avatarInput.value;
                userDataBase[i].email = emailInput.value
                
                secondFunction()
            })
            dtform.append(saveButton)
            

        })
        
        td8.append(modifyButton)

        let deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.classList.add('deletebuttons')
            
        //eventlistener to remove record from database
        deleteButton.innerHTML = '<i class="fas fa-times"></i>'
        deleteButton.addEventListener('click', ()=>{
            userDataBase.splice(i , 1)
            tableRow.remove()
            secondFunction()
        })
        td7.append(deleteButton)
        
        td1.innerText = userDataBase[i].userID;
        td2.innerText = userDataBase[i].username;
        td3.innerText = userDataBase[i].password;
        td4.innerText = 'isAdmin:'
        td6.innerText = userDataBase[i].email;
        let isAdminCheckbox = document.createElement('input')
        isAdminCheckbox.type = 'checkbox'
        if(userDataBase[i].isAdmin == true){
            isAdminCheckbox.checked = true;
        } else{
            isAdminCheckbox.checked = false;
        }
        td4.append(isAdminCheckbox)
        td5.innerText = userDataBase[i].avatar
        tableRow.append(td1, td2, td3, td4, td5, td6, td7, td8)
        dataTable.append(tableRow)
       
        
    }
}



//image galery function

let selectMenu = document.createElement('select')
let selectContainer = document.querySelector('.selectContainer')
let imageGallery = ['lion', 'bigcat', 'cat', 'cutie', 'eye', 'eye2', 'galaxy', 'monkey', 'sand' ]
let galleryContainer = document.querySelector('.galleryContainer')

function imgClear(){
    let images = content.querySelectorAll('img')
    for(let i = 0 ; i < images.length ; i++){
        images[i].remove()
    }
}
function buttonClear(){
    let selectButtons = selectContainer.querySelectorAll('button')

    for(let i = 0; i < selectButtons.length; i++){
        selectButtons[i].remove()
    }
}

function displayImage(){
    selectMenu.addEventListener('change', ()=>{
        
    })
    let newImageSource = ''
    

    for(let i = 0 ; i < imageGallery.length ; i++){
        let image = document.createElement('img')
        image.src = `img/${imageGallery[i]}.jpg`;
        image.alt = `${imageGallery[i]}`;
        image.addEventListener('click', ()=>{
            buttonClear()
            newImageSource = image.src
            let sourceArray = newImageSource.split("/");
            
            let saveButton = document.createElement('button')
            saveButton.innerText = 'Save'
            selectContainer.append(saveButton)
            saveButton.addEventListener('click', ()=>{
                if(selectMenu.value != 'blank'){

                    for(let k = 0 ; k < userDataBase.length ; k++){
                        if(userDataBase[k].username === selectMenu.value){
                            userDataBase[k].avatar = sourceArray[sourceArray.length-1]
                            userDisplay()
                            

                        }
                    }
                    
                }
            })
        })
        galleryContainer.append(image)
    }
    
}
function listClear(){
    let options = selectMenu.querySelectorAll('option')
    for(let i = 0; i< options.length; i++){
        options[i].remove()
    }
}

function thirdFunction(){
    clearAll()

    let firstOption = document.createElement('option')
    firstOption.value = 'blank'
    firstOption.innerText = 'Choose one'
    selectMenu.append(firstOption)

    for(let i = 0; i < userDataBase.length; i++){
        if(userDataBase[i].avatar == ''){
            continue
        } else if (userDataBase[i].avatar !== ''){
            let option = document.createElement('option')
            option.value = userDataBase[i].username;
            option.innerText = userDataBase[i].username;
            selectMenu.append(option)
        }

    }
    selectContainer.append(selectMenu)
    displayImage()
}


let pagearray = [firstFunction, secondFunction, thirdFunction]

for(let i =0 ; i < links.length; i++){
    links[i].addEventListener('click', ()=>{
        pagearray[i]()
    })
}


//add new user 


    
