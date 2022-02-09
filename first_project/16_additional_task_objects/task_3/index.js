/*
Ваша задача состоит в том, чтобы создать функцию getKiller. getKiller принимает в себя 2 параметра:

suspectInfo. Это объект, в котором ключи - это подозреваемые в преступлении люди, а значения - массивы людей, которых видели подозреваемые в день убийства
deadPeople. Это массив с именами людей, которых убил преступник
Преступником является тот, кто видел всех убитых людей в день убийства. Функция getKiller должна возвращать имя преступника.


 */

const getKiller = (suspectInfo, deadPeople) => {
    const suspectsKillers = [];
    let testForSuspects = [];
    console.log(Object.keys(suspectInfo)[1]);
    let arraySuspectInfo = Object.entries(suspectInfo)
    arraySuspectInfo.forEach((arr) => {
        deadPeople.forEach((killed) => {
            if (arr[1].includes(killed)) {
                testForSuspects.push(1);
                console.log(testForSuspects)
            } else {
                testForSuspects.push(0);
            }
        })
        if (testForSuspects.every(elem => elem === 1)) {
            suspectsKillers.push(arr[0]);
        }
        testForSuspects = [];
    })
    alert(`Cписок подозреваемых, которые видели всех жертв: ${suspectsKillers.join(', ')}`);
    console.log(`Cписок подозреваемых, которые видели всех жертв: ${suspectsKillers.join(', ')}`);
    return suspectsKillers;
};

getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['Jacob', 'Bill', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
); // Убийца James

getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': ['Ben'],
    },
    ['Ben']
); // Убийца Megan