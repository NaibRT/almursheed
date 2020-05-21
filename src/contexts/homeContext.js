import React from 'react'

const homeContext=React.createContext({});
const homeContextConsumer=homeContext.Consumer



class HomeContext extends React.Component{
 constructor(props) {
  super(props)
 
  this.state = {
    mainSlider:[
     {src:'nature-1.jpg',title:'Title1'},
     {src:'nature-1.jpg',title:'Title2'},
     {src:'nature-1.jpg',title:'Title3'}
    ],
    popularDrivers:[
     {src:'rectangle1.jpg',fullName:'Naib Tahmali',ratingCount:'(215 ratings)',ratingStar:'4.5',carName:'BMW E5',rides:'152',},
     {src:'rectangle1.jpg',fullName:'Naib Tahmali',ratingCount:'(215 ratings)',ratingStar:'4.5',carName:'BMW E5',rides:'152',},
     {src:'rectangle1.jpg',fullName:'Naib Tahmali',ratingCount:'(215 ratings)',ratingStar:'4.5',carName:'BMW E5',rides:'152',},
    ],
    mostVisitedPlace:[
     {src:'oldcty.png',name:'Stake House',location:'Azerbaijan Baku'},
     {src:'oldcty.png',name:'Stake House',location:'Azerbaijan Baku'},
     {src:'oldcty.png',name:'Stake House',location:'Azerbaijan Baku'},
    ],
    partners:[
     {src:'',name:'',location:''}
    ]
  }
 }
 
 render(){
  return (
   <homeContext.Provider value={{state:this.state}}>
     {this.props.children}
   </homeContext.Provider>
)
 }
}

export default HomeContext
export {homeContext}
