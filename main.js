const account = {
    owner: 'Amine Khodja', 
    email: 'algusamine@gmail.com',
    phoneNumber: '212-444-8746',
    password: 'AmineKhodja8746%'
};

let header = document.querySelector('header');
let body =  document.querySelector('body');
let logInEmail = document.querySelector('#email');
let logInPassword = document.querySelector('#password');
let logInForm = document.querySelector('.log-in-form');
let logInDiv = document.querySelector('#log-in-div');
let resetPassword = document.querySelector('#reset-password');
let resetPasswordTitle = document.querySelector('#reset-password-title');
let resetPasswordForm = document.querySelector('#reset-pw-form');
let emailPhone = document.querySelector('#email-phone');
let resetPasswordLink = document.querySelector('#reset-link-sent');
let tryAgainTitle = document.querySelector('#try-again-title')
let tryAgain = document.querySelector('#try-again');
let resetPasswordInput = document.querySelector('#rest-password-input');
let sendEmailPhone = document.querySelector('#send');
let pwErrMsg = document.querySelector('#pw-msg-err');
let emailErrMsg = document.querySelector('#email-phone-msg-err');
let createNewAcct = document.querySelector('.create-new-acc');
let signUpFormTitle = document.querySelector('#signup-form-title');
let signUpForm = document.querySelector('#sign-up-form');
let firstName = document.querySelector('#first-name-input');
let lastName = document.querySelector('#last-name-input');
let fNameMsg = document.querySelector('#first-name-msg');
let lNameMsg = document.querySelector('#last-name-msg');
let phonEmail = document.querySelector('#phone-email-input');
let emailRequirment = document.querySelector('#email-requirement');
let passwordInput = document.querySelector('#password-input');
let weakPwd = document.querySelector('#weak-pwd');
let passowrdCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let acctSuccess = document.querySelector('#success');
let createBtn = document.querySelector('#create-btn');
let main = document.querySelector('main');
let list = [];
let titleValue = document.querySelector('#note-title'); 
let textValue = document.querySelector('#text-area');
let saveButton = document.querySelector('#save-note-btn');
let cancelButton = document.querySelector('#cancel-note-btn');
let divDisplayNotes = document.querySelector('#display-notes');
let searchInput = document.querySelector('#search-input');


logInForm.addEventListener('submit', e =>{
    e.preventDefault();
    if (logInEmail.value === account.email && logInPassword.value === account.password || logInEmail.value === account.phoneNumber && logInPassword.value === account.password){
    header.className = 'hidden';
    main.className = 'block';
    } else if (logInEmail.value === account.email || logInEmail.value === account.phoneNumber && !logInPassword.value === account.password){
    logInPassword.value = '';
    pwErrMsg.className = 'pw-msg-err';
    emailErrMsg.className = 'hidden';
    resetPassword.className = 'reset-password';
    logInDiv.style.cssText = 'height: 350px';
    } else {
    logInEmail.value = '';
    emailErrMsg.className = 'email-phone-msg-err';
    pwErrMsg.className = 'hidden';
    resetPassword.className = 'hidden';
    logInDiv.style.cssText = 'height: 350px';
    }
});

resetPassword.addEventListener('click', e => {
    e.preventDefault();
    logInForm.className = 'hidden';
    resetPasswordTitle.className = 'reset-password-title';
    emailPhone.className = 'email-phone';
    resetPasswordForm.className = 'reset-pw-form';
});
function hideEmail(){
    emailPhone.className = 'hidden';
    resetPasswordTitle.className = 'hidden';
}
resetPasswordForm.addEventListener('submit', e => {
    e.preventDefault()
    if (resetPasswordInput.value === account.email || resetPasswordInput.value === account.phoneNumber){
    hideEmail()
    resetPasswordInput.value = '';
    resetPasswordLink.className = 'reset-link-sent';
    resetPasswordForm.className = 'hidden';
    logInDiv.style.cssText = 'height: 150px';
    tryAgain.className = 'hidden';
    tryAgainTitle.className = 'hidden';
    } else {
    tryAgainTitle.className = 'try-again-title';
    sendEmailPhone.textContent = 'Resend';
    hideEmail();
    tryAgain.className = 'try-again';
    resetPasswordInput.value = '';
    }
});
createNewAcct.addEventListener('click', e => {
    e.preventDefault();
    logInForm.className = 'hidden';
    signUpForm.className = 'block';
    logInDiv.style.cssText = 'height: 450px';
    signUpFormTitle.className = 'signup-form-title';
});
function hideName(){
    lNameMsg.className = 'hidden';
    fNameMsg.className = 'hidden';
}
signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    if(firstName.value.length >= 10){
        firstName.value = '';
        fNameMsg.className = 'first-name-msg';
        lNameMsg.className = 'hidden';
        weakPwd.className = 'hidden'; 
        emailRequirment.className = 'hidden';
    } else if(lastName.value.length >= 10){  
        lastName.value = '';
        lNameMsg.className = 'last-name-msg';
        fNameMsg.className = 'hidden';
        weakPwd.className = 'hidden'; 
        emailRequirment.className = 'hidden';
    } else if(phonEmail.value.toLowerCase() === account.email || phonEmail.value === account.phoneNumber){
        hideName()
        weakPwd.className = 'hidden';
        phonEmail.value = '';
        emailRequirment.className = 'email-requirement';
    }else if(!passwordInput.value.match(passowrdCriteria)){
        passwordInput.value = '';
        weakPwd.className = 'weak-pwd';
        emailRequirment.className = 'hidden';
        hideName()
        emailRequirment.className = 'hidden';
    } else {
        signUpFormTitle.className = 'hidden';
        signUpForm.className = 'hidden';
        acctSuccess.className = 'success';
        logInDiv.style.cssText = 'height: 150px';
    }
});

saveButton.addEventListener('click', e => {
    e.preventDefault();
let sideForm = document.createElement('form');
        sideForm.id = 'note-side-form';
        let sideTitle = document.createElement('input');
        sideTitle.id = 'note-side-title';
        sideTitle.placeholder = 'Title...';
        sideTitle.value = titleValue.value;
        let sideTextArea = document.createElement('textarea');
        sideTextArea.id = 'side-text-area';
        sideTextArea.placeholder = 'See a note...';
        if(textValue.value === '' || titleValue.value === ''){
        } else {
        sideTextArea.value = textValue.value;
        textValue.value = '';
        titleValue.value = '';
        let deleteButton = document.createElement('button');
        deleteButton.id = 'delete-note-btn';
        deleteButton.textContent = 'Delete';
        let editButton = document.createElement('button');
        editButton.id = 'edit-note-btn';
        editButton.textContent = 'Edit';
        let time = document.createElement('p');
        time.textContent = new Date().toLocaleString();
        time.className = 'date';
        sideForm.append(sideTitle, sideTextArea, time, editButton, deleteButton);
        var displayNote = document.createElement('div');
        displayNote.className = 'display-note';
        displayNote.append(sideForm);
        divDisplayNotes.append(displayNote);
        var stored = [...list, sideTitle.value, sideTextArea.value, time.textContent];

    deleteButton.addEventListener('click', e => {
        e.preventDefault();
        let confirmDeletion = confirm('Are you sure you want to delete this note?')
        if (confirmDeletion) {
            displayNote.remove();
        }
    });
    editButton.addEventListener('click', e => {
        e.preventDefault();
        if(titleValue.value === '' && textValue.value === ''){
            titleValue.value = sideTitle.value;
            textValue.value = sideTextArea.value;
            displayNote.remove();
        } else {
        }
    })
}
searchInput.addEventListener('keyup', e => {
    const searchTarget = e.target.value.toLowerCase();
    const filteredNotes = stored.filter(note => {
        return note.toLowerCase().includes(searchTarget);
    });
    console.log(filteredNotes);
    // if(filteredNotes === searchTarget){
    //     filteredNotes.className = 'hidden';
    // } else {
    // }
})

})
function emptyOutValues(){
    textValue.value = '';
    titleValue.value = '';
}
cancelButton.addEventListener('click' , e => {
    e.preventDefault();
    if (titleValue.value === '' && textValue.value === ''){
        emptyOutValues()
    } else {
    let confirmDeletion = confirm('Are you sure you want to descard this note?')
    if (confirmDeletion) {
        emptyOutValues()
    }
}
})
function logOut(){
    main.className = 'hidden';
    header.className = 'block';
    logInPassword.value = '';
}
document.querySelector('#log-out').addEventListener('click', e =>{
if (!titleValue.value == '' || !textValue.value == ''){
    let confirmLogOut = confirm('It seems like you have a note that had not been saved. Logging out might result in a loss of your note. Would you like to proceed?')
    if (confirmLogOut){
        logOut();
    }
} else {
    logOut();
    }
})
