import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimatedCursor from "react-animated-cursor"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div>
    <AnimatedCursor
        innerSize={10}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '1px solid black',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: 'black'
        }}
        
      />  
    </div>
  </React.StrictMode>,
)
