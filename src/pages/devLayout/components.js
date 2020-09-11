import React from "react";
import { NormalButton, NormalInput, NormalTextarea, NormalCheckbox, NormalSelect, NormalTable,NormalDropdown } from '../../component/common/index'
// import information from '../../assets/images/Information.svg'NormalSearch

export class Components extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                Password: '',
                checkbox: false,
                textarea: '',
                select: ''
            },
            tabelConfig:{
                pagination:{
                  start:0,
                  end:4
                },
                theadList: [
                  "S. No",
                  "User Name",
                  "Requests",
                  "Contact Number",
                  "Location",
                  "Requests Status",
                  ""
                ],
                tbodyList: [
                  {
                    name: "Anvesh",
                    userImg: "/images/user.png",
                    request: "ISP, Newspaper",
                    phoneNumber: "+625 5134 6584",
                    location: "Chennai",
                    status: "Processing"
                  },
                  {
                    name: "Soundhar",
                    userImg: "/images/user.png",
                    request: "ISP, Newspaper",
                    phoneNumber: "+625 5134 6584",
                    location: "Chennai",
                    status: "Processing"
                  },
                  {
                    name: "Appu",
                    userImg: "/images/user.png",
                    request: "ISP, Newspaper",
                    phoneNumber: "+625 5134 6584",
                    location: "Chennai",
                    status: "Processing"
                  },
                  {
                    name: "Vijay",
                    userImg: "/images/user.png",
                    request: "ISP, Newspaper",
                    phoneNumber: "+625 5134 6584",
                    location: "Chennai",
                    status: "Completed"
                  },
                  {
                    name: "Mani",
                    userImg: "/images/user.png",
                    request: "ISP, Newspaper",
                    phoneNumber: "+625 5134 6584",
                    location: "Chennai",
                    status: "Completed"
                  },
                  {
                    name: "Miraha",
                    userImg: "/images/user.png",
                    request: "ISP, Newspaper",
                    phoneNumber: "+625 5134 6584",
                    location: "Chennai",
                    status: "Completed"
                  },
                  {
                    name: "Murali",
                    userImg: "/images/user.png",
                    request: "ISP, Newspaper",
                    phoneNumber: "+625 5134 6584",
                    location: "Chennai",
                    status: "Processing"
                  }
                ],
              }

        };
    }
    handleInputChange = (event) => {
        console.log(event)
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value)
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
        // this.setState({
        //     [name]: value
        // });
    }
    formSubmit = () => {
        console.log(this.state.form)
    }
    render() {
        let { form,tabelConfig } = this.state;
        let  optionsList= [
            {
              icon: "icon-view",
              label: "View Profile"
            },
            {
              icon: "icon-edit",
              label: "Edit"
            },
            {
              icon: "icon-writing",
              label: "Mark as Completed"
            },
            {
              icon: "icon-delete",
              label: "Delete"
            }
          ]
        return (
            <>
                <div class="card" >
                    <div class="card-header">
                        <h4>Form</h4>
                    </div>



                    <div className="row">
                        <div className="col-md-12">

                            <div className="card-body">
                                <div className="form-group">
                                    <label >Email</label>
                                    <NormalInput value={form.email} name='email' onChange={this.handleInputChange} />
                                    <small>We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <NormalInput value={form.password} name='password' type={'password'} onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label >Textarea</label>
                                    <NormalTextarea value={form.textarea} name='textarea' onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label >Textarea</label>
                                    <NormalSelect value={form.select} name='select' onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <NormalCheckbox checked={form.checkbox} label='Check me out' name='checkbox' onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <NormalButton label='Submit' onClick={this.formSubmit} />
                                </div>
                            </div>



                        </div>
                    </div>

                </div>


                <div class="card" >
                    <div class="card-header">
                        <h4>table</h4>
                    </div>



                    <div className="row">
                        <div className="col-md-12">

                            <div className="card-body">
                                <NormalTable
                                    className="table-borderless"
                                    pagination={true}
                                    paginationLength={4}
                                    theadList={tabelConfig.theadList}
                                    tbodyList={tabelConfig.tbodyList}
                                    tableChange={e => this.handleTable(e)}
                                >
                                    {tabelConfig.tbodyList.map(
                                        (
                                            { name, userImg, request, phoneNumber, location, status },
                                            index
                                        ) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img className="mr-2" alt="" src={userImg}></img>
                                                        {name}
                                                    </td>
                                                    <td className="text-primary">{request}</td>
                                                    <td>{phoneNumber}</td>
                                                    <td>{location}</td>
                                                    <td className={status === 'Completed' ? 'text-success' : 'text-warning'}>{status}</td>
                                                    <td>
                                                        <NormalDropdown
                                                            optionsList={optionsList}
                                                            alinement="right"
                                                            caret={false}
                                                            className="bg-transparent p-0 no-caret"
                                                            labelIcon="icon-show-more"
                                                            onClick={this.handleMoreOptions}
                                                        />
                                                    </td>
                                                </tr>
                                            )
                                    )}

                                </NormalTable>
                            </div>



                        </div>
                    </div>

                </div>

            </>
        );
    }

}