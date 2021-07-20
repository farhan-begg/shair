import React from 'react'
import Data from './Data.json'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'

const DataList = () => {
    // boostrap table to display data
    const columns = [
        {dataField:'Make_ID', text: 'Make ID',filter: textFilter(), sort: true, },
        {dataField:'Make_Name', text: 'Make Name',filter: textFilter(), sort: true, },
        {dataField:'Model_ID', text: 'Model ID',filter: textFilter(), sort: true,  },
        {dataField:'Model_Name', text: 'Car Name',filter: textFilter(), sort: true},
        { dataField:'VehicleTypeName' , text: 'Car Type',filter: textFilter(), sort: true},
        { dataField:'Model_Year', text: 'Vehicle Year', sort: true,filter: textFilter()  }
    ]
    // boostrap paginatation 
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 30,
        lastPageText: '>>',
        firstPageText:'<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function(page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage)

        },
        onSizePerPageChange: function(page, sizePerPage){
            console.log('page', page);
            console.log('sizePerPage', sizePerPage)
        }
    })
    return (
        <div>
            <BootstrapTable 
                bootstrap4 
                keyField="Make_ID" 
                columns={columns} 
                data={Data.Results}  
                pagination={pagination} 
                filter={filterFactory()}
                striped
                condensed
                hover/>
        </div>
    )
}

export default DataList
