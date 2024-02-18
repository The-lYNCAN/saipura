import { Component } from "react";
import styles from './../../styles/hero.module.scss'

class Hero extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className={styles.con}>
            <h1>Biomedical data beyond the information age</h1>
            <p>We collaborate with rapidly expanding biotech and pharmaceutical firms to use computational biology to propel innovation.<br></br> We can serve as your one-stop shop for data analysis and experimental design. Alternatively, we can provide unique answers for your most difficult problems.
            </p>
            <button>Learn More</button>
        </div>)
    }
}

export default Hero