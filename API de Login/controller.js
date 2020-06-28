const log = "root"; //Login padrão;
const pass = "toor"; //Senha padrão;

module.exports = {

    init(req, res){
        res.sendFile(__dirname + '/view/index.html');
    },
    login(req, res){
        let authent = false;
        let login = req.body.login;
        let password = req.body.password;

        if(login == log && password == pass){
            res.send("Usuário e senha conferem!");
            console.log("Usuário e senha conferem!");
            authent = true;
        }else if(login == "" || password == ""){
            console.log("Todos os campos devem ser preenchidos!");
            res.redirect('/init');
        }else{
            console.log("Dados informados não conferem!");
            res.redirect('/init');
        }

        return authent;
    }
}