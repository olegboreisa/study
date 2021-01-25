import React, {Component} from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title')
            document.title = `You clicked ${this.state.count} times`
        }
    }

    render () {
        return (
            <div>
                <input type={"text"} value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
                <button onClick={() => this.setState(this.state.count +1)}>Click {this.state.count}</button>
            </div>
        )
    }

}

export default ClassCounterOne