// Thank you message to my Family by Anthony
// Code by Anthony.media 
// 2021-01-01
// (C) Copyright Anthony.media, all rights reserved
const thanksApp = {
    login: {
        input: document.querySelector('.input-login'),
        error: document.querySelector('.error'),
        button: document.querySelector('#login'),
        view: document.querySelector('.login-box')
    },    
    execute: {
        encode: string => {
            console.log(btoa(string));
            return btoa(string);
        },
        decode: string => {
            console.log(atob(string));
            return atob(string);
        },
        checkLogin: () => {
            let guest = thanksApp.login.input.value.toLowerCase().trim().replace(/\s+/g, '');
            guest = thanksApp.execute.encode(guest);
            let auth = false;

            for (let person of data){
                if(guest === person.key){
                    console.log('MATCH! Auth successfull')
                    auth = true;
                    thanksApp.execute.success(person);
                }
            }
            if(!auth){
                thanksApp.execute.unsuccessful();
            }
            return auth;
        },
        unsuccessful: () => {
            thanksApp.login.error.classList.remove('hide');
            thanksApp.login.input.value = "";
        },
        success: person => {
            console.log(person);
            // hide the login
            thanksApp.login.view.classList.add('hide');
            thanksApp.page.header.classList.add('hide');

            // render the message
            thanksApp.message.view.classList.remove('hide');
            thanksApp.message.name.innerHTML = thanksApp.execute.decode(person.name); 
            thanksApp.message.video.src = `https://www.youtube.com/embed/${thanksApp.execute.decode(person.video)}`; 
        },
        onLoad: () => {
            console.log('thanksApp running!')
            if(document.location.hash){
                let user = document.location.hash.replace("#", "").toLowerCase();
                thanksApp.login.input.value = user;
                thanksApp.execute.checkLogin();
                console.log('attempting hash')
            }
        }
    }, 
    message: {
        view: document.querySelector('.thanks'),
        name: document.querySelector('#name'),
        video: document.querySelector('.embed')

    },
    page: {
        header: document.querySelector('.header')
    }
}

// get the receipient
thanksApp.execute.onLoad();

// event listeners
thanksApp.login.button.addEventListener('click', thanksApp.execute.checkLogin);