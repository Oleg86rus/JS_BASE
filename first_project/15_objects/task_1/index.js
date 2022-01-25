/*
Вам необходимо создать новый массив onlineUsers, который будет содержать объекты только тех пользователей, у которых status равен “online”.

После выведите через alert сообщение “Сейчас в онлайн следующие пользователи: usersOnlineNames”, где usersOnlineNames - строка, в которой имена пользователей отображаются через запятую.

Для кода выше результат должен быть следующим: “Сейчас в онлайн следующие пользователи: David, Bob”.
 */
const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];
let onlineUsers = [];
let userOnlineNames = '';
for (let i = 0; i < users.length; i++) {
    if (users[i].status === 'online') {
        onlineUsers.push(users[i]);
        userOnlineNames += `${users[i].username}, `;
    }
}
userOnlineNames = userOnlineNames.slice(0, (userOnlineNames.length - 2));
console.log('Строка с именами пользователей online: ', userOnlineNames)
console.log('Новый массив с объектами, чей статус online: ', onlineUsers)
console.log(`Сейчас в онлайн следующие пользователи: ${userOnlineNames}`);
alert(`Сейчас в онлайн следующие пользователи: ${userOnlineNames}`);