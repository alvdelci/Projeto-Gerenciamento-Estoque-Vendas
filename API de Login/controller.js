const log = "root";
const pass = "toor";

module.exports = {

    home(req, res){
        res.send("Hello World");
    },

    login(req, res){
        let login = req.params.login;
        let password = req.params.password;

        if(login == log && password == pass){
            res.send("Usuário e senha conferem!");
        }else if(login == "" || password == ""){
            res.redirect('/login');
            res.send("Todos os campos devem ser preenchidos!");
        }else{
            res.send("Dados informados não conferem!");
        }
    }
}