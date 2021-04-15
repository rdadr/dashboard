import React from 'react';
import Sidebar from '../../Sidebar';
import TableTickets from '../../Table'

const Tickets = () =>{
  return (
    <div>
      <Sidebar />
     <h1>Tickets</h1>
     <div>
     <TableTickets />
     </div>
    </div>
  );
}
export default Tickets
