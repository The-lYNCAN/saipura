import { Component } from "react";
import styles from './../../styles/slider.module.scss'

class Slider extends Component{
    constructor(props){
        super(props)
        this.state = {
            slider: 0
        }
    }

    componentDidMount(){
        const one = document.getElementById(styles.one)
        const two = document.getElementById(styles.two)
        const three = document.getElementById(styles.three)
        setInterval(() => {
            if (this.state.slider === 0){
                // two.style.display = "none"
                // three.style.display = "none"
                // one.style.display = "block"
                two.style.width = "0"
                three.style.width = "0"
                one.style.width = document.body.clientWidth + "px"
                this.setState({slider: 1})
                
            }else if (this.state.slider === 1){
                // two.style.display = "block"
                // three.style.display = "none"
                // one.style.display = "none"
                two.style.width = document.body.clientWidth + "px"
                three.style.width = "0"
                one.style.width = "0"
                this.setState({slider: 2})
            }else{
                // two.style.display = "none"
                // three.style.display = "block"
                // one.style.display = "none"
                two.style.width = "0"
                three.style.width = document.body.clientWidth + "px"
                one.style.width = "0"
                this.setState({slider: 0})
            }
            console.log("logging");
        }, 3000)
    }

    render(){
        return (
            <div className={styles.con}>
                <div id={styles.one} className={styles.page}>

                </div>
                <div id={styles.two} className={styles.page}>

                </div>
                <div id={styles.three} className={styles.page}>

                </div>
                
            </div>
        )
    }
}

export default Slider;