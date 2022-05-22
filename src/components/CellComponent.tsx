import React, { FC } from 'react';
import { Cell } from './models/Cell';

interface CellProps {
    handleClick: (cell: Cell) => void;
    cell: Cell;
    selected: boolean;
}

const CellComponent: FC<CellProps> = ({cell, selected, handleClick}) => {
    return (
        <div 
            className={['cell', cell.color, selected ? "selected" : ''].join(' ')}
            onClick={() => handleClick(cell)}
            style={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div>
    )
}

export default CellComponent;