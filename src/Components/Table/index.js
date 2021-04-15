import React from 'react';
import TableRow from './TableRow';
import TableHeadItem from './TableHeadItem';
// import Style from './Table.module.css'

const Table = ({theadData, tbodyData, customClass}) =>{
    return (
         <table className={customClass}>
             <thead>
                 <tr>
                    {theadData.map((h)=>{
                        return <TableHeadItem key={h} />;
                    })}
                 </tr>
             </thead>
             <tbody>
                 {tbodyData.map((item) =>{
                     return <TableRow key={item.id} data={item.items} />;
                 })}
             </tbody>
         </table>  
    );
}

export default Table