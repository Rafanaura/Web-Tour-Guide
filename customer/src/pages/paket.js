import React from "react"
import {Link} from "react-router-dom"
import bwi from "../components/img/banyuwangi.jpg";
import bandung from "../components/img/bandung.avif"
import bali from "../components/img/bali.jpg"
import jogja from "../components/img/jogja.jpg"

// import $ from 'jquery';
// // import background from "../img/jogja.jpg";
// // import Cover from "../components/cover"

class Paket extends React.Component {
    constructor() {
        super()
        this.state = {
            paket: [], //array paket
            kode: "",
            kota: "",
            wisata: "",
            kendaraan: "",
            harga: "",
            gambar: "",
            action: "",
            search: "",

        }
    }
    render() {
        return (
            <div>
                <div className="m-3 card">
                    <div className="card-header bg-info text-white">Paket Tour</div>
                    {/* <div className="card-body">
                        <input type="text" className="form-control mb-2" name="search" value={this.state.search}
                            onChange={this.bind} onKeyUp={this.findPaket} placeholder="Pencarian..." />
                    </div> */}
                </div>
                <div>
                   
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">

                                <div className="card-body">
                                    <img src={bwi} className="card-img-top" id="city" alt="..." />
                                    <h5 className="card-title">Banyuwangi</h5>
                                    <p className="card-text">With natural experience, travel yourself </p>
                                    <Link className="button" id="button1" to="/paket/banyuwangi">Go somewhere</Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                <img src={bandung} className="card-img-top" id="city" alt="..." />
                                    <h5 className="card-title">Bandung</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link className="button" id="button1" to="/paket/banyuwangi">Go somewhere</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card">

                                <div className="card-body">
                                    <img src={bali} className="card-img-top" id="city" alt="..." />
                                    <h5 className="card-title">Bali</h5>
                                    <p className="card-text">With natural experience, travel yourself </p>
                                    <Link className="button" id="button1" to="/paket/banyuwangi">Go somewhere</Link>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                <img src={jogja} className="card-img-top" id="city" alt="..." />
                                    <h5 className="card-title">Jogjakarta</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link className="button" id="button1" to="/paket/banyuwangi">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}




export default Paket;