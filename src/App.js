// import React, { Component } from 'react'

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             nama: 'RPL',
//             jumlah: 0
//          }
//     }

//     ubah_state = () => {
//         this.setState({ nama: 'Rekayasa Perangkat Lunak' })
//     }
//     tambah = () => {
//         this.setState({ jumlah: this.state.jumlah+1 })
//     }
    // kurang = () => { 
    //     if(this.state.jumlah > 0  ) {
    //         this.setState({ jumlah: this.state.jumlah-1 })
    //     } 
            
//     }

//     render() { 
//         return ( 
//             <>
//             {/* <h1>{this.state.nama}</h1>
//             <button onClick={this.ubah_state}>Ubah</button> */}

//             <h1>{this.state.jumlah}</h1>
//             <button onClick={this.tambah}>Tambah</button>
//             <button onClick={this.kurang}>Kurang</button>
//             </>
//          );
//     }
// }
 
// export default App;





























import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gambar from './images/f-16 s.jpg'
import './App.css'

function Kartu(props) {
    return ( 
        <>
        <div class="card m-5">
  <img src={Gambar} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.nama}</h5>
    <p className='text-danger'>Rp.{props.harga}</p>
    <hr />
    <div className="row">
        <div className="col">
            <button  onClick={props.kurang} className='btn btn-primary'>-</button>
        </div>
        <div className="col">
            <input value={props.jumlah} type="text" className='form-control '/>
        </div>
        <div className="col">
            <button onClick={props.tambah} className='btn btn-primary'>+</button>
        </div>
        <br />
        Total:
        <div>
        <p className='ip bg-danger text-light'>{props.hasil}</p>    
        </div><hr />
    </div>
    <a href="#" className="btn btn-primary">PreOrder</a>
  </div>
</div>
        </>
     );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama:"F-16 (skin)" ,
            harga:100000 ,
            jumlah:0,
            hasil:0
        }
    }

    tambah = () => {
        this.setState({ jumlah: this.state.jumlah+1 })
        this.setState({ hasil: (this.state.jumlah+1)*this.state.harga })
    }
    kurang = () => { 
        if(this.state.jumlah > 0  ) {
        this.setState({ jumlah: this.state.jumlah-1 })
        this.setState({ hasil: (this.state.jumlah-1)*this.state.harga })

        } 
    }
    render() { 
        return ( 
            <>
            <Kartu nama={this.state.nama} harga={this.state.harga} tambah={this.tambah} jumlah={this.state.jumlah} kurang={this.kurang} hasil={this.state.hasil}/>
            </>
         );
    }
}
 
export default App;