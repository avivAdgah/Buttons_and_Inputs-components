import React from 'react'
import './styles/sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{backgroundColor:'#FAFBFD',height:'100vh',width:'25%'}}>
        <ul className='list'style={{margin:0,listStyle:'none',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
            <Link className='Link' to='/colors'>Colors</Link>
            <Link className='Link' to='/typography'>Typography</Link>
            <Link className='Link' to='/spaces'>Spaces</Link>
            <Link className='Link' to='/buttons'>Buttons</Link>
            <Link className='Link' to='/inputs'>Inputs</Link>
            <Link className='Link' to='/grid'>Grid</Link>
        </ul>
    </div>
  )
}
