import React from 'react';

class Sample2 extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 10,
            friends:["omkar","raju"]
        }
    }

    updateA = (e)=>{
        //    this.state.a = 20
        this.setState({a:e.target.value})
        }


    render() {
        return (
            <div>
                <h1>Sample2 component-{this.state.a}</h1>
                {/* <button onClick={this.updateA}>click me</button> */}
                <input type="text" onChange={this.updateA}/>
                <ul>{
                    this.state.friends.map(function(el){
                        return <li>{el}</li>
                    })
                    }</ul>
            </div>
        )
    }
}

export default Sample2;

/*
    extends -> inheritance
    any property & method -> 
    access declared ones with "this"
    {} -> interpolation
*/