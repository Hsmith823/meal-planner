import { BsHandIndex } from 'react-icons/bs'
import './Calendar.css'
import Cell from './Cell'
import moment from 'moment'
import { useState, useEffect } from 'react'




function Calendar()  {
  const [cells, setCells] = useState<Cell[]>([]);
  const [selectedMoment, setSelectedMoment] = useState<moment.Moment>(moment());
  const selectedMonth: number = 11;
  const selectedYear: number = 2026;
  const totalCells = 42; // days in a month can be spread across 6 weeks therefore totalCells = 7 days * 6
  const today = new Date();

  useEffect(() => {
    // On load of component, the days for the selected calendar month need to be fetched
    setSelectedMoment(moment(`${selectedMonth}/${selectedYear}`, 'MM/YYYY'))

    const daysThisMonth: number = selectedMoment.daysInMonth()
    const firstDayOfMonth: number = selectedMoment.startOf('month').weekday()

    // convert first day of the month to the cell index
    const firstDayCellIndex: number = firstDayOfMonth === 0 ? 6 : firstDayOfMonth;

    const _cells = []
    let _dateCounter: number = 1

    for (let _cellIndex = 0; _cellIndex < totalCells; _cellIndex++) {
      // Note: _cellIndex = 0 if the first Monday cell in the table

      // For the days on the first week of the month which are not part of this month
      if ((_cellIndex < firstDayCellIndex) || (_dateCounter > daysThisMonth)) {
        _cells.push(new Cell({day: null, isToday: null}))
      } else {
        const cellData = {day: _dateCounter, isToday: false}

        if (today.getDate() === _dateCounter && (today.getMonth() + 1) === selectedMonth && today.getFullYear() === selectedYear) {
          cellData.isToday = true
        }

        _cells.push(new Cell(cellData))
        _dateCounter++
      }
    }

    setCells(_cells)
  }, [selectedMonth, selectedYear]);

  return (
    <div id="calendar-component">
      <div id="info-pannel">
        <div id="selected-date">{today.toLocaleString('default', { month: 'long' })} {selectedYear}</div>
        <div id="month-picker"></div>
      </div>

      <div id="calendar-container">
        <div id="title-row">
          <div className="title-cell first-column">Mon</div>
          <div className="title-cell">Tue</div>
          <div className="title-cell">Wed</div>
          <div className="title-cell">Thur</div>
          <div className="title-cell">Fri</div>
          <div className="title-cell">Sat</div>
          <div className="title-cell">Sun</div>
        </div>

        <div id="date-cells-container">
          {
            cells.map((_cell: Cell, index: number) => {
              let classes = "cell"

              if (index % 7 === 0 || index === 0) {
                classes += " first-column"
              }

              if (index > 34) {
                classes += " last-row"
              }

              if (_cell.day === null) {
                classes += " no-date"
              }

              if (_cell.isToday) {
                classes += " today"
              }

              return <div className={classes} key={index}>
                <div className="day-data">
                  {_cell.day}
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Calendar
