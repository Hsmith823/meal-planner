class Cell {
    // Day to display in the cell. Null if this cell does not correspond to a date in the month
    public day: number | null;

    constructor(props: { day: number | null; }) {
        this.day = props.day
    }
}

export default Cell;
