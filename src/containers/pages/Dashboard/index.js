import React from 'react'
import firebase from '../../../config/firebase';

const Dashboard = () => {


    
    return (
        <div className="container mt-5">
            <h3>Dashboard</h3>
            <div className="col-6">
                <p>Product</p>
                    <input className="form-control" placeholder="type product name" />
                    <p>Category</p>
                    <input className="form-control" placeholder="type cagory" />
                    <p>harga</p>
                    <input className="form-control" placeholder="type harga" />
                    <br />
                    <button className="btn btn-primary">Save</button>
            </div>
           <hr />
           <table class="table table-striped table-hover">
                <thead>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Harga</th>
                    <th>Action</th>
                </thead>
                </table>
        </div>
    )
}

export default Dashboard
