import { useState } from 'react';

import { Main_Animals } from './data.js';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainAnimals from './components/MainAnimals.jsx';
import { EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selected, setSelected] = useState();
  function handleOnclick(selectedButton) {
    setSelected(selectedButton);
    // console.log(selected);
  }
  let tabContent = <p>Please select a Button</p>;
  const examples = EXAMPLES[selected];
  console.log(examples);

  if(selected) {
    tabContent = (
    <div id="tab-content">
        <h3>{ EXAMPLES[selected].title}</h3>
        <p>{ EXAMPLES[selected].description}</p>
    </div>
    );
  }
  
  return (
    <div>
      <Header/>
      <main>
        <section id="Main_Animals">
          <h2>Main Animals</h2>
          <ul>
            {/* {Main_Animals.map((animals) => (
                <MainAnimals key={ animals.title } { ...animals }/> //이렇게 바꿀 수 있음 밑에 코드를 
            ))} */}
            <MainAnimals {...Main_Animals[0]}/>
            <MainAnimals {...Main_Animals[1]}/>
            <MainAnimals {...Main_Animals[2]}/>
            
          </ul>

        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
              <TabButton isSelected = { selected === 'Cat' } onSelect={() => handleOnclick("Cat")}>Cat</TabButton>
              <TabButton isSelected = { selected === 'Dog' } onSelect={() => handleOnclick("Dog")}>Dog</TabButton>
              <TabButton isSelected = { selected === 'Parrot' } onSelect={() => handleOnclick("Parrot")}>Parrot</TabButton>
          </menu>
          { tabContent }

        </section>
      </main>

    </div>
  );
}

export default App;
