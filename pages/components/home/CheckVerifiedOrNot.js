import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { MdEditNote, MdKeyboardArrowDown, MdKeyboardArrowUp, MdVerifiedUser, MdErrorOutline } from "react-icons/md"
import axios from 'axios'

export const CheckVerifiedOrNot = (props) => {
    const [data,setData]=useState(null)

    useEffect(()=>{
        axios.get(`${process.env.backendURL1}/emailverifychecknow/${props.email}`)
        .then(response=>{
            // console.log(response.data)
            setData(response.data)
        })
    },[])


  return (
    <>
    {data===null
    ?
    <span style={{float: 'right', fontSize: 10}}>
        verifying...
    </span>
    :<>
    {data.deliverable
    ?
    <span className='text-success float-right'>
        <MdVerifiedUser />
    </span>
    :
    <span className='text-danger float-right'>
        <MdErrorOutline />
    </span>
    }
    
    </>}
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CheckVerifiedOrNot)