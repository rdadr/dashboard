import React from 'react';
import Table from './Table';
import Style from './Table.module.css'

const TableTickets = () =>{
    const theadData = [" ", "Ticket details", "Castomer name", "Date", "Priority"];

    const tbodyData = [
        {
            id: "1",
            items: [
                " ",
                "Contact Email not Linked",
                "Tom Cruise",
                "May 26, 2019",
                "high"
            ],
        },
        {
            id: "2",
            items: [
                " ",
                "Adding Images to Featured Posts",
                "Mett Damon",
                "May 26, 2019",
                "low"
            ],
        },
        {
            id: "3",
            items: [
                " ",
                "When will I be charged this month",
                "Robert Downey",
                "May 26, 2019",
                "normal"
            ],
        },
    ];
    
    return (
        <div className = {Style.root}>
            <Table theadData={theadData} tbodyData={tbodyData} />
        </div>
    );
}

export default TableTickets;