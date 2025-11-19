//Essa conta é para chamar a modal no bootstrap, para fechar depois de criar a conta.
const myModal = new bootstrap.Modal("#register-Modal")

let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGA NO SISTEMA 
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value; //o value é para pegar o valor do input
    const password = document.getElementById("password-input").value; //o value é para pegar o valor do input
    const checkSession = document.getElementById("session-check").checked; // o checked é para verificar se estar marcado

    const account = getAccount(email);

    if(!account){
        alert("Opps! Verificar o usuário ou a senha.")
        return;
    }

    if(account){
        if(account.password !== password){
            alert("Opps! Verificar o usuário ou a senha.")
            return;
        }

        saveSession(email, checkSession);

        window.location.href = "home.html";
    }

});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 6){
        alert("Preenchar o campo com um e-mail válido ");
        return;
    }

    if(password.length < 4){
        alert("preencha a senha com no mínimo 4 digitos.")
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();//invoca a modal

    alert("Conta criada com sucesso!")
});

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged){
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data))
};

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";
};