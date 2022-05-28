import React from "react"
class PaketList extends React.Component {
    render() {
        return (
            <div>
                {/* <div className="m-3 card">
                    <div className="card-header bg-info text-white">Paket Tour</div>
                    <div className="card-body">
                        <input type="text" className="form-control mb-2" name="search" value={this.state.search}
                            onChange={this.bind} onKeyUp={this.findPaket} placeholder="Pencarian..." />
                    </div>
                </div>
                <div> */}
                   
                    <div className="row justify-content-center">
                        <div className="col-sm-6 m-3">
                            <div className="card">

                                <div className="card-body">
                                    <img src={this.props.gambar} className="card-img-top" id="city" alt="..." />
                                    <h5 className="card-title">{this.props.jenis}</h5>
                                    <p className="card-text">{this.props.wisata}</p>
                                    <p className="card-text">{this.props.harga}</p>
                                    <button className="button" id="button1"
                            onClick={this.props.onCart}>
                                Add To Cart
                            </button>
                            </div>
                        </div>
                    </div>

              </div>
            </div>
        )
    }
}




export default PaketList;