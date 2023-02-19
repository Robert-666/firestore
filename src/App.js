import { async } from "@firebase/util";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore"
import { useEffect, useState } from "react";
import './App.css';
import { db } from "./firebase-config";

function App() {

  const usersCollection = collection(db,"users")
  const [users,setUsers] = useState([])
  const [age,setAge] = useState()
  const [name,setName] = useState("")



  console.log(users)

  useEffect(()=> {
    const getUsers = async () => {
      const usersData = await getDocs(usersCollection)
      setUsers(usersData.docs.map((doc)=> ({...doc.data(), id : doc.id}) ))
    }

    getUsers()
  },[])

  const AddUser = async () => { await addDoc(usersCollection,{name: name,age: age})}

  const updateUser = async (id,age) => {
      const person = doc(db,"users",id);
      const ageField = {age:age + 1};
      await updateDoc(person,ageField)
   }

  const deleteUser = async (id) => {
      const person = doc(db,"users",id)
      await deleteDoc(person)
  } 


  return (
    <div className="App">
      <input placeholder="name" onChange={(evt)=> setName(evt.target.value)}/>
      <input type="number" placeholder="age" onChange={(evt)=> setAge(evt.target.value)}/>
      <button onClick={AddUser}>Create User</button>
      {users.map((user)=> {
        return (
        <div key={user.id}>
            <h1>Name : {user.name}</h1>
            <h1>Age : {user.age}</h1>
            <button onClick={() => {updateUser(user.id,user.age)}}>Increase age</button>
            <button onClick={()=> deleteUser(user.id)}>Delete User</button>
        </div>)
      })}
    </div>
  );
}

export default App;
