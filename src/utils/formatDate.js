import moment from "moment"

export const formatDate = (date) => {
    const momentDate = moment(date)
    const formattedDate = momentDate.toDate()
    return new Intl.DateTimeFormat('en-US').format(formattedDate)
}