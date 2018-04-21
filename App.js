import React, { Component } from "react";
import buildingIcon from "./university-building.png";
import background from "./classroom.jpg";
import "./App.css";
import Varsity from "./components/varsity"

class Institutions extends Component {
  constructor(){

    super();
    this.state ={
      checked: false,
      varsity: "University of Cape Town",
      amount: 3423000,
      number: 1780,
      contribution: 0
    };
  
  
}

  handleChecked = () =>{
    this.setState({
      checked: !this.state.checked
    });
  }


  handleSelection = (s) =>{
    this.setState({
      varsity: s
    });
  }
  render() {
    var varsities = [
    {name:"University of Cape Town", number: 1780, amount: 3423000},
    {name:"University of Pretoria", number: 2100, amount: 2376000},
    {name:"University of Witswatersrand", number: 2509, amount: 4907000},
    {name:"Stellenbosch University", number: 1890, amount: 1678000},
    {name:"University of the Free State", number: 3032, amount: 2123000},
    {name:"University of Fort Hare", number: 1240, amount: 176000},
    {name:"University of Limpopo", number: 4231, amount: 2132700}
      ];
           var msg;
           var varsitySelection;

           if(this.state.checked){
              msg = 'checked';
           }
           else{
            msg = 'unchecked';
           }
    return(
            <div>
             <div className="institutions-panel">
               <img src={buildingIcon} className="icon"/>
                  <select onChange={event => this.setState({ varsity: event.target.value,

                   amount: varsities[ varsities.findIndex (x => x.name == event.target.value) ].amount,
                   number: varsities[ varsities.findIndex (x => x.name == event.target.value) ].number

                 })} value={this.state.varsity} className="varsityList">
                  {
                    varsities.map((varsity)=>{
                    return(<Varsity>{varsity.name}</Varsity>)
                    })
                  }
                </select>
             </div>
            <div className="info-container">
              <div className="info-panel">
                <div className='number_of_student info'>{this.state.number}</div> <div className='funding-text info'> students are currently require funding worth</div><div className='number_of_student info'>R{this.state.amount}</div>
              </div>
            </div>

            <div className="donation-panel">
              <div className='background-blur'></div>
              <img src={background} className="background-image"/>
              <br/><br/>
              <div><b>How much would you like to contribute?</b>
              <h1>R{Math.round(this.state.contribution)}</h1>
              <i>You'll be assisting <u>{Math.floor(this.state.contribution/(this.state.amount/this.state.number))}</u> students!</i></div>
            <div className="money-toggles">
              <div className="money-button danger" onClick={event => this.setState({ contribution: this.state.contribution*0.7})}>-</div>
              <div className="money-button">&nbsp;</div>
              <div className="money-button">&nbsp;</div>
              <div className="money-button primary" onClick={event => this.setState({ contribution: this.state.contribution*1.3 + 1})}>+</div>
            </div></div>
            <div className="bottom">
              
            </div>
          </div>
          );
  }
}


export default Institutions;
