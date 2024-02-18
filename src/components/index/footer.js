import { Component } from "react";
import styles from '../../styles/footer.module.scss'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className={styles.con}>
                <h4>Copyright 2023 ,Saipuram LLC Designed by Cypherash Enterprises Pvt. Ltd.</h4>
            </div>
        )
    }
}

export default Footer