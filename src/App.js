import React from 'react'

import styles from './App.module.css'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import {fetchData} from './api'
import CoronaImage from './images/covid.png'
     
class App extends React.Component{
    state = {
        data: {},
        country: '',
    }
    async componentDidMount()
    {
        
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
        
    }
    
    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country:country})
        console.log(fetchedData)
        console.log(country)
    }
    
    render() {
        const {data, country} = this.state; 
        return(
            <div className={styles.container}> 
                <img className={styles.images} src={CoronaImage} alt="COVID-19" />
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>                             
               <Chart data={data} country={country}/>
               
               
            </div>
        )
    }
}
export default App