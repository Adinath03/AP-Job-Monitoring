export default function Form({
  searchDay,
  setSearchDay,
  holidayDay,
  setHolidayDay,
  onWeekdaySubmit,
}) {
  return (
    <div className="form">
      <form>
        <label> Weekday</label>
        <select
          id="searchDay"
          value={searchDay}
          onChange={(e) => setSearchDay(e.target.value)}
        >
          <option value="Select Day" disabled>
            Select Day
          </option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>

        <label> Is there a holiday in this week or next week?</label>
        <select
          id="searchDay"
          value={holidayDay}
          onChange={(e) => setHolidayDay(e.target.value)}
        >
          <option value="Select Day" disabled>
            Select Day
          </option>
          <option value="No Holiday">No Holiday</option>
          <option value="Next Week Monday">Next Week Monday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
        </select>
      </form>
    </div>
  );
}
