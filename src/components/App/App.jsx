import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import style from "./App.css"

import { timeList, ADD_TIME, replaceTime, addTime } from "../../index"

import { PopoverItem } from "../Popover/Popover.jsx"
import { TopLine } from "../TopLine/TopLine"

export class PopoverExampleMulti extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        times: []
      };

      let times = []
      for(var i = 9; i != 29; i++){
        if(i <= 23){
            var timeHours = i
        }else{
            var timeHours = i - 24
        }
        for(var j = 0; j != 2; j++){
            if (j == 0){
              times.push([timeHours, "00"])
            }else{
              times.push([timeHours, "30"])
            }
        }
    }
      this.state = ({
        times: times,
        lengthMass: 0
      })
    }
  
    clickStore = () => {
      this.setState({
        lengthMass: this.state.lengthMass + 1
      })
    }

    render() {
      return (
        <div className="app">
          <TopLine store={this.state.lengthMass}/>
          { this.state.times.map((time, i) => {
            return <PopoverItem key={i} data={[time, i]} clickStore={() => this.clickStore()} />;
          })}
        </div>
      );
    }
  }