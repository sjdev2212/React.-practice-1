import React, { useState } from 'react';
import { List } from './List';
import data from './data'
import './App.css';

function App() {
  const [people, setPeople] = useState(data)
  return (
<main className='main'>
  <section className="container">
  <h3 className='title'>{people.length} birthdays today</h3>
<List people={people} />
<button className='btn' onClick={() => setPeople([])}>ClearAll</button>
</section>
</main>
  );
}

export default App;
