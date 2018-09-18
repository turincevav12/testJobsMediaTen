import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { addTime } from "../../store/actionCreators"

import { PopoverExampleMulti } from "../App/App.jsx"
import style from "./Popover.css"

export class PopoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    
    this.state = ({
      popoverOpen: false,
      clickTime: "",
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

    let timePopover = this.props.popoverList

    //console.log(timePopover.minutesFrom00to30)

    return (
      <span>
        <div className="mr-1" color="secondary" id={'Popover-' + this.props.data[1]} onClick={(e)=>this.enterTime(e)}>
            {this.props.data[0][0] +":"+this.props.data[0][1]}
        </div>
        
      </span>
    );
  }
}