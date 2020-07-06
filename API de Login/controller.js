const log = "root"; //Login padrão;
const pass = "toor"; //Senha padrão;

module.exports = {

    init(req, res){
        res.sendFile(__dirname + '/view/index.html');
    },
    login(req, res){
        let login = req.body.login;
        let password = req.body.password;

        if(login == log && password == pass){
            res.send({authent: true});
            console.log("Dados conferem");
        }else if(login == "" || password == ""){
            res.send({authent: "void"});
            console.log("Todos os campos devem ser preenchidos!");
        }else{
            res.send({authent: false});
            console.log("Dados informados não conferem!");
        }
    }
}