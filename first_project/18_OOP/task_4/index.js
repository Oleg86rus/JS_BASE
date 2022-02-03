/*
Используйте код, написанный в прошлом задании. Вам необходимо создать дочерний класс HardWordsDictionary от класса Dictionary. Конструктор у HardWordsDictionary принимает в себя также параметр name и вызывает конструктор родительского класса.

Все методы, которые есть в Dictionary, должны остаться без изменений в HardWordsDictionary, кроме одного. Вам необходимо переопределить метод add, который должен работать по той же логике, что и add у Dictionary, только объект слова должен выглядеть следующим образом:

{
   word: 'word',
   description: 'description',
   isDifficult: true,
}
 */

class Dictionary {
    constructor(name) {
        this.name = `${name}`;
        this.words = {};
    }
    add(word, description) {
        if (!Object.keys(this.words).includes(word)) {
            console.log(`Содержит ли объект words слово новое слово word: `, Object.keys(this.words).includes(word));
            console.log('Добавляем слово!');
            console.log(Object.keys(this));
            this.words[word] = {
                word: `${word}`,
                description: `${description}`
            }
            console.log(this.words);
        } else {
            console.log(`Содержит ли объект words слово новое слово word: `, Object.keys(this.words).includes(word));
            console.log('Слово не перезаписывается!');
            console.log(this);
        }

    }
    remove(word) {
        if (Object.keys(this.words).includes(word)) {
            console.log(`Содержит ли объект words слово новое слово word: `, Object.keys(this.words).includes(word));
            console.log(Object.keys(this.words));
            console.log('Удаляем слово');
            console.log(this.words[word]);
            delete this.words[word];
            console.log(this.words);
        }
    }
    get(word) {
        if (Object.keys(this.words).includes(word)) {
            console.log('Объект введенного слова: ', Object.entries(this.words[word]));
            return {...this.words[word]};
        } else {
            console.log('Слово отсутствует.');
        }
    }
    showAllWords() {
        Object.values(this.words).forEach((word => console.log(`${Object.values(word)[0]} - ${Object.values(word)[1]})`)));
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }
    add(word, description) {
        if (!Object.keys(this.words).includes(word)) {
            console.log(`Содержит ли объект words слово новое слово word: `, Object.keys(this.words).includes(word));
            console.log('Добавляем слово!');
            console.log(Object.keys(this));
            this.words[word] = {
                word: `${word}`,
                description: `${description}`,
                isDifficult: true
            }
            console.log(this.words);
        } else {
            console.log(`Содержит ли объект words слово новое слово word: `, Object.keys(this.words).includes(word));
            console.log('Слово не перезаписывается!');
            console.log(this);
        }
    }

}
const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством
// без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.