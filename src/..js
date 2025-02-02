import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));


root.render(
    <div style={{background: 'black'}}>
        <img src="./logo192.png" alt="logo" width={40} />
        <h2 style={{color:'white'}}>Fun Facts about React</h2>
        <ul>
            <li style={{color:'white'}}>Was first released in 2013</li>
            <li style={{color:'white'}}>
                Was originally created by Jordan Walke
            </li>
            <li style={{color:'white'}}>Has well over 100k stars</li>
        </ul>
    </div>
    
     );   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

