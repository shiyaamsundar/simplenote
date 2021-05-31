export const findtime = (date) => {
  var created_date = new Date(date);

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = created_date.getFullYear();
  var month = months[created_date.getMonth()];
  var date = created_date.getDate();
  var hour = created_date.getHours();
  var min = created_date.getMinutes();
  var sec = created_date.getSeconds();
  var zone = "AM";
  if (hour > 12) {
    hour = hour - 12;
    if (hour.toLocaleString.length <= 1) {
      hour = "0" + hour;
    }
    zone = "PM";
  }
  var time =
    date +
    ",  " +
    month +
    " " +
    year +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec +
    " " +
    zone;
  return time;
};
