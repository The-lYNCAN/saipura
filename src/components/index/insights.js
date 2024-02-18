import { Component } from "react";
import styles from './../../styles/insights.module.scss'
import Box from "./box";

class Insights extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className={styles.con}>
                <h1>LATEST INSIGHTS <br />Blogs & News</h1>
                <div className={styles.boxCon}>
                    <Box />
                    <Box />
                    <Box />
                </div>
                
            </div>
        )
    }
}

export default Insights