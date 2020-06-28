const log = "root";
const pass = "toor";

module.exports = {

    login(req, res){
        let authent = false;
        let login = req.body.login;
        let password = req.body.password;

        if(login == log && password == pass){
            res.send("Usuário e senha conferem!");
            authent = true;
        }else if(login == "" || password == ""){
            res.redirect();
            res.send("Todos os campos devem ser preenchidos!");
        }else{
            res.send("Dados informados não conferem!");
        }

        return authent;
    }
}