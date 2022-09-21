import React, { useState } from "react";
import { createNavigation } from '../../../axios/navigationAxios'
import {
    Link,
    useNavigate
} from "react-router-dom";

const NavigationMaster = () => {
    const [form, setForm] = useState({
        title: "",
        icon: ""
    })

    const navigation = useNavigate();

    const submitHandler = () => {
        createNavigation(form);
        navigation('/navigationmaster');
    }

    return (
        <>
            <div className="wrapper">
                <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="btn-group float-right">
                                    <ol className="breadcrumb hide-phone p-0 m-0">
                                        <li className="breadcrumb-item"><Link to="#">Drixo</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                        <li className="breadcrumb-item active">Starter</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Starter</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title end breadcrumb */}

                    <div className="col-lg-12">
                        <div className="card m-b-30">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Silahkan Tambahkan Navigation</h4>
                                <p className="text-muted m-b-30 font-14">
                                    Menu ini untuk menambahkan navigation bagi tampilan di user.
                                </p>

                                <Link to="#" className="btn btn-primary waves-effect waves-light mb-3" data-toggle="modal" data-target="#newTambahNavigation">Tambah Navigation</Link>

                                <div className="table-responsive">
                                    <table className="datatable table table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                        <thead className="text-center">
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Icon Navigation</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>1</td>
                                                <td>12</td>
                                                <td>1</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* START TAMBAH NAVIGATION MODAL */}
            <div className="modal fade" id="newTambahNavigation" tabIndex={-1} aria-labelledby="newTambahNavigationLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newTambahNavigationLabel">Tambah Navigation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <div className="input-group">
                                        <input onChange={(e) => setForm({ ...form, title: e.target.value })} type="text" className="form-control" autoComplete="off" placeholder="Contoh : Home" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="icon">Icon</label>
                                    <div className="input-group">
                                        <input onChange={(e) => setForm({ ...form, icon: e.target.value })} type="text" className="form-control" autoComplete="off" placeholder="Contoh : fa-home" required />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={() => submitHandler()} className="btn btn-primary">Tambah</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END TAMBAH NAVIGATION MODAL */}


        </>
    )
}

export default NavigationMaster