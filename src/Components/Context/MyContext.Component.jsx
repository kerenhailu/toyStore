import React from "react";
export const ContextToCreate=React.createContext();
export const MyContext=(props)=>{
    return(<div>
<ContextToCreate.Provider value={"kerennnn"}>
    {props.children}
</ContextToCreate.Provider>
    </div>)
}