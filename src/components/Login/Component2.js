import React, { useMemo } from "react";

function Component2(props) {
    
    const containier = useMemo(() => {
        console.log('component 2', props);
        return  <h1>Component 2 {props.password}</h1>;
    }, [props.password]);

    
      return (
        containier
      )
  }

export default React.memo(Component2);  