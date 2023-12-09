import React from 'react'
import "./styleEmpList.css"
import { useNavigate } from 'react-router-dom'


const EmployeeList = () => {

  const navigate = useNavigate();
    
    function handleClick(){
        navigate("/EmpProd.js")
    }

  return (
    <div className='login'>
        <div className='roko'> 
          <div className='logo1'></div>
          <div className='logo2'></div>
          <div className='text2'>4</div>
          <div className='mop'></div>

          <input type='text' placeholder="      Search with name" className='searchbar'></input>
          {/* <p className='namesearch'>Search with name</p> */}
          <div className='magglass'></div>
        </div>

        <div className='aadmi'>
          <div className='empcard1'></div>
          <div className='e1'>EMP ID :<p className='number1'>1</p></div>
          <div className='n1'>Name   :<p className='name1'>Arjun</p></div>
          <div className='d1'>DOB    :<p className='dob1'>16-11-2000</p></div>
          <div className='r1'>Role   :<p className='role1'>Software Engineer</p></div>
          <div className='num1'>1</div>

          <div className='empcard2'></div>
          <div className='e2'>EMP ID :<p className='number2'>2</p></div>
          <div className='n2'>Name   :<p className='name2'>Mahesh</p></div>
          <div className='d2'>DOB    :<p className='dob2'>15-01-2000</p></div>
          <div className='r2'>Role   :<p className='role2'>Web Developer</p></div>
          <div className='num2'>2</div>

          {/* <div className='empcard3'></div>
          <div className='e3'>EMP ID :<p className='number1'>3</p></div>
          <div className='n3'>Name   :<p className='name1'>Shibang</p></div>
          <div className='d3'>DOB    :<p className='dob1'>02-03-2003</p></div>
          <div className='r3'>Role   :<p className='role1'>Frontend Intern</p></div>
          <div className='num3'>3</div> */}
        </div>

        <div className='rect'>
            <div onClick={handleClick} className='profileb'></div>
            <div className='profilebtn'></div>
            <div className='homeicon'></div>
            <div className='profileicon'></div>
        </div>
    </div>
  )
}

export default EmployeeList