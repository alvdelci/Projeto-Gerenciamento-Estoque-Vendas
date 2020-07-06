import React from 'react';
import './login.css';
import axios from 'axios';
import {useState} from 'react';

function Login(){
    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");
  
    async function validar(){
      await axios.post(`http://localhost:3001/login`, {
        login: login,
        password: password
      }).then((body) => {
        if(body.data.authent === true){
          alert("Adicionar a parte de redirecionamento!");
        }else if(body.data.authent === "void"){
          alert("Todos os campos devem ser preenchidos!");
        }else{
          alert("Credenciais incorretas!");
        }
        setLogin(body.data.login);
        setPassword(body.data.password);
      }).catch((err) => {
        console.log("Erro aqui: " + err);
      });
    }

    
    return(
    <div className="box">
        <h1>Login</h1>
        <div className="login">
            <label>Login</label><br/>
            <input name="login" value={login} onChange={(e) => {setLogin(e.target.value)}}/><br/>
            <label>Senha</label><br/>
            <input name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password"/><br/>
            <input id="submit" onClick={validar} type="submit" value="Entrar"/><br/>
        </div>    
    </div>
    );
}

export default Login;