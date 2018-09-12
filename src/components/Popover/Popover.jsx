import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { addTime } from "../../index"

import { PopoverExampleMulti } from "../App/App.jsx"
import style from "./Popover.css"

export class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    let mins00 = []
    let mins30 = []
    let min00 = "00"
    let min30 = "30"
    for (let i = 0; i != 6;i++){
      mins00.push(min00)      
      mins30.push(min30) 
      min00 = ("00" + (Number.parseInt(min00) + 5)).slice(-2)
      min30 = ("00" + (Number.parseInt(min30) + 5)).slice(-2)
    }
    this.state = ({
      popoverOpen: false,
      clickTime: "",
      mins00: mins00,
      mins30: mins30,
      dopTime: [],
      idClick: ''
    })
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  enterTime = (e) => {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
      clickTime: ((e.target.innerText).split(':'))[0],
      dopTime: ((e.target.innerText).split(':'))[1],
      idClick: e.target.innerText
    });
    addTime([e.target.innerText, e.target.innerText])
  }

  enterDopTime(e){
    var times = this.state.clickTime + ":" + e.target.innerText
    addTime([times, this.state.idClick])

    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <div className="mr-1" color="secondary" id={'Popover-' + this.props.data[1]} onClick={(e)=>this.enterTime(e)}>
            {this.props.data[0][0] +":"+this.props.data[0][1]}
        </div>
        <Popover data-togglet="popover" placement="top" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.data[1]} toggle={this.toggle}>
          <PopoverHeader>Точное время</PopoverHeader>
          <PopoverBody>
            {(this.state.dopTime == "00") && this.state.mins00.map(e=>
              <div className="enterDopTimes" onClick = {(e) => this.enterDopTime(e)}>
                {e}
              </div>
            )
            ||
            this.state.mins30.map(e=>
              <div className="enterDopTimes" onClick = {(e) => this.enterDopTime(e)}>
                {e}
              </div>
            )
            }
          </PopoverBody>
        </Popover>
      </span>
    );
  }
}