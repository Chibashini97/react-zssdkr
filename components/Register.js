import React from 'react';
import './styles.css';

function Register (){
  return(
    <div>
      <form>
      <div className="first"><div className = "heading">Level ID/ EAN</div><br/>
        <input type="radio" name="group1" value="Level" checked />  Level ID: <input className = "second" type="text" / >
        <br/>
        <input type="radio" name="group1" value="EAN" /> EAN
      </div>
      <div className="first"><div className = "heading">Pricing Loaded Option</div><br/>
        <input type="radio" name="group2" value="price" checked />  Pricing Loaded only <br/>
        <input type="radio" name="group2" value="price1" /> Pricing Loaded with
      </div>
      <div className="first"><div className = "heading">Hierarchy Comparison</div><br/>
        <input type="radio" name="group3" value="price2" checked />  Compare Down<br/>
        <input type="radio" name="group3" value="price3" /> Compare across
      </div>
     <div className="first"><div className = "heading">Excluded Status</div><br/>
        <input type="checkbox" name="check" value="xxx"/>Cash<br/>
        <input type="checkbox" name="check" value="yyy"/> Delete
      </div>
      </form>
    </div>
  )
}

export default Register








