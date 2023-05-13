// import { connect } from 'react-redux';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routers from './Route/Routes';

class App extends React.Component {
 render(){
  return (
    <div className="App">
      <Header />
      <div ><Routers /></div>
      <Footer />
    </div>
  );
 }
}
// function mapStateToProps(state){
//   return {
//     x : state.x,
//   }
// }
// function mapDispatchToProps(dispatch){
//   return {
//     increment : ()=>dispatch({type : "INCREMENT"})
//   }
// }
export default App;