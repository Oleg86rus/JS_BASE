/*
Часто мы записываем даты в следующем формате “день.месяц.год”. Сейчас вам необходимо создать функцию getDateFormat, которая будет приводить дату к этому формату. Она принимает 2 параметра:

date - объект даты, который нужно перевести в данный текстовый формат “день.месяц.год”
separator - разделитель дня, месяца и года. По умолчанию он должен быть равен точке “.” Если в качестве разделителя будет передано тире “-”, то формат уже должен быть таким “день-месяц-год”
Также, учтите, что номер месяца в JavaScript считается с 0 до 11. Кроме этого, если день либо месяц возвращают однозначное число, то вам к нему необходимо добавить 0. То есть результат должен быть не таким “5.5.2001”, а “05.05.2001”.
 */

const date = new Date(2000, 1, 2)
const getDateFormat = (date, separator = '.') => {
    let dateFormate = '';
    let monthFormate = '';
    console.log(date);
    const getCorrectDateFormat = (getDayOrMonth, format) => {
        if (format < 10 && format === date.getDate()) {
            getDayOrMonth += '0' + format;
        } else if (format < 10 && format === date.getMonth()) {
            getDayOrMonth += '0' + (format + 1);
        } else if (format >= 10 && format === date.getMonth()) {
            getDayOrMonth += (format + 1);
        } else {
            getDayOrMonth += format;
        }
        return getDayOrMonth;
    };
    dateFormate = getCorrectDateFormat(dateFormate, date.getDate());
    monthFormate = getCorrectDateFormat(monthFormate, date.getMonth());
    console.log(getCorrectDateFormat(dateFormate, date.getDate()));
    console.log(getCorrectDateFormat(monthFormate, date.getMonth()));
    console.log(dateFormate);
    console.log(monthFormate);
    return dateFormate + separator + monthFormate + separator + date.getFullYear();
}
console.log(getDateFormat(date, '-'));