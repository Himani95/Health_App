import React from 'react';
//connecting LoginForm to redux store
                                import { connect } from 'react-redux';
                                //to map login action creator into LoginForm
                                //import { login } from '../redux/reducer';
                                /*Date: 29June 2020
                                Author: Himani 
                                Description: React Router
                                To allow navigation to other pages from the home page 
                                rather than mentioning the url/path manually*/
                                import { Link } from "react-router-dom";
                                import { browserHistory } from "react-router";
                                import { BeatLoader } from 'react-spinners';
                                import axios from 'axios';
                                
                                /*Date:29 June 2020 
                                Author: Himani
                                Description: To make the Login button work along with authentication
                                References: https://www.youtube.com/watch?v=MdeqXWo4fOI */
                                
                                //<button onClick={this.onNavigateDetails} className="btn btn-primary">Login</button>
                                /* onNavigateDetails = () => {
                                        this.props.history.push("/Details")
                                    }*/
                                /*async function submitToServer(data) {
                                    try {
                                        let response = await fetch('https://localhost:3007', {
                                            method: 'POST',
                                            headers: {'Content-type': 'myapp/json',
                                    },
                                    body: JSON.stringify(data),
                                    });
                                        let responseJson = await response.json();
                                        return responseJson;
                                    } catch(error) {
                                        console.error(); 
                                    }
                                    
                                }  */  
                                
                                /*Date: 29 June 2020
                                Author: Himani
                                Description: To send the login details to server(server rendering)
                                onSubmit={submitToServer({ email, password })
                                .then(data => console.log(data))}*/
                                
                                class SearchDocPage extends React.Component {
                                
                                    
                                
                                    changeHandler = (e) => {
                                        this.setState({[e.target.name]: e.target.value})
                                    }
                                
                                    
                                    constructor(props) {  
                                        super(props)  
                            
                                        this.state = {  
                                                Location: '',  
                                                Field: ''  
                            
                                        }  
                                }  

                                ChangeField = (e) => {  
                                    this.setState({  
                                            Field: e.target.value  
                                    })  
                            }  
                            ChangeLocation = (e) => {  
                                    this.setState({  
                                            Location: e.target.value  
                                    })  
                            }  
                            onsubmit = (e) => {  
                                e.preventDefault();  
                                alert(`${this.state.Field},${this.state.Location}`)  
                        }
                                    /*Date: 3 July 2020 
                                    Author: Himani
                                    Description: To give the user as much visual feedback as possible
                                    Display a text message after clicking on a link*/
                                    onclose = () => {
                                        this.setState({visible: false});
                                        window.alert("You are at the Search Page.");
                                    }
                                
                                    render() { 
                                
                                    return (

                                        <div className="search-doc-wrapper">
                                            <form method='POST' action='https://localhost:9000/testAPI'></form>
                                             <form name="searchdoc" onSubmit={this.submitHandler}>
                                                 <div>
                                                 <input type="radio" value="My Address" checked={this.state.Location == "My Address"} onChange={this.ChangeLocation} />My Address  
                             <input type="radio" value="New Location" checked={this.state.Location == "New Location"} onChange={this.ChangeLocation} />New Location
                                                 </div>
                                                <div className="field-dropdn">
                                                    <select className="dropdn-control" value={this.state.Field} onChange={this.ChangeField}>
                                                    <option value="1">Ophthalmologist</option>  
                               <option>Dental</option>  
                                <option>Cardiologist</option>  
                                 <option>Neurologist</option>
                                 <option>Orthopedic</option>
                                                        </select>
                                                        </div> 
                                                 
                                
                                                 <br/>
                                                 <br/>
                                
                                                 <button>
                                                 <Link to="/DocDetails" onClick={this.onclose}>Search</Link>
                                                 </button>
                                
                                                 
                                             </form>
                                        </div>
                                        );
                                    }
                                
                                    onSubmit = (e) => {
                                        e.preventDefault();
                                        //const { email, password } = this.state;
                                
                                        /*fetch('http://localhost:9000/testAPI' , {
                                  method: "POST",
                                  headers: {
                                    'Content-type': 'application/json'
                                  },
                                  body: JSON.stringify(this.state)
                                })
                                .then((result) => result.json())
                                .then((info) => { console.log(info); })*/
                                
                                        let { email, password } = this.state; //to retrieve email and password
                                        this.props.login(email, password);
                                
                                    }
                                }
                                
                                const mapStateToProps = (state) => {
                                    return {
                                        isLoginPending: state.isLoginPending,
                                        isLoginSuccess: state.isLoginSuccess,
                                        loginError: state.loginError
                                    };
                                }
                                
                                const linkstyle = {
                                    color: 'white'
                                };
                                
                                
                                //export default LoginForm;
                                //<BeatLoader color="#26A65B" />
                                export default SearchDocPage;
