import React from "react";


const SlotM=(props)=>
{
    let x=props.x;
    let y=props.y;
    let z=props.z;

    if((x==y)&&(y==z))
    {
        return(
            <>
<div className="slotinner">
            <h1>
                {x}{y}{z}
            </h1>
            <h1>
                THIS IS MATCHING!
            </h1>
            <hr/>

</div>

            </>
        )
    }
    else
    {
        return(
            <>
            <div className="slotinner">
            <h1>
                {x}{y}{z}
            </h1>
            <h1>
                THIS IS NOT MATCHING!
            </h1>
            <hr/>

             </div>

            </>
        )
    }

}



const App=()=>{
return <>
<h1 className="heading">⭐WELCOME TO <span style={{fontWeight:'bold '}}>SLOT MACHINE GAME⭐</span></h1>


<div className="slotmachine ">
<SlotM x="😃" y="😃" z="😃" />
<hr/>
<SlotM x="😂" y="😃" z="😃"/>
<hr/>
<SlotM x="🍟" y="🍔" z="🍟"/>
<hr/>
<SlotM x="🍉" y="🍉" z="🍉"/>

</div>
</>;

};

export default App;
