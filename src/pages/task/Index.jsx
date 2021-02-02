import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import api from "../../utils/api";

class Index extends Component {
    constructor() {
        super();
        
        // header configurations
        this.config = {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem('token')
            }
        }

        this.state = {
            job: "",
            description: "",
            list: []
        }
    }

    /**
     * get all tasks from server via api
     * using axios
     */
    componentDidMount() {
        this.getAllTasks();
    }

    formHandler = (e) => {
        e.preventDefault()

        /**
         * submit form data to server 
         * using axios
         */
        api.post('task', {
            job: this.state.job,
            description: this.state.description,
        }, this.config)
        .then(response => {
            console.log(response.data);
            this.getAllTasks();
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    deleteTask = (id) => {
        api.delete('tasks/' + id, this.config)
        .then(response => {
            console.log(response.data);
            this.getAllTasks();
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    getAllTasks = () => {
        api.get('tasks', this.config)
        .then(response => {
            console.log(response.data);
            console.log(response.data.data);

            // receive and store into state
            this.setState({list: response.data.data})
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    render() {
        // check logged in or not 
        if(!this.props.isLogged) {
            return <Redirect to="/login" />
        }

        return (
            <div>
                {/* form area */}
                <div>
                    <form onSubmit={ this.formHandler }>
                        <div>
                            <label htmlFor="job">Job Title</label>
                            <input type="text" name="job" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } id="job" required />
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } id="description"></textarea>
                        </div>

                        <button type="submit">Insert</button>
                    </form>
                </div>

                {/* list area */}
                <div>
                    <ul>
                        {
                            this.state.list.map((task, i) => {
                                return (
                                    <li key={ task.id }>
                                        <strong>{ task.job }</strong>
                                        <button onClick={ this.deleteTask.bind(this, task.id) }>Delete</button>
                                        <Link to={`/tasks/edit/${ task.id }`}>Edit</Link>
                                        <p>{ task.description }</p>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}

// state
const mapStateToProps = state => {
    return {
        isLogged: state.AuthReducer.isLogged,
        error: state.AuthReducer.error
    }
}

export default connect(mapStateToProps)(Index)
