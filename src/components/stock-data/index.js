import React, {Component} from "react";
import "./index.css";


class StockData extends Component {

  constructor (){
    super()
    this.state = {
      input: '',
      stock: {},
      status: ''
    }
  }

  handleSubmit(event){
    //this.setState()
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${this.state.input}`)
      .then(res => res.json())
      .then(d => {
        //console.log(d)
        if (d === undefined){
          this.setState({status: "invalid"})
        }
        else {
          this.setState({stock: d.data[0]})
        }
      })
  }

  handleOnChange = event => {
    event.preventDefault()
    this.setState({input: event.target.value})
  }

  render(){
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input onChange={e => this.handleOnChange(e)} type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input"/>
          <button onClick={e => this.handleSubmit(e)} className="" id="submit-button" data-testid="submit-button">Search</button>
        </section>
        {this.state.status === "invalid" ? <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div> : 
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
          <li className="py-10"></li>
          <li>Open: {this.state.stock.open}</li>
          <li>Close: {this.state.stock.close}</li>
          <li>High: {this.state.stock.high}</li>
          <li>Low: {this.state.stock.low}</li>
        </ul>
        }
        
      </div>
    );
  }
}

export default StockData
