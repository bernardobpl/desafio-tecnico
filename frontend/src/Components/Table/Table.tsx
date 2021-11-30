import { forwardRef } from "react";
import { RefProps } from "../../RefProps";
import "./styles.css";
import { BiTrash as Trash} from "react-icons/bi";

export interface Cell {
  field: string;
  value: string;
}

export interface TableProps {
  headers: Cell[];
  rows: Cell[][];
  columnSpacing: Cell[];
  isDeletable?: boolean;
  onDelete?: (id: number) => void
  className?: string;
}

const Table = forwardRef(({headers, rows, columnSpacing, isDeletable=false, onDelete, className}: TableProps, ref?: RefProps<HTMLDivElement>) => {

  return (
    <div className={`table-container ${className}`} ref={ref}>

      <div className="table-header">
        {
          headers.map(({field, value}) => (
            <div 
              key={field+value}
              className="table-cell-header" 
              style={{
                width: columnSpacing.find(column => column.field === field)?.value
              }}
            >
              <span className="table-cell-header-value">{value}</span>
            </div>
          ))
        }
      </div>

      <div className="table-body">
        {
          rows.map((row,index) => (
            <div key={index} className="table-row">
              {
                row.map(({field, value}) => (
                  <div 
                    key={field+value}
                    className="table-cell"
                    style={{
                      width: columnSpacing.find(column => column.field === field)?.value
                    }}  
                  >
                    <span className="table-cell-value">{value}</span>
                  </div>
                ))
              }
              { isDeletable && 
                  <Trash 
                    className="table-row-btn-delete" 
                    onClick={() => onDelete && onDelete( parseInt(row.find(column => column.field === "Id")?.value || "0") )}
                  /> 
              }
            </div>
          ))
        }
      </div>

    </div>
  )
})

export { Table };