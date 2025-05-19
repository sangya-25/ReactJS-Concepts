import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react"
import HelloWorld from "../components/hello-world"

// whether the same text 'Hello world'  is present in the <HelloWorld/> component or not!
//similarly it will check for that the p tag has the same id or not i.e "name"

test("render hello world text", ()=>{
    const {getByText}= render(<HelloWorld/>)
    const checkHelloWorldText=getByText('Hello world');

    expect (checkHelloWorldText).toBeInTheDocument()
});

test ("check name by test id", ()=>{
    const {getByTestId} = render(<HelloWorld/>);
    const getElement = getByTestId("name");
    expect (getElement.textContent).toBe("Sangya Ojha");
});


