import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSuperAdmin = () => {
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

                    {/* Start Content */}
                    <div class="row layout-top-spacing">
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                            <div class="widget widget-five">
                                <div class="widget-content">
                                    <div class="header">
                                        <div class="header-body">
                                            <h6>JUMLAH SEPATU</h6>
                                        </div>
                                    </div>
                                    <div class="w-content">
                                        <div class="">
                                            <p class="task-left">
                                                0
                                            </p>
                                            <p class="task-completed"><span>Total Sepatu adalah : 0 </span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                    {/* End Content */}

                </div> {/* end container */}
            </div>
            {/* end wrapper */}
        </>
    )
}

export default DashboardSuperAdmin;