import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Splash() {
    const nav = useNavigate()
    useEffect(() => {
      setTimeout(()=>{
        nav("/scan")
      },3000);
    
      return () => {
        
      }
    }, [])
    
  return (
    <div className='bg-primary' style={{height:"720px"}}>
        <div className='row'>
            <div className='col-md'></div>
            <div className='col-md align-middle'>
                <h1 className='mt-4'>Scan Url</h1>
            </div>
            <div className='col-md'></div>
        </div>
    </div>
  )
}
