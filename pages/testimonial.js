import React, { Component } from 'react'

export class testimonial extends Component {

  state={
    color:['red','green'],
    size:['S','M','L','XL'],
    datas:['color','size']
  }


  componentDidMount(){
    // console.log(this.state.datas)
    let datas = [['red','green'], ['S','M','L','XL']];

    datas.forEach(element => {

      element.forEach(el => {
      console.log(el)

      });


    });



  }


  render() {
    return (
      <div>testimonial</div>
    )
  }
}

export default testimonial