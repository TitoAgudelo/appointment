export default ({ filters, selectedFilter }) => {
    const isSelectedFilter = filter => filter === selectedFilter
    return `
      <div id="filter-wrapper">
        <p>Filter calendar by:</p>
        <div class="filter-calendar">
          ${filters.map(filter => `
            <label>
                <input class="qa-button" type="radio" name="calendar-filter" value="${filter.value}" ${isSelectedFilter(filter.value) ? 'checked' : ''}>
                ${filter.label}
            </label>
    `     ).join('')}
        </div>
      </div>

    `
}
