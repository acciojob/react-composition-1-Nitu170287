import React, { useState } from "react";


const Tabs = ({tabs})=>{
const[tabIndex,setTabIndex] = useState(0)

    return(
        <div>
            <ul>
          
                {  
                    tabs.map((tab,index)=>
                    <li onClick={()=>setTabIndex(index)} key={index}>{tab.title}</li>
                )}
            </ul>
            <p>{tabs[tabIndex].content}</p>
        </div>
    )
}

export default Tabs