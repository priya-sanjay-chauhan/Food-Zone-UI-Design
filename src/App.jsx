import { useState } from 'react';
import './App.css'
import data from './Components/data.json'
import SearchResult from './Components/SearchResult';
import Button from './Components/Button';


function App() {

  const [filteredData, setFilteredData]=useState(data)
  const [selectedBtn,setSelectedBtn]=useState("all")

  const filterFood=(type)=>{
    if(type==="all"){
      setFilteredData(data)
      selectedBtn("all")
    }
      const filter=data?.filter((food)=>
        food.type.toLowerCase().includes(type.toLowerCase())
    )
      setFilteredData(filter)
    selectedBtn(type)
  }

  const searchFood=(e)=>{
      const searchVal=e.target.value;
      // console.log(searchVal);

      if(searchVal===""){
        setFilteredData(null)
      }

      const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchVal.toLowerCase()))
      setFilteredData(filter)
  }



  return (
    <div >
     
      <nav className='h-40 flex flex-col justify-center bg-neutral-800 '>
            <div className='py-2 flex flex-col justify-between px-28'>
                <div>
                    <img src="./images/logo.svg" alt="logo" />
                </div>

                <div>
                  
                  <input onChange={searchFood} type="text" placeholder='Search food...' className='border border-red-600 rounded-sm bg-neutral-800 w-56 text-white' />
                   
                </div>
            </div>
            <div className='flex justify-center gap-6'>
                <Button onClick={()=>filterFood("all")}>All</Button>
                <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
                <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
                <Button onClick={()=>filterFood("dinner")}>Dinner</Button>
            </div>
        </nav>
      <div className="bg-[url('/images/bg.png')] bg-no-repeat bg-cover h-[40rem] lg:h-[calc(100vh-10rem)]  " >

        
        <SearchResult data={filteredData}/>
      </div>
    </div>
  )
}

export default App
