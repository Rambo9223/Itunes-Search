import { fireEvent, getByTestId, queryByTestId, render,screen } from '@testing-library/react';
import App from './App';
import NewSearch from './Components/NewSearch';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

// test 1 App renders correctly 
function MockApp(){
  return (<>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </>)
}

test("renders correctly",() => {
  const app = render(<MockApp/>);
  expect(app).toMatchSnapshot();
});

// Test 2 Get test

test("testing to see if we can get backend data",() => {
  async function Get(){
  const response = await fetch('http://localhost:5000/api.json')
    if (!response.ok) {
    throw new Error('Data coud not be fetched!')
    } else {
    return response.json()
    }}
    const data = Get();
    expect(data).toBeDefined();

})

test("Test buttons for funtionality",()=>{

});