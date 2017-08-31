import React from 'react';

export class ProfilePage extends React.Component {
    render() {
        return (
            <div className="profile col-lg-12 col-md-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="media">
                            <div className="">
                                <img className="thumbnail img-responsive"
                                     src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" alt=""
                                     width="300px" height="300px"/>
                            </div>
                            <div className="text-right">
                                <button className="btn btn-lg btn-primary">
                                    <span className="glyphicon glyphicon-edit"></span>
                                </button>
                            </div>
                            <div className="media-body">
                                <hr />
                                <h3><strong>Bio</strong></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus,
                                    non
                                    ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
                                <hr />
                                <h3><strong>Household</strong></h3>
                                <p>Earth</p>
                                <hr />
                                <h3><strong>Gender</strong></h3>
                                <p>Fluid</p>
                                <hr />
                                <h3><strong>Birthday</strong></h3>
                                <p>January 01 1901</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}