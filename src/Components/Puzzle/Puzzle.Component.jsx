import React from "react";
import { ContextToCreate } from "../Context/MyContext.Component";
class Puzzle extends React.Component{
    render(){
        return(<div>
            <h1>Puzzle</h1>
            <ContextToCreate.Provider value="Child">
        
            </ContextToCreate.Provider>
        </div>)
    }
}
export default Puzzle;
// 