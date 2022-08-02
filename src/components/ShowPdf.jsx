import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import { Worker } from '@react-pdf-viewer/core';
import { GameStateContext } from "../context/Context";
import { useContext } from 'react';


export default function ShowPdf() {

  var {showpdf, setShowPdf} = useContext(GameStateContext);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  console.log("show pdf files",showpdf.length)

  return (
    <div>
      <div >
        {
          showpdf.map((e)=>(
            <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer fileUrl={e}
              plugins={[defaultLayoutPluginInstance]} />
            </Worker>
            </>
          ))          
        }
        
      {
            showpdf.length==0 ? <h1 style={{fontFamily: "sans-serif", color:"grey"}} >No pdf file uploaded !!!</h1> :
            console.log("null")
      }
      </div>
    </div>
  )
}
