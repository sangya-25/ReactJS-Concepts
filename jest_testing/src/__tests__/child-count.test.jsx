import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react"
import Child from '../components/child';

test('get child count value',()=>{
    const {getByTestId}=render(<Child count={100}/>);
    const getCountValue=getByTestId('child-count-value');

    expect(getCountValue.textContent).toBe('100');
});

test('get the text value on toggling',()=>{
    const {getByTestId}= render(<Child count={100}/>);
    const getText= getByTestId('toggle-text');
    const getButtonText = getByTestId('toggle-button');
    expect(getText.textContent).toBe('false')
    fireEvent.click(getButtonText);
    expect(getText.textContent).toBe('true')
})