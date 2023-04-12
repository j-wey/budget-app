export const formatDate = (date) => {
    const timestamp = Math.ceil(Date.parse(date))
    return new Intl.DateTimeFormat('en-US').format(timestamp)
}