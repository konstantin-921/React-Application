const currentDate = () => {
  const date = new Date();
  const DAYNAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const day = date.getDay();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }
  const newDate = `${DAYNAMES[day !== 0 ? day - 1 : 6]} ${hours}:${minutes}`;
  return newDate;
};

export default currentDate;
