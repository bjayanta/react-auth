import React, { Component } from 'react'
import api from "../../utils/api";

export default class Edit extends Component {
    constructor({ match }) {
        super();

        this.state = {
            id: match.params.id,
            job: '',
            description: '',
            is_pendign: true
        }

        // header configurations
        this.config = {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem('token')
            }
        }
    }

    componentDidMount() {
        api.get('tasks/' + this.state.id, this.config)
            .then(response => {
                console.log(response.data);

                this.setState({
                    job: response.data.data.job,
                    description: response.data.data.description,
                    is_pendign: response.data.data.is_pendign
                })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    formHandler = (e) => {
        e.preventDefault()

        api.put('tasks/' + this.state.id, {
            "job": this.state.job,
            "description": this.state.description,
            "is_pending": this.state.is_pendign,
        }, this.config)
            .then(response => {
                console.log(response.data);

                // this.setState({
                //     job: response.data.data.job,
                //     description: response.data.data.description,
                //     is_pendign: response.data.data.is_pendign
                // })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    render() {
        return (
            <div>
                <h3>Update Task</h3>
                <form onSubmit={ this.formHandler }>
                    <div>
                        <label htmlFor="job">Job Title</label>
                        <input type="text" name="job" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } value={ this.state.job } />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" onChange={ (e) => this.setState({[e.target.name]: e.target.value}) } value={ this.state.description } />
                    </div>

                    <div>
                        <label htmlFor="status">
                        <input 
                            type="checkbox" 
                            name="is_pendign" 
                            onChange={ (e) => this.setState({[e.target.name]: !this.state.is_pendign}) }
                            checked={ !this.state.is_pendign } 
                            id="status" />
                        Done
                        </label>
                    </div>

                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}
