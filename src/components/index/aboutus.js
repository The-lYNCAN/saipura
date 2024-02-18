import { Component } from "react";
import styles from './../../styles/aboutus.module.scss'

class AboutUS extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.con}>
                <h2>ABOUT US</h2>
                <h1>Together, we'll work to find solutions to your most<br /> pressing data science problems.</h1>
                <p>With advanced degrees in data science algorithm and software development, all of our highly skilled consultants collaborate with<br /> you to take advantage of cutting-edge algorithms and statistical methods that can help you outperform the competition.</p>
                <button>Learn More</button>
            </div>
        )
    }
}

export default AboutUS