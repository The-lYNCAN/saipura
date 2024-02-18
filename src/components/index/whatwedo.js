import { Component } from "react";
import styles from './../../styles/whatwedo.module.scss'
import Box from "./box";

class WhatWeDo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className={styles.con}>
                {/* <h1>WHAT WE DO</h1> */}
                <h2>Services</h2>
                <p>Challenges such as single-cell RNA-seq, RNA splicing analysis, advanced proteomics, and large-scale statistical genetics are not something we run from; rather, we actively pursue them.</p>
                <div className={styles.boxCon}>
                    <Box />
                    <Box />
                    <Box />
                </div>
                <h4 id={styles.heading}>Let's Work Together</h4>
                <p id={styles.body}>Whether it’s a perplexing set of results, a pipeline that needs building, or a long-term data science strategy in the making, our 20+ consultants are eager to hear what you’re working on.</p>
                <button>GET IT TOUCH</button>
            </div>
        )
    }
}

export default WhatWeDo