/*
Усовершенствуйте свое решение из задания 4

Теперь вам необходимо добавить геттеры и сеттер в класс Dictionary, чтобы иметь доступ до приватных переменных.
Для #name создайте геттер mainName (через ключевое слово get) и сеттер setMainName (через ключевое слово set).
Для #words создайте геттер allWords (через ключевое слово get).

Также создайте addNewWord - обычный метод класса, который будет добавлять новое слово в приватный объект #words (вместо сеттера). Он должен принимать:
wordKey - слово (в данном случае это будет ключ, по которому добавляем в объект #words), тип данных строка
wordObj - объект

Метод addNewWord должен только создавать новое слово в объекте #words без каких-либо проверок. Он реализуется без set, так как:

set не может принимать в себя больше 1-го параметра.
set в данном случае логичнее использовать для установки полностью нового значения, а не дополнения предыдущего.
Метод addNewWord будет использоваться в методе add. Мы их разделили так как у них разная зона ответственности:

addNewWord - отвечает за просто добавление слова в объект. Он используется только внутри классов в методе add.
add - проверяет, есть ли уже данное слово в словаре, и если слова нет, то вызывает метод addNewWord, чтобы добавить новое слово. Метод add будет использоваться (вызываться) у экземпляра класса для безопасного добавления новых слов (пример ниже)
Вам необходимо исправить логику для классов Dictionary и HardWordsDictionary
 */

class Dictionary {
    #name;
    #words;
    constructor(name) {
        this.#name = `${name}`;
        this.#words = {};
    }
    get mainName() {
        return this.#name;
    }
    set setMainName(name) {

    }
    get allWords() {
        return this.#words;
    }
    addNewWord() {

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