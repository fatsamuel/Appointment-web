import React, {Component} from 'react';
import {FaPlus} from 'react-icons/fa';

class AddAppointments extends Component {
    constructor() {
        super ();
        this.state = {
            petName : '',
            ownerName : '',
            aptDate: '',
            aptTime: '',
            aptNote: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        let tempApt = {
            petName: this.state.petName,
            ownerName: this.state.ownerName,
            aptDate: this.state.aptDate + " " + this.state.aptTime,
            aptNotes: this.state.aptNotes
        };

        this.props.addAppointment(tempApt);

        this.setState({
            petName: "",
            ownerName: "",
            aptDate: "",
            aptTime: "",
            aptNotes: ""

        });

        this.props.toggleForm();

    };

    handleChange (e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value

        });
    }
    render () {
        return (
        <div 
        className={
            "card textcenter mt-3 " +
        (this.props.formDisplay ? '' : 'add-appointment')
        }
        >
        <div className="apt-addheading card-header bg-primary text-white"
            onClick= {this.props.toggleForm}
        >
          <FaPlus/>Termin hinzufügen
        </div>
    
        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
                readOnly
              >
                Tiername
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  placeholder="Tiername"
                  value={this.state.petName}
                  on onChange = {this.handleChange}
                />
              </div>
            </div>
    
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Besitzer
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  placeholder="Name des Besitzers"
                  value={this.state.ownerName}
                  on onChange = {this.handleChange}
                />
              </div>
            </div>
    
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Datum
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value={this.state.aptDate}
                  on onChange = {this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Uhrzeit
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"value={this.state.aptTime}
                  on onChange = {this.handleChange}

                />
              </div>
            </div>
    
            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Anmerkungen
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Anmerkungen"
                  value={this.state.aptNote}
                  on onChange = {this.handleChange}
                />
              </div>
            </div>
    
            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Termin hinzufügen
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
    }
}

export default AddAppointments;