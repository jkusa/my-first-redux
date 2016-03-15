import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

const firstName = ( state='click me', action)  => {
    if(action.type === 'UPDATE') {
        return action.value.name;
    }
    return state;
};

const NameInput = (props) => {
    return (
        <input
            placeholder="Type here"
            onChange={(e) => props.setFirstName({ name: e.target.value })}
        />
    );
};

const NameLabel = (props) => {
    const name = props.firstName;
    return (
        <span onClick={() => props.setFirstName({ name: 'you clicked me' })}>{name}</span>
    );
};

const mapfirstNameDispatchToProps = (dispatch) => {
    return {
        setFirstName: (v) => dispatch({ type: 'UPDATE', value: v })
    };
};

const XNameLabel = connect(state => {
    return { firstName: state.firstName };
}, mapfirstNameDispatchToProps)(NameLabel);

const XNameInput = connect(state => {
    return { firstName: state.firstName };
}, mapfirstNameDispatchToProps)(NameInput);

const Root = (props) => {
    const { store } = props;
    return (
        <Provider store={store}>
            <div>
                <div><XNameLabel /></div>
                <XNameInput />
            </div>
        </Provider>
    );
};

render((
    <Root store={createStore(combineReducers({ firstName: firstName }))} />
), document.getElementById('container'));
