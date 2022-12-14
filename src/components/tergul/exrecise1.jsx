import React, { Component } from 'react';

class Exrecise1 extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 5</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 6</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 7</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 8</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">exrcise 9</a>
                    </li>
                </ul>
                <br />
                <form>
                    <div className="d-inline-flex justify-content-center flex-column ">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>
                        <button type="button" on class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Greet me
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Exrecise1;
