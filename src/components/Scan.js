import React, { useState } from 'react'
import validator from 'validator';
import QRCode from 'react-qr-code';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../App.css'

export default function Scan() {
    const [url,setUrl] = useState("");
    const [qrcode,setQrcode] = useState(false);
    const [showShortUrl,setShowSortUrl] = useState(false);
    const [shortUrl,setShortUrl] = useState("");
    const [copied,setCopied] = useState(false);

  const checkValidUrl = (curlit) => {

    if(validator.isURL(curlit))
        return true;
    return false;
  }

  const createShortUrl = async(longUrl) => {
    const res =  await axios.get(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data = await res.data;
    setShortUrl(data.result.short_link);
    setShowSortUrl(true)
  }


  const makeUrlandScan = (value) =>  {
    setUrl(value);

    const res = checkValidUrl(value);
    if(res){
        // generate qrcode and shoten url
        setQrcode(true);
        console.log("goorle");
        createShortUrl(value);
    }else{
        setTimeout(()=>{
            console.log("Invalid url");
            setQrcode(false);
            setShowSortUrl(false)
        },1000);
    }
  }
  return (
    <div className='bg-dark App-header'>
        <div className='container'>
            <div className='row'>
                <div className='col-md'></div>
                <div className='col-md'>
                <h3 className='text-center'>Scan and Short Url</h3>
                    {qrcode && 
                    <center className="mb-2">
                        <QRCode value={url} />
                    </center>
                    }
                    {showShortUrl &&
                      <div style={{border:"1px solid blue"}} className="mb-2">
                          <p className='text-center' style={{color:"white"}}>{shortUrl}</p>
                      </div>
                    }
                
                    <div className='form-group'>
                        <input
                            type={'text'}
                            className="form-control"
                            onChange={(e)=>makeUrlandScan(e.target.value)}
                            placeholder="Enter Url"
                        />
                        <CopyToClipboard
                            text={shortUrl}
                            onCopy={()=>setCopied(true)}
                        >
                            <button className='btn btn-primary btn-block mt-2' style={{width:"100%"}}>Copy to Clipboard</button>
                        </CopyToClipboard>
                        
                    </div>
                </div>
                <div className='col-md'></div>
            </div>
        </div>
        
    </div>
  )
}
