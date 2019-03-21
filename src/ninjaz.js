import React from 'react';
import './Ninjas.css'



const Ninjaz = ({ninjaz, deleteNinja}) => {
        // console.log(ninjaz)
        //  const {ninjaz} = props;
                
        // const ninjazList =ninjaz.map(ninja => {
        //     if(ninja.age > 20) {
        //         return(
        //             <div className="ninjaz" key={ninja.id}>
        //             <div>name: {ninja.name}</div>
        //             <div>age: {ninja.age}</div>
        //             <div>belt: {ninja.belt}</div>
                    
        //             </div>
        //         )
        //     }else {
        //     return (
        //       null
        //     )
        // }
        // })\
        const ninjazList = ninjaz.map(ninja => {
          return ninja.age > 20 ? ( <div className="ninjaz" key={ninja.id}>
                <div>name: {ninja.name}</div>
                  <div>age: {ninja.age}</div>
                   <div>belt: {ninja.belt}</div>
                   <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                        
                  </div>) : (null) 
        })
        return ( 
            <div className="ninja-list">
            {  ninjazList  }
            </div>
            
         );
    }


 
export default Ninjaz;