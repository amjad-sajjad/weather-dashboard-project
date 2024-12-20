const getFormattedDate = (time) => {
    const date = new Date(time);
    //check as their time and corresponding date is string, if it is not a number then throw an error:
    if(isNaN(date.getTime())){
        throw new Error("Invalid time input")
    }
    const dateObject = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    }
    const formattedDate = new Intl.DateTimeFormat("en-us",dateObject).format(date);

    const timeObject = {
        hour:"numeric",
        minute:"numeric"
    }
    const formattedTime = new Intl.DateTimeFormat("en-us",timeObject).format(date);

    return `${formattedTime} - ${formattedDate}`

}
export {getFormattedDate};