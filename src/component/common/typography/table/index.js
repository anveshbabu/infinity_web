import React from "react";
import { AbIf } from "../../../common";
import Pagination from "react-js-pagination";
export class NormalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginationactive: 1
    };
  }
 
 
  handlePageChange=(pageNumber)=> {
    console.log(`active page is ${pageNumber}`);
    this.setState({ paginationactive: pageNumber });
    this.props.paginationChange(pageNumber)
  }
  render() {
    let {
      pagination = false,
      className = "",
      theadList = "",
      children,
      paginationConfig
    } = this.props;
    let { paginationactive } = this.state;
    return (
      <>
        <table className={`table ${className}`}>
          <thead>
            <tr>
              {theadList.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
        <AbIf show={pagination}>
          {" "}
          {/* <Pagination
            length={paginationLength}
            change={e => this.handlePagenation(e)}
            data={paginationData}
          /> */}
          <Pagination
            activePage={paginationactive}
            itemsCountPerPage={!!paginationConfig?paginationConfig.pageCount:0}
            totalItemsCount={!!paginationConfig?paginationConfig.TotalCount:0}
            pageRangeDisplayed={!!paginationConfig?paginationConfig.btnDisplay:0}
            itemClass="page-item"
            linkClass="page-link"
            innerClass=" custom-pagination pagination"
            nextPageText="Next"
            // nextPageText="Next"
            prevPageText="Previous"
            hideFirstLastPages={true}
            onChange={this.handlePageChange}
          />
        </AbIf>
      </>
    );
  }
}
