import { Component } from "react";

class ClassBasedComponent extends Component{
    // //state
    // state={
    //     showText: false
    // }
    state={
        showText:false,
        changeColor: false,
        count: 0,
        changeCountStyle: false,
    };
    handleClick=()=>{
        const {showText, changeColor}=this.state
        this.setState({
            showText: !showText,
            changeColor: !changeColor,
        })
    }
    handleCount=()=>{
        this.setState({
            ...this.state,
            count: this.state.count+1,
        })
    }
    //componentDidMount
    //ComponentDidUpdate
    //ComponentWillUnmount
    componentDidMount(){
        console.log("This is called for first time when page is loaded")
        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor,
        });
    }
    componentDidUpdate(prevProps, prevState){
        if( prevState && 
            prevState.count!==this.state.count && 
            this.state.count===10)
        {
            this.setState({
                ...this.state,
                changeCountStyle: true,
            })
        }
    }
    componentWillUnmount(){
        console.log("called whenever to destroy any component or request made during ComponentDidMount")
    }
    render(){
        const {showText,changeColor,count,changeCountStyle}=this.state
        return <div>
            {showText?<h3 style={{color: changeColor ? 'red':'blue'}}>Class based component has been used</h3>:null }
            <button onClick={this.handleClick} style={{margin:'20px'}}>Toggle Text</button>
            <button style={{display: changeCountStyle?'none':'inblock'}} onClick={this.handleCount}>Increase Count Value</button>
            {/* <h3>Count is {count}</h3> */}
            <h3 style={{color: changeCountStyle? 'blue':'gray',fontSize:changeCountStyle?'30px':'25px'}}>Count is {count}</h3>
        </div>
    };
}
export default ClassBasedComponent   









