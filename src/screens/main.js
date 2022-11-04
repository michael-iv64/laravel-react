import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Signin from '../components/Signin';
import Home from '../components/Home';
import Me from '../components/Me';
import Registration from '../components/Register';

const mapStateToProps = state => {
    return {
        auth: state.auth.Authorization
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<Signin />} />
                    {
                        (this.props.auth !=='') &&
                        <Route path='/home' element={<Home />} />
                    }
                    <Route path='/me' element={<Me />} />
                    <Route path='/register' element={<Registration />} />
                </Routes>
            </Router>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);