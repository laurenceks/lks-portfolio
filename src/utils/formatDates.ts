export const sortingDateToDate = (timestamp = "") =>
    `${timestamp.slice(8, 10)}/${timestamp.slice(5, 7)}/${timestamp.slice(
        2,
        4
    )}`;
export const sortingDateToMonthYear = (timestamp = "") =>
    `${
        [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ][parseInt(timestamp.slice(5, 7), 10)]
    } ${timestamp.slice(0, 4)}`;
