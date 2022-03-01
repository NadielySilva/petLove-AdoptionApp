import React, {Component} from 'react'

import './App.css'

//Importing Assets
import myDogButton from "./Assets/dog.png"
import myCatButton from "./Assets/cat.png"

import myGarfield from "./Assets/cat-garfield.jpg"
import myKittySoftpaws from "./Assets/cat-kitty-softpaws.jpg"
import myLola from "./Assets/cat-lola.jpg"
import myOliver from "./Assets/cat-oliver.jpg"
import myTeddy from "./Assets/cat-teddy.jpg"
import myNinaStar from "./Assets/dog-nina-star.jpg"
import myPipoca from "./Assets/dog-pipoca.jpg"
import mySpike from "./Assets/dog-spike.jpg"
import myTobie from "./Assets/dog-tobie.jpg"
import myTulio from "./Assets/dog-tulio.jpg"

export default class MyPet extends Component{


  // {
  //   greet:
  //   ['Hi, my name is ',
  //   'Hello, I am ',
  //   'Hey there, my name is ']
  // },

state = {
  dogs:[{
    name:'Tulio',
    breed:'dogo',
    age:'7 years',
    pic: myTulio
  },
  {
    name:'Pipoca',
    breed:'dogo',
    age:'2 years',
    pic: myPipoca
  },
  {
    name:'Spike',
    breed:'dogo',
    age:'3 years',
    pic: mySpike
  },
  {
    name:'Tobie',
    breed:'dogo',
    age:'45 days',
    pic: myTobie
  },
  {
    name:'Nina e Estrela',
    breed:'doggies',
    age:'50 days',
    pic: myNinaStar
  }],
  cats:[
    {
    name:'Oliver',
    breed:'chartreux',
    age:'5 years',
    pic: myOliver
  },
  {
    name:'Lola',
    breed:'burmilla',
    age:'50 days',
    pic: myLola
  },
  {
    name:'Garfield',
    breed:'bobtail',
    age:'60 days',
    pic: myGarfield
  },
  {
    name:'Teddy',
    breed:'wirehair',
    age:'30 days',
    pic: myTeddy
  },
  {
    name:'Kitty patasleves',
    breed:'bombaim',
    age:'30 days',
    pic: myKittySoftpaws
  }],
  list : []
}

dogList = () =>{
  this.setState({list : this.state.dogs.map((item) =>(
    <div>
      <figure><image>{}</image></figure>
      <big><p>{item.name}</p></big>
      <p>Hi there! I am a {item.age} {item.breed} </p>
    </div>
  ))})
}


catList = () =>{
  this.setState({list : this.state.cats.map((item) =>(
    <div>
      <figure><img>{}</img></figure>
      <big><p>{item.name}</p></big>
      <p>Hi there! I am a {item.age} {item.breed} </p>
    </div>
  ))})
}

clear = () =>{
  this.setState({
    list: ([])
  })
}

render(){

  return(
    <div className='container'>
      <h2>Who's gonna be your new friend?</h2>
      <div className='btn'>
        <button type="button" onClick={this.dogList}><img src={myDogButton}/></button>
        <button type="button" onClick={this.catList}><img src={myCatButton} /></button>
        <button onClick={this.clear}><big><strong>CLEAR</strong></big></button>
      </div>
      <h2>{this.state.list}</h2>
    </div>
  )}
}