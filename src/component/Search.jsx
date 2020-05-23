import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import { searchByTitle } from '../Service/Service';
import './dashboard.css'


const WAIT_INTERVAL = 1000;
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchNotes: '',
            searchNoteList: []
        }
    }

    handlChangeSearch = (event) => {
        clearTimeout(this.timer);
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state))
        this.timer = setTimeout(this.displaySerachNotes, WAIT_INTERVAL);
    }
    displaySerachNotes = () => {
        this.setState({
            displayNoteType: "searchNotes",
        })
        searchByTitle(this.state.searchNotes).then(Response => {
            this.setState({
                searchNoteList: Response.data.result
            })
        })
            .catch((error) => {
            })
    }

    render() {
        return (
            <div>
                <div className="search">
                    <InputBase placeholder="Search…" name="searchNotes" onChange={this.handlChangeSearch} style={{ width: "440px" }}
                        inputProps={{ 'aria-label': 'search' }} />
                </div>
                {this.state.searchNoteList.map(o => (
                    <Card style={{ height: "140px", borderRadius: "4px" }} >
                        <div color='red'>
                            {o.note_title}
                        </div>
                        <div>
                            {o.note_disc}
                        </div>
                    </Card>
                ))
                }
            </div>
        );
    }
}

export default Search;