import React from "react";
import {BsInfoCircle} from 'react-icons/bs' 
import './Table.css';
import { useState,useEffect } from "react";
const Table = (props) => {
    const [hint1,setHint1] = useState(false)
    const [hint2,setHint2] = useState(false)
        setTimeout(()=>{
            setHint1(false)
        },5000)
    
        setTimeout(()=>{
            setHint2(false)
        },5000)
        const iconHandler1 = () => {
            setHint1(true)
        }
        const iconHandler2 = () => {
            setHint2(true)
        }
    return(
        <table>   
        <tr>
          <td className="Icon" onClick={iconHandler2}><BsInfoCircle/></td>
          <td className="dataNotEditable">Negotiation</td>
        </tr>
        {hint2?
        <tr>
        <td className="Iconhint"><BsInfoCircle/></td>
        <td className="datahint">Deal amount has been reduce in the last 10 days</td>
        </tr>
        :
        <br></br>
        }
        <br></br>
        <tr>
            <td className="Icon" onClick={iconHandler1}><BsInfoCircle/></td>
            <td className="data" >
          {props.showInputEle2 ? (
          <input 
            type="text"
            value={props.value2}
            onChange={props.handleChange2}
            onBlur={props.handleBlur2}
            autoFocus
          />
        ) : (
          <span 
            onDoubleClick={props.handleDoubleClick2}
            style={{ 
              display: "inline-block", 
              height: "25px", 
              minWidth: "300px", 
            }}
          >
            {props.value2}
          </span>
        )}
          </td>
        </tr>
        {hint1?
        <tr>
        <td className="Iconhint"><BsInfoCircle/></td>
        <td className="datahint">Deal amount has been reduce in the last 10 days</td>
        </tr>
        :
        <br></br>
        }
        <tr>
          <td className="IconWithNoHint"><BsInfoCircle/></td>
          <td className="data" >
          {props.showInputEle1 ? (
          <input 
            type="text"
            value={props.value1}
            onChange={props.handleChange1}
            onBlur={props.handleBlur1}
            autoFocus
          />
        ) : (
          <span 
            onDoubleClick={props.handleDoubleClick1}
            style={{ 
              display: "inline-block", 
              height: "25px", 
              minWidth: "300px", 
            }}
          >
            {props.value1}
          </span>
        )}
          </td>
        </tr>
      </table>
    )
} 


export default Table