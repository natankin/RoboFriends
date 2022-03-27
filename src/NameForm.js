import React from "react";
import './NameForm.css';

const NameForm=({changeName,submit,addName,changeEmail,addEmail})=>{
      return (
        <div>
        <p>Add New Robo</p>
        <form onSubmit={submit}>
          <label>
            <input className='pa3 ba b--blue bg-lightest-blue' value={addName} type="text"  onChange={changeName} placeholder='RoboName'/>
            <input className='pa3 ba b--blue bg-lightest-blue' value={addEmail} type="text"  onChange={changeEmail} placeholder='RoboEmail'/>
          </label>
          <input className='pa3 ba b--blue bg-lightest-blue' type="submit" value="Submit" />
        </form>
        </div>
      );
}
  
export default NameForm;