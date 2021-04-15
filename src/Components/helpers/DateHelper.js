const monthLookup = function(monthVal) {
  //console.log(monthVal)
  switch (monthVal) {
    case "01":
      return 'January'
    case "02":
      return 'February'
    case "03":
      return 'March'
    case "04":
      return 'April'
    case "05":
      return 'May'
    case "06":
      return 'June'
    case "07":
      return 'July'
    case "08":
      return 'August'
    case "09":
      return 'September'
    case "10":
      return 'October'
    case "11":
      return 'November'
    case "12":
      return 'December'       
    default:
      return monthVal;
  }
}

const dateParser = function(date) {
  let year = date.substring(0, 4);
  let day = date.substring(8, 10);
  let month = monthLookup(date.substring(5, 7));
  let engDate = `${month} ${day}, ${year}`
  return engDate
}

export { dateParser, monthLookup }