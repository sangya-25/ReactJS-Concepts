import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react"
import Counter from '../components/counter';


test ("checking counter increment function",()=>{
    const {getByText}= render(<Counter/>)
    const getCounterText = getByText('Count: 0');
    const getButtonElementbyText = getByText('Click')

    fireEvent.click(getButtonElementbyText);

    expect(getCounterText.textContent).toBe('Count: 1');
    
    fireEvent.click(getButtonElementbyText);
    
    expect(getCounterText.textContent).toBe('Count: 2');
});