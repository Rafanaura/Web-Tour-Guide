import React from "react"
import home from "../components/img/home.jpg"

class Home extends React.Component{
  constructor (){
    super()
    this.state = {
      token : "",
      nama : "",
      username : "",
      password : "",
    }
    if (localStorage.getItem('token')) {
      // if (localStorage.getItem('role') === "admin") {
      this.state.token = localStorage.getItem('token')
      this.state.nama = localStorage.getItem('nama')
      // }else{
      //   window.alert("You are not an admin")
      //   window.location = '/login'
      // }
    } else {
      window.location = "/login"
    }
  }
    render(){
       return(
        <div className='w-full h-screen relative'>
        <img className='bg-cover bg-no-repeat bg-center bg-fixed' src={home} alt='/' />

        <div className='absolute w-full h-full top-0 left-0-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1>Tour Guide</h1>
          <h2 className='py-4 text-base'>Hello, {this.state.nama} Together we visit the beautiful place</h2>
          <form
            className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
            rounded-md text-black bg-gray-100/90'
          >
            <div>
              <input
                className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                    '
                type='text'
                placeholder='Search Destinations'
              />
            </div>
            <div>
              {/* <button>
                <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
              </button> */}
            </div>
          </form>
        </div>
      </div>
        )
    }
}

export default Home;