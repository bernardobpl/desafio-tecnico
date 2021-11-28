import { forwardRef } from "react";
import { RefProps } from "../../RefProps";
import "./styles.css";
import { BiTrash, BiTrash as Trash} from "react-icons/bi";

export interface Cell {
  field: string;
  value: string;
}

export interface TableProps {
  headers: Cell[];
  rows: Cell[][];
  columnSpacing: Cell[];
  isDeletable?: boolean;
  onDelete?: () => void
  className?: string;
}

const Table = forwardRef(({headers, rows, columnSpacing, isDeletable=false, onDelete, className}: TableProps, ref?: RefProps<HTMLDivElement>) => {

  return (
    <div className={`table-container ${className}`} ref={ref}>

      <div className="table-header">
        {
          headers.map(({field, value}) => (
            <div 
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
          rows.map(row => (
            <div className="table-row">
              {
                row.map(({field, value}) => (
                  <div 
                    className="table-cell"
                    style={{
                      width: columnSpacing.find(column => column.field === field)?.value
                    }}  
                  >
                    <span className="table-cell-value">{value}</span>
                  </div>
                ))
              }
              { isDeletable && <BiTrash className="table-row-btn-delete" onClick={onDelete}/> }
            </div>
          ))
        }
      </div>

    </div>
  )
})

export { Table };