import React from "react";
import './tabs.scss'

export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1,

        }
    }
    handleChange = (index) => {
        this.setState({ active: index })
        this.props.onChange(index)
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        let{active}=this.props;
        if(active){
            this.setState({
                active:active
            })
        }
    }
    componentDidUpdate(prevProps) {
        console.log('prevProps-------',this.props)
        let{active}=this.props;
        if (prevProps.active !== active) {
        
          if(active){
              this.setState({
                  active:active
              })
          }
        }
      }
    render() {
        let { tabList } = this.props;
        let { active } = this.state;
        return (

            <ul className="nav nav-tabs ab-tabs">
                {tabList.map((data, index) => {
                    return (
                        <li className={`${active === index + 1 ? 'active' : ''}  nav-item`} onClick={() => this.handleChange(index + 1)}>
                          {data}
                        </li>
                    )
                })}

            </ul>
        );
    }
}