import React, {Component} from "react"
 import Card from "../../components/card"
 import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
// // import background from "../img/jogja.jpg";
// // import Cover from "../components/cover"

class WisataBanyuwangi extends Component {
    constructor() {
        super()
        this.state = {
            paket: [{
            
            kode : "1",
            jenis : "Paket 1",
            wisata: "Kawah Ijen, Taman Baluran",
            gambar : "https://media.istockphoto.com/photos/landscape-photography-baluran-mount-view-picture-id1310039470?b=1&k=20&m=1310039470&s=170667a&w=0&h=-UDjH2yMuaj1VzMbHeMPJsIsJrZwAOFZOtHjAkiN-14=",
            harga: 4500000,
        },
        {
            kode: "2",
            jenis : "Paket 2",
            wisata: "Pantai Pulau Merah, De Djawatan",
            gambar : "https://media.istockphoto.com/photos/pulau-merah-beach-picture-id1296717642?k=20&m=1296717642&s=612x612&w=0&h=rAjYWKU9gymk6o-aoEqpCjcgJHEd-FkOj33ic7PPxKI=",
            harga: 3000000,
        },
            ],

            action: "",
            kode: "",
            jenis: "",
            wisata: "",
            gambar : "",
            harga: 0,
            selectedItem: null,
        }
        this.state.filterPaket = this.state.paket
    }
    Add = () => {
        // menampilkan komponen modal
        $("#modal_paket").show()
        this.setState({
            kode: Math.random(1, 10000000),
            jenis: "",
            wisata: "",
            harga: 0,
            gambar : "",
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_paket").show()

        this.setState({
            kode: item.kode,
            jenis: item.jenis,
            wisata: item.wisata,
            harga: item.harga,
            gambar : item.gambar,
            action: "update",
            selectedItem: item
        })
    }


    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempPaket = this.state.paket

        if (this.state.action === "insert") {
            // menambah data baru
            tempPaket.push({
                kode: this.state.kode,
                jenis: this.state.jenis,
                wisata: this.state.wisata,
                gambar: this.state.gambar,
                harga: this.state.harga
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempPaket.indexOf(this.state.selectedItem)
            tempPaket[index].kode = this.state.kode
            tempPaket[index].jenis = this.state.jenis
            tempPaket[index].wisata= this.state.wisata
            tempPaket[index].gambar = this.state.gambar
            tempPaket[index].harga = this.state.harga
        }

        this.setState({ paket : tempPaket })

        // menutup komponen modal_buku
        $("#modal_paket").hide()
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempPaket = this.state.paket
            // posisi index data yg akan dihapus
            let index = tempPaket.indexOf(item)

            // hapus data
            tempPaket.splice(index, 1)

            this.setState({ paket : tempPaket })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempPaket = this.state.paket
            let result = tempPaket.filter(item => {
                return item.jenis.toLowerCase().includes(keyword) ||
                    item.wisata.toLowerCase().includes(keyword)
            })

            this.setState({ filterPaket: result })
        }
    }

    Close = () =>{
        $("#modal_paket").hide()
    }

    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempPaket = []
    
        // cek eksistensi dari data cart pada localStorage
        if(localStorage.getItem("cart") !== null){
            tempPaket = JSON.parse(localStorage.getItem("cart"))
            // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }
    
        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempPaket.find(item => item.kode === selectedItem.kode)
    
        if(existItem){
            // jika item yang dipilih ada pada keranjang belanja
            window.alert("Anda telah memilih item ini")
        }else{
            // user diminta memasukkan jumlah item yang dibeli
            let promptJumlah = window.prompt("Masukkan jumlah item yang beli","")
            if(promptJumlah !== null && promptJumlah !== ""){
                // jika user memasukkan jumlah item yg dibeli
    
                // menambahkan properti "jumlahBeli" pada item yang dipilih
                selectedItem.jumlahBeli = promptJumlah
                
                // masukkan item yg dipilih ke dalam cart
                tempPaket.push(selectedItem)
    
                // simpan array tempCart ke localStorage
                localStorage.setItem("cart", JSON.stringify(tempPaket))
            }
        }        // user diminta memasukkan jumlah item yang dibeli
        // let promptJumlah = window.prompt("Masukkan jumlah item yang beli","")
        // if(promptJumlah !== null && promptJumlah !== ""){
            // jika user memasukkan jumlah item yg dibeli

            // menambahkan properti "jumlahBeli" pada item yang dipilih
            // selectedItem.jumlahBeli = promptJumlah
            
            // masukkan item yg dipilih ke dalam cart
            // tempPaket.push(selectedItem)
            // simpan array tempCart ke localStorage
            // localStorage.setItem("cart", JSON.stringify(tempPaket))
            // window.location = "/transaksi"
    
    }
    render() {
        return (
            <div>
            <input type="text" className="form-control my-2" placeholder="Pencarian"
                value={this.state.keyword}
                onChange={ev => this.setState({keyword: ev.target.value})}
                onKeyUp={ev => this.searching(ev)}
                 />
                <div className="row">
                    {this.state.filterPaket.map((item, index) => (
                        <Card
                            key={index}
                            jenis={item.jenis}
                            wisata={item.wisata}
                            harga={item.harga}
                            gambar={item.gambar}
                            onCart={ () => this.addToCart(item)}    
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()} data-toggle="modal" data-target="#modal_paket">
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_paket">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><b>Form</b></h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.Close()}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Jenis Paket
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.jenis}
                                    onChange={ ev => this.setState({jenis: ev.target.value}) }
                                    required />
                                    
                                    Wisata
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.wisata}
                                    onChange={ ev => this.setState({wisata: ev.target.value}) }
                                    required />
                                    
                                    Harga Paket
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga: ev.target.value}) }
                                    required />
                                    
                                    Gambar Item
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.gambar}
                                    onChange={ ev => this.setState({gambar: ev.target.value}) }
                                    required />
 
                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>

                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
)
}
}
       
export default WisataBanyuwangi;