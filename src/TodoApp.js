import React, {Component} from 'react';
import logo from './logo.svg';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div id="todo">


                <br/>
                <br/>

                <Card style={{ width: '18rem' }}>
                    <CardContent>

                        <h3>New TODO</h3>


                        <TextField
                            id="text"
                            label="Text"
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            margin="normal"
                        />
                        <br/>
                        <br/>
                        <inputLabel htmlFor="priority" className="right-margin">
                            Priority:
                        </inputLabel>
                        <input
                            id="priority"
                            type="number"
                            onChange={this.handlePriorityChange}
                            value={this.state.priority}>
                        </input>
                        <br/>
                        <br/>
                        <DatePicker
                            id="due-date"
                            selected={this.state.dueDate}
                            placeholderText="Due date"
                            onChange={this.handleDateChange}>
                        </DatePicker>
                        <br/>
                        <br/>
                        <TodoList todoList={this.state.items}/>

                    </CardContent>
                    <CardActions>
                        <Button variant={"contained"} onClick={this.handleSubmit}>
                            Add #{this.state.items.length + 1}
                        </Button>
                    </CardActions>
                </Card>


            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default TodoApp;
