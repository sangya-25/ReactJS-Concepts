import { Component, lazy } from "react";
export const loginFormElements=[{
    name:'name',
    id:'name',
    placeholder: 'Enter your Name',
    label:'name',
    componentType: 'input',
    type: 'name'
},{
    name:'email',
    id:'email',
    placeholder: 'Enter your Email',
    label:'Email',
    componentType: 'input',
    type: 'email'
},{
    name:'password',
    id:'password',
    placeholder: 'Enter your password',
    label:'Password',
    componentType: 'input',
    type: 'password'
},{
    name:'branch',
    id:'branch',
    label:'branch',
    componentType:'select',
    options:[
        {value:'select',label:'Select your branch'},
        {value:'btech',label:'Btech'},
        {value:'bba',label:'BBA'},
        {value:'mtech',label:'Mtech'}
    ]
},{
    name:'text',
    id:'text',
    label:'Text',
    type:'textarea',
    componentType: 'textarea',
    rows:'5',
    cols:'10',
    placeholder:"enter your doubt",
}
];
export const registerFormElements=[{
    name:'name',
    id:'name',
    placeholder: 'Enter your Name',
    label:'name',
    componentType: 'input',
    type: 'name'
},{
    name:'age',
    id:'age',
    placeholder: 'Enter your Age',
    label:'age',
    componentType: 'input',
    type: 'age'
},{
    name:'number',
    id:'number',
    placeholder: 'Enter your Number',
    label:'number',
    componentType: 'input',
    type: 'number'
},{
    name:'email',
    id:'email',
    placeholder: 'Enter your Email',
    label:'Email',
    componentType: 'input',
    type: 'email'
},{
    name:'password',
    id:'password',
    placeholder: 'Enter your password',
    label:'Password',
    componentType: 'input',
    type: 'password'
}
]