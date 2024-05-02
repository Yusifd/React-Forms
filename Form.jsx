import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import Card from './Card'
import './Form.css'
import { useState } from 'react'
export default function Form() {
    let [name,SetName]=useState('')
    let [surname,SetSurname]=useState('')
    let [phone,SetPhone]=useState('')
    let [email,SetEmail]=useState('')
    let [bio,SetBio]=useState('')
    function handleSubmit (event){
        event.preventDefault()
        SetName(event.target.userName.value)
        SetSurname(event.target.userSurname.value)
        SetPhone(event.target.userPhone.value)
        SetEmail(event.target.userEmail.value)
        SetBio(event.target.userBio.value)
        

    }
    return (
      <> 
      <form className="form" onSubmit={handleSubmit}>
      <span>Ad:</span>
        <label>            
            <input type='text' name='userName' placeholder='Adiniz daxil edin'/>
        </label>
        <span>Soyad:</span>
        <label>
            <input type='text' name='userSurname' placeholder='Soyadiniz daxil edin'/>
        </label> 
        <span>Telefon nomresi:</span>   
      <PhoneInput country={'az'} 
        inputProps={{
            name:'userPhone',
            required:true,
            autoFocus:true
        }}

      />   
      <span>Email:</span>
      <label>
      <input type='email' name='userEmail'/>
      </label>
      <span>Serh:</span>
      <label>
			<input type='textarea' name='userBio' rows="3" cols="30"/>
		</label><br/>
      <label>
        <button type='submit'>Submit</button>
      </label>
      </form>
        <Card name={name} surname={surname} phone={phone} email={email} bio={bio}/> 
      </>
    )
  }