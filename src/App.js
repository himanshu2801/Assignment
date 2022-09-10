import './App.css';
import { useState } from 'react';
import Table from './Components/Table/Table';
 

function App() {
  const [value1, setValue1] = useState("Negotiation");
  const [value2, setValue2] = useState("Negotiation");
  const [showInputEle1, setShowInputEle1] = useState(false);
  const [showInputEle2, setShowInputEle2] = useState(false);
  return (
    <Table 
          value1={value1}
          handleChange1={(e) => setValue1(e.target.value)}  
          handleDoubleClick1={() => setShowInputEle1(true)} 
          handleBlur1={() => setShowInputEle1(false)}         
          showInputEle1={showInputEle1}
          value2={value2}
          handleChange2={(e) => setValue2(e.target.value)}  
          handleDoubleClick2={() => setShowInputEle2(true)} 
          handleBlur2={() => setShowInputEle2(false)}         
          showInputEle2={showInputEle2}
    />
  );
}

export default App;
