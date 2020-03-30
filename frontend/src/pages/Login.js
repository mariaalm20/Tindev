import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import './login.css'
import api from '../services/api'

  function Login({history}) {
    const [username, setUsername] = useState('')
    async function handelSubmit(e){
      e.preventDefault()
     const response = await api.post('/devs', {
         username,
     })
const {_id} = response.data
      history.push(`/dev/${_id}`)
    }

    return(
    <div className =  "login-container">  
    <form onSubmit= {handelSubmit}>
    <img src = { logo } alt = "Tindev" />
    <input 
    placeholder =  "Digite seu usuario no github"
    value = {username}
    onChange = {e => setUsername(e.target.value)}
    />
    <button type = "submit"> Enviar</button>
    </form>
    </div> )
}

export default Login