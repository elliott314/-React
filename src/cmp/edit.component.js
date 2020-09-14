import React, { Component } from 'react';
import axios from 'axios';
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangebGroup  = this.onChangebGroup.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FullName: '',
      Email: '',
      bGroup:'',
      Address:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/api/patient/edit/:id'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                FullName: response.data.FullName, 
                Email: response.data.Email,
                bGroup: response.data.bGroup,
                Address: response.data.Address
               });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeFullName(e) {
    this.setState({
     FullName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })  
  }
  onChangebGroup(e) {
    this.setState({
      bGroup: e.target.value
    })
  }
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
     FullName: this.state.FullName,
      Email: this.state.Email,
      bGroup: this.state.bGroup,
      Address: this.state.Address
    };
    axios.post('http://localhost:4000/patient/update'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Patient</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>FullName  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.FullName}
                      onChange={this.onChangeFullName}
                      />
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>bGroup </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.bGroup}
                      onChange={this.onChangebGroup}
                      />
                </div>
                <div className="form-group">
                    <label>Address </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Address}
                      onChange={this.onChangeAddress}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}