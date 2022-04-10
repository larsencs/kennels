import React, {useState} from "react";
import "./CheckBox.css"

export const MakeCheckBox = () =>{

    const [checked, updateChecked] = useState(false)

    const CheckTheBox = () =>{
        // checked ? updateChecked(false) : updateChecked(true)
        updateChecked(!checked) // shortest possible ternary statement ever lol
        // updateChecked(checked ? false: true)
    }


    return (

        <div className="checkbox">
            <label htmlFor="checkbox--1">Option One</label>
            <input type="checkbox" name="checkbox--1" id="box1" value="One" checked={checked} onChange={CheckTheBox}/><br/>
            <label htmlFor="checkbox--2">Option Two</label>
            <input type="checkbox" name="checkbox--2" id="box2" value="Two"/><br/>
            <label htmlFor="checkbox--3">Option Three</label>
            <input type="checkbox" name="checkbox--3" id="box3" value="Three"/><br/>
            <label htmlFor="checkbox--4">Option Four</label>
            <input type="checkbox" name="checkbox--4" id="box4" value="Four"/><br/>
            <label htmlFor="checkbox--5">Option Five</label>
            <input type="checkbox" name="checkbox--5" id="box5" value="Five"/><br/>
        </div>


    )
}


