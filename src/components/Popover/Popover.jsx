import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { addTime } from "../../store/actionCreators"

import { PopoverExampleMulti } from "../App/App.jsx"
import style from "./Popover.css"
import { timeList } from "../../store/reducer"
import { store } from "../../store/actionCreators"

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
      idClick: '',
      dopClick: '',
      styles: ''
    })
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  enterTime = (e) => {

    let target = e.target

    store.getState().forEach(el => {
      if (el[1] == e.target.innerText){
        this.setState({
          styles: el[0]
        })
      }      
    });


    setTimeout(() => {
      this.setState({
        popoverOpen: !this.state.popoverOpen,
        clickTime: ((target.innerText).split(':'))[0],
        dopTime: ((target.innerText).split(':'))[1],
        idClick: target.innerText
      });
      addTime([target.innerText, target.innerText])
      this.props.clickStore()  
    }, 100);      

  }

  enterDopTime(e){   

    var times = this.state.clickTime + ":" + e.target.innerText
    addTime([times, this.state.idClick])

    this.setState({
      popoverOpen: !this.state.popoverOpen,
      dopClick: e.target.innerText
    });

    this.props.clickStore()
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
              <div className={(this.state.styles == (this.state.clickTime + ":"+ e)) && "enterDopTimesFalse" || "enterDopTimes"} onClick = {(e) => this.enterDopTime(e)}>
                {e}
              </div>
            )
            ||
            this.state.mins30.map(e=>
              <div className={(this.state.styles == (this.state.clickTime + ":"+ e)) && "enterDopTimesFalse" || "enterDopTimes"} onClick = {(e) => this.enterDopTime(e)}>
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