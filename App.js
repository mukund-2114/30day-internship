import { useState } from 'react';
import './App.css';

function App() {

  const [newPersonName, setNewPersonName] = useState('');
  const [newPersonAge, setNewPersonAge] = useState('');
  const [people, setPeople] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null);

  const handleName = (event)=>{
    // console.log(event.target.value);
    setNewPersonName(event.target.value);
    // newPersonName = event.target.value;
  }
  
  const handleAge = (event)=>{
    // console.log(event.target.value);
    setNewPersonAge(event.target.value);
  }

  const handleCreatePerson  =()=>{
    // console.log("name",newPersonName);
    // console.log("age",newPersonAge);
    const newPerson = {name:newPersonName,age:newPersonAge};
    // console.log(newPerson);
    setPeople([...people,newPerson]);
    setNewPersonName('');
    setNewPersonAge('');
  }

    const handleDelete = (index)=>{
      console.log("delete",index);
      const deleted = people.filter((person,i)=>i!==index);
      setPeople(deleted);
    }

    const handleEdit =(index)=>{
      console.log("edit",index);
      const selectedPerson = people[index];
      console.log(selectedPerson);
      setNewPersonName(selectedPerson.name);
      setNewPersonAge(selectedPerson.age);
      setselectedIndex(index)
    }



    const handleUpdatePerson = ()=>{
        console.log(selectedIndex);
        const updatedPerson = [...people];
        // console.log(updatedPerson);
        updatedPerson[selectedIndex].name = newPersonName;
        updatedPerson[selectedIndex].age = newPersonAge;
        // console.log(updatedPerson);
        setPeople(updatedPerson)

    }

  // console.log("peoples",people);
  
 
  return (
    <div className="App">
      <h1>Crud Operations</h1>
      <h3>Create Person</h3>
      <input type="text" placeholder='Enter person name' onChange={handleName} value={newPersonName}/>

      <input type="number" placeholder='Enter person age' onChange={handleAge} value={newPersonAge} />

      {selectedIndex == null?
      (<button onClick={handleCreatePerson}>Create</button>):
      ( <button onClick={handleUpdatePerson}>Update</button>)}

      
     

      <h3>Peoples</h3>
        {people.map((person,index)=>(
          <ul>
            <>
            <li key={index}>
              <span>Index: {index} &nbsp;</span>
              <span>Name: {person.name}&nbsp;&nbsp;&nbsp;</span>
                <span>Age: {person.age}</span><br/>
                <button onClick={()=>handleEdit(index)}>Edit</button>
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </li>
            </>
           </ul>
        ))}

      {/* whenever you use map function pass a index value */}
    </div>
    
  );
}

export default App;
