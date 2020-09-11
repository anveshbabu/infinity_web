import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { NormalButton } from '../../index';
import './modal.scss';
export class Dialog extends Component {
    render() {

        return (
            <Modal isOpen={this.props.show} className="modal-dialog-centered app-dialog">
                <ModalBody className="text-center">
                    {/* <div className="modal-header p-3 ">

                        <i onClick={() => this.props.closeDialog(false)} className="fas fa-times"></i>
                    </div> */}
                      <button type="button" onClick={() => this.props.closeDialog(false)} className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <div className="center-content">
                  
                        {/* <div className="row">
                            <div class="col-md-12">
                           
                            </div>
                        </div> */}
                        <h4>{this.props.title}</h4>
                        <p className="dialog__txt">{this.props.message}</p>
                        {this.props.type !== 'alert' ?
                            (
                                <>
                                    <NormalButton
                                        onClick={() => this.props.closeDialog(true)}
                                        outline={true}
                                        btn={true}
                                        confirmButton={true}
                                        className={this.props.btn ? "btn-large mb-2" : 'd-none'}
                                        label={this.props.confirmButton ? `${this.props.confirmButton}` : 'yes'}

                                    />
                                    <NormalButton
                                        onClick={() => this.props.closeDialog(false)}
                                        outline={true}
                                        cancelButton={true}
                                        className={this.props.btn ? "btn-large mb-2" : 'd-none'}
                                        label={this.props.cancelButton ? `${this.props.cancelButton}` : 'no'}
                                    />
                                </>
                            )
                            :
                            (

                                <NormalButton
                                    onClick={() => this.props.closeDialog(true)}
                                    className=""
                                    label={this.props.buttons ? this.props.buttons.cancel.text : 'OK'}
                                />
                            )
                        }
                    </div>
                    {/* <div className="dialog-footer p-2 modal-footer">
                        
                    </div> */}
                </ModalBody>
            </Modal>
        );
    }
}
