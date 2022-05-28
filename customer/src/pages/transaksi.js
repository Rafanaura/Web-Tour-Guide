import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
class Transaksi extends React.Component{
    constructor(){  
        super()
        this.state = {
            paket: [], // untuk menyimpan list paket
            nama: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja
        }
        this.state.nama = localStorage.getItem("nama")
    }  
    render(){
       
        return(
            
            <div className="container">
                    <div className="card col-12 mt-2">
                        <div className="card-header bg-primary text-white">
                            <h4>Data Keranjang Belanja</h4>
                        </div>
    
                        <div className="card-body">
                            <h5 className="text-primary">
                                Nama User: { this.state.nama }
                            </h5>
    
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Jenis Paket</th>
                                        <th>Harga</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
    
                                <tbody>
                                    { this.state.paket.map( (item, index) => (
                                        <tr key={index}>
                                            <td>{item.jenis}</td>
                                            <td>Rp {item.harga}</td>
                                            <td>{item.jumlahBeli}</td>
                                            <td>
                                                Rp { item.harga * item.jumlahBeli }
                                            </td>
                                        </tr>
                                    ) ) }
                                </tbody>
                            </table>
    
                            <h4 className="text-danger">
                                Total Harga: Rp {this.state.total}
                            </h4>
                        </div>
                    </div>
                </div>
        )
    }

    initPaket = () => {
        // memanggil data cart pada localStorage
        let tempPaket = []
        if(localStorage.getItem("cart") !== null){
            tempPaket = JSON.parse(localStorage.getItem("cart"))
        }
        
 
        // memanggil data user pada localStorage
        let userName = localStorage.getItem("user")
 
        // kalkulasi total harga
        let totalHarga = 0;
        tempPaket.map((item) => (
            totalHarga += (item.harga * item.jumlahBeli)
        ))
 
        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            paket: tempPaket,
            user: userName,
            total: totalHarga
        })
    }

    componentDidMount(){
        this.initPaket()
    }

    
}


export default Transaksi;