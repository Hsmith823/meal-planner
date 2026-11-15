class Cell {
    // Day to display in the cell. Null if this cell does not correspond to a date in the month
    public day: number | null;
    public isToday: boolean;

    constructor(props: { day: number | null, isToday: boolean | null }) {
        this.day = props.day
        this.isToday = !!props.isToday
    }
}

export default Cell;
