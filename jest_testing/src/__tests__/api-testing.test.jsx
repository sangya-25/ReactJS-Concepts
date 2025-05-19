import { screen, render, waitFor } from "@testing-library/react";
import ApiCallTest from "../components/api-testing";
import '@testing-library/jest-dom';


describe('API testing file',()=>{
    it('check list of users fetching',async ()=>{
        global.fetch=jest.fn(()=> Promise.resolve({
            json:()=> 
            Promise.resolve([
                {
                    id: 1, name: 'Sangya ojha',
                },{
                    id: 2, name:'john doe',
                }
            ])
        }));
        render(<ApiCallTest/>)
        expect(screen.getByText('loading data...')).toBeInTheDocument();

        await waitFor(()=>{
            expect(screen.getByText('Sangya ojha')).toBeInTheDocument();
            expect(screen.getByText('john doe')).toBeInTheDocument();
        });
        expect(screen.queryByText('loading data...')).not.toBeInTheDocument();
    });
});