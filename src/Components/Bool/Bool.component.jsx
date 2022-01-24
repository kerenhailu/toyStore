import React, { useContext } from "react";
import { ContextToCreate } from "../Context/MyContext.Component";

export const Bool = () => {
  const MyContext = useContext(ContextToCreate);
  return (
    <div>
      <h1>Bool</h1>
      <h3>context : {MyContext}</h3>
    </div>
  );
};
export default Bool;
