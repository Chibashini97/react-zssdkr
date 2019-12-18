import React,{Component} from 'react';
import './styles.css';

class Register extends Component{

  constructor(){
    super();
    this.state ={
      selectedOption:'EAN'
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
  this.setState({
    selectedOption: e.target.value
  });
  console.log(this.state.selectedOption);
  }

  render(){
  return(
    <div>
      <div className = "heading">Customer Pricing Map</div><br/>
      <form>
        <div className="first"><div className = "heading">Level ID/ EAN</div><br/>
          <input type="radio" name="group1" value="Level" checked={this.state.selectedOption === 'EAN'} onChange={this.handleOptionChange} />  Level ID: <input className = "second" type="text" / >
          <br/>
          <input type="radio" name="group1" value="EAN" checked={this.state.selectedOption === 'Level'} onChange={this.handleOptionChange} /> EAN
        </div>
        <div className="first"><div className = "heading">Pricing Loaded Option</div><br/>
          <input type="radio" name="group2" value="price"  />  Pricing Loaded only <br/>
          <input type="radio" name="group2" value="price1" /> Pricing Loaded with
        </div>
        <div className="first"><div className = "heading">Hierarchy Comparison</div><br/>
          <input type="radio" name="group3" value="price2"  />  Compare Down<br/>
          <input type="radio" name="group3" value="price3" /> Compare across
        </div>
        <div className="first"><div className = "heading">Excluded Status</div><br/>
          <input type="checkbox" name="check" value="xxx"/>Cash<br/>
          <input type="checkbox" name="check" value="yyy"/> Delete
        </div>
        <button className="buttonAlign">Search </button>
      </form>
    </div>
  )
}
}

export default Register








