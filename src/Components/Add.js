/**
 * Created by abajuk on 14.06.2017.
 */
import React, { Component } from 'react';



class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newPerson :{}
        }
    }


    static defaultProps = {
        job : ['programista','Sprzataczka','kierownik','Kierowca']
    };

    handleSubmit(e){
        if((this.refs.name.value === '') ||
            (this.refs.secondName.value === '')) {

            alert('Uzupelnic pola');
        } else {

            this.setState({ newPerson : {
                name: this.refs.name.value,
                 secondName : this.refs.secondName.value,
                job: this.refs.job.value

            }}, function(){
            console.log(this.state);
            this.props.addPerson(this.state.newPerson);
            });
        }
        e.preventDefault();
    }

 render() {
     let jobOptions = this.props.job.map(job => {
      return <option key={job} value= {job}>{job}</option>
 });
    return (
      <div>
          <form onSubmit = { this.handleSubmit.bind(this)}>
              <div>
                  <label>Imie</label><br/>
                  <input type="text" ref='name' />
               </div>
              <div>
                  <label>Nazwisko</label><br/>
                  <input type="text" ref='secondName' />
               </div>
              <div>
                  <label>job</label><br/>
                  <select ref='job'>
                     {jobOptions}
                  </select>
              </div>
              <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}

export default AddProject;
/**
 * Created by abajuk on 14.06.2017.
 */
