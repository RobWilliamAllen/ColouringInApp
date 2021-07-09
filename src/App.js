import React from 'react';
import './App.css';

class ColorTiles extends React.Component { 
  
  render() {   
        
    return (             
        <div>     
          <button className="square"  
                  onMouseOver={this.props.changeBackground} 
                  onClick={this.props.onClick} />        
        </div>
    );
  };
};

class App extends React.Component {
  
   constructor(props) {
      super(props);
      this.state = {
        backgroundColor: Array(1000).fill(),
      };      
     this.onClick = this.onClick.bind(this);       
   }      
  
  changeBackground(e) {
    e.target.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
  } 
  
  onClick() {
   this.forceUpdate();
  }   
  
  render() {   
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        alert("Please use the desktop site, as this demo requires a mouse")
    };
    
    return (
     
      <div className="squares">       
        { 
          this.state.backgroundColor.map((color, index) => 
          <ColorTiles 
            key={index + '-' + Date.now()} 
            changeBackground={this.changeBackground} 
            onClick={this.onClick} />) 
        }
      </div>
    );
  }
}

export default App;
