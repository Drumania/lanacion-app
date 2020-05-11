import React from "react";

const DateFormat = (props) => {
  const setDateFormat = (dateToFormat) => {
    const a_date = dateToFormat.split("-");

    let yearDate = a_date[0],
      mounthDate = a_date[1],
      dayDate = a_date[2].slice(0, 2),
      dateFormated = `${dayDate} de ${mounthDate} de ${yearDate}`;

    return dateFormated;
  };

  return <h4 className="com-date">{setDateFormat(props.datePublish)}</h4>;
};

export default DateFormat;
