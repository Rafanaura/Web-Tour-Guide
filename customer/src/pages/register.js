import React from "react";
import axios from 'axios';

class Registrasi extends React.Component {
    constructor(){
        super()
        this.state = {
          nama : "",
            username: "",
            password: "",
            message: "",
            logged: true
        }

    }
    bind = (event) => {
      this.setState({ [event.target.name]: event.target.value });
  }
  
  Registrasi = (event) => {
    event.preventDefault()
    let data = {
      nama : this.state.nama,
        username: this.state.username,
        password: this.state.password
    }

    let url ="http://localhost:7000/customer/registrasi"

    axios.post(url, data)
    .then(response => {
        this.setState({logged: response.data.logged})
        if (this.state.logged) {
            let customer = response.data.data
            let token = response.data.token
            localStorage.setItem("customer", JSON.stringify(customer))
            JSON.parse(localStorage.getItem("customer"))
            localStorage.setItem("token", token)
            window.location= "/login"
        } else {
            this.setState({message: response.data.message})
        }
    })
    .catch(error => console.log(error))
  }
    render(){
        return(
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          { !this.state.logged ? 
            (
              <div className="alert alert-danger mt-1">
                  { this.state.message }
              </div>
          ) : null }
          <form onSubmit={event => this.Registrasi(event)} className="mt-8 space-y-6">
            <input type="hidden" name="remember" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="email-address" className="sr-only">
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  value={this.state.nama}
                  onChange={this.bind}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nama"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.bind}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.bind}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                  Forgot your password?
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
Register
              </button>
            </div>
          </form>
        </div>
      </div>
        //    <div className="container d-flex h-100 justify-content-center align-items-center">
        //         <div className="col-sm-6 card my-5">
        //             <div className="card-header bg-success text-white text-center">
        //                 <h4>Tour Guide</h4>
        //                 <strong className="text-warning">Member Sign In</strong>
        //             </div>
        //     <div className="card-body">
        //         { !this.state.logged ? 
        //                         (
        //     <div className="alert alert-danger mt-1">
        //         { this.state.message }
        //     </div>
        //         ) : null }
        //     <form onSubmit={ev => this.Login(ev)}>
        //         <input type="text" className="form-control mb-1" placeholder="Type username..."value={this.state.username}
        //         onChange={ev => this.setState({username: ev.target.value})} />
        //         <input type="password" className="form-control mb-1" placeholder="Enter your password..."value={this.state.password}
        //         onChange={ev => this.setState({password: ev.target.value})}
        //         autoComplete="false" />
         
        //     <button className="btn btn-block btn-primary mb-1" type="submit">
        //         Sign In
        //     </button>
        //     </form>
        //     </div>
        //                 </div>
        //             </div>
                )
            }
           
        
    }


export default Registrasi;