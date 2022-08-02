import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Viewer } from '@react-pdf-viewer/core'; 
import { Worker } from '@react-pdf-viewer/core'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { GameStateContext } from "../context/Context";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router';
import "./cssFiles/Files.css"
export default function Files() {
            const navigate = useNavigate();
            const defaultLayoutPluginInstance = defaultLayoutPlugin();
            var {showpdf, setShowPdf} = useContext(GameStateContext);
            // for onchange event
            const [pdfFile, setPdfFile]=useState(null);
            const [pdfFileError, setPdfFileError]=useState('');
            // for submit event
            const [viewPdf, setViewPdf]=useState(null);
          
            // onchange event
            const fileType=['application/pdf'];
            const handlePdfFileChange=(e)=>{
              let selectedFile=e.target.files[0];
              if(selectedFile){
                if(selectedFile&&fileType.includes(selectedFile.type)){
                  let reader = new FileReader();
                      reader.readAsDataURL(selectedFile);
                      reader.onloadend = (e) =>{
                        setPdfFile(e.target.result);
                        setPdfFileError('');
                      }
                }
                else{
                  setPdfFile(null);
                  setPdfFileError('Please select valid pdf file');
                }
              }
              else{
                console.log('select your file');
              }
            }
          
            // form submit
            const handlePdfFileSubmit=(e)=>{
              e.preventDefault();
              if(pdfFile!==null){
                setViewPdf(pdfFile);
              }
              else{
                setViewPdf(null);
              }
            }
           // console.log(pdfFile)

    const submitpdf = ()=>{
             if(pdfFile!=null){
                 setShowPdf([...showpdf, pdfFile])
                 alert("file uploaded successufully")
             } 
    }
            
  //console.log("pdf files",showpdf.length)

  const { token , username } = useSelector((state)=>state.login);
  const [profile , setProfile] = useState({});

  useEffect(()=> {
            fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
                        method: "GET",
                        headers: {
                        "Content-Type" : "application/json",
                         Authorization: `Bearer ${token}`
                        }
                        })
                        .then((res)=> res.json())
                        .then((res)=> setProfile(res))
                        .catch((err) => console.log(err));
                    },[]);
            //console.log(profile)

  return (
    <div className= "pdf-container">
        <h1 className="head">Please upload the pdf document</h1>
        <form className="form" onClick={submitpdf}  onSubmit={handlePdfFileSubmit}>
        <input type="file"
          required onChange={handlePdfFileChange}
        />
        <h3>Name : <span style={{color:'green'}}> {profile.name}</span> </h3>
        <br />
        <h3>Email : <span style={{color:'green'}}>{profile.email}</span> </h3>
        <br />
        <h3>Mobile : <span style={{color:'green'}}> {profile.mobile}</span> </h3>
        <br />
        <h3>Username : <span style={{color:'green'}}>{profile.username}</span></h3>
        <br />
        <h3>Description : <span style={{color:'green'}}>{profile.description}</span> </h3>
        <br />
        {pdfFileError&&<div >{pdfFileError}</div>}
        <br></br>
        <div className="view">
        <button type="submit">
          UPLOAD
        </button>
        </div>
      </form>
      <div className="view">
      <button onClick={()=>{
                  navigate("/pdffiles")
      }}>VIEW DOCUMENTS</button>

      </div>
      
    </div>
  )
}
