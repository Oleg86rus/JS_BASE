export function getDate () {
    let nowDate = new Date();
    nowDate = nowDate.toString().split(' ');
    nowDate = nowDate[1] + ' ' + nowDate[2] + 'th ' + nowDate[3] + ', ' + nowDate[4];
    console.log(nowDate);
    return nowDate;
}