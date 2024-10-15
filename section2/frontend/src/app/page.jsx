import MyButton from '@/components/Button';
import TextInput from '@/components/Input';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Hello react</h1>
      <button style={{ backgrounColor: 'black', color: 'white', padding: 10 }}>Home Button</button>

      <button className="submit-btn">home button</button>
      <button className="btn">other btn</button>

      <img src="/sicssors.avif" alt="" />
      <MyButton>my custom button</MyButton>
      <MyButton >home</MyButton>
      <MyButton>login</MyButton>
      <MyButton>about</MyButton>
      <MyButton>submit</MyButton>

      <TextInput type="password" lable="enter a password" id="password" />
      <TextInput type="text" lable="enter name" id="name" />
      <TextInput type="email" lable="enter address" id="email" />
      


    </div>
  )
}

export default Home;