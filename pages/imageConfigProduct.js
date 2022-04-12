import React, { Component } from 'react'

export class imageConfigProduct extends Component {

    constructor(props){
        super(props)
        this.state={
            size:['S','M','L'],
            color:['Red',"Green"],
            grade:['A','B','C','D'],
            attributes:['size','color']
        }
    }

  render() {
    return (
      <div>
          {this.state.attributes.length===2
            ?
            <>
                {this.state[this.state.attributes[0]].map((si)=>{
                    return(
                        <>
                            {this.state[this.state.attributes[1]].map((cl)=>{
                                return(
                                    <p>{si} - {cl}</p>
                                )
                            })}
                        </>
                    )
                })}
            </>
            :
            <></>
          }
      </div>
    )
  }
}

export default imageConfigProduct