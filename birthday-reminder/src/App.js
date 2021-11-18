import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  let people_length = people.length
  return <main>
    <section className="container">
      <h3> {people_length} Birthday Reminder</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>
        Clear All
      </button>

    </section>
  </main>
}

export default App;
