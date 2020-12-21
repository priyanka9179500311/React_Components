//import area
//import something from 'somelibrary';

import React from 'react';
import ReactDOM from 'react-dom';

//create some changes in virtual DOM (memory)
//1.Class component can contain other Class component
class Mahima extends React.Component{
    //1.property

    //2.constructor

    //3.method
    render(){
        return <h3>Hello Mahima<Jiya/></h3>
    }
}
//2.Functional component can contain other Functional component
let FuncA = ()=><span>Hello FuncA<FuncB/></span>;
let FuncB = ()=><span>Hello FuncB</span>;
//3.Functional Component can contain Class Component
class Bhanu extends React.Component{
    //1.property

    //2.constructor

    //3.method
    render(){
        return <span>Hello Bhanu</span>
    }
}
//4.Class component can contain other Functional component
let Jiya = ()=> <span>Hello Jiya<FuncA/><Bhanu/></span>
//class component must have a render Method 
class Priyanka extends React.Component{//inheritance
    //1. property

    //2. constructor

    //3. method
    //1.every class component must have render method
    render(){
        return <span>Hello Priyanka<Mahima/></span>
    }
}

//object.method();
ReactDOM.render(<Priyanka/>,document.getElementById('root'));//actual argument
