import React, { Component } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';

class NotesList extends Component {

  state = {
    notes: []
  }

  componentDidMount(){
    this.getNotes();
  }


async getNotes(){
  const res = await axios.get('http://localhost:4000/api/notes');
  this.setState({
    notes: res.data
  });
}


  deleteNote = async (id) => {
    await axios.delete(`http://localhost:4000/api/notes/${id}`);
    this.getNotes();
  }



  render() {
    return (
      <div className="row">
        {
          this.state.notes.map(note => <div className="col-md-4 p-2">
          <div className="card">
            <div className="card-header">
              <h5>{note.title}</h5>
            </div>
            <div className="card-body">
              <p>{note.content}</p>
              <small><p>{note.author}</p></small>
              <small><p>{format(note.date)}</p></small>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>
                Delete
              </button>
            </div>

          </div>
        </div>)
        }

      </div>
    );
  }

}

export default NotesList;
