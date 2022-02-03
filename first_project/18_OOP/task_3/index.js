/*
Для начала создайте класс Dictionary. Его конструктор принимает 1 параметр name. Инициализируйте данное значение при помощи this. Также в конструкторе должно объявляться поле words, которое по умолчанию должно быть пустым объектом.

Вам необходимо в класс Dictionary добавить 4 метода:

add. Данный метод добавляет новое слово в словарь. Он принимает в себя 2 параметра: word - слово (тип данных строка) description - описание слова (тип данных строка)

Присвойте объекту words по ключу word (этот параметр передали в метод add) значение объекта, в котором будут храниться данные о слове и его описание.

Если слово уже существует в объекте words, то не нужно перезаписывать слово, которое уже было сохранено ранее.
remove. Данный метод удаляет слово из словаря. Он принимает в себя ключ по которому нужно удалить объект слова из объекта words
get. Данный метод получает слово из словаря. Он принимает в себя ключ из объекта words. Из метода необходимо возвратить найденный объект слова по переданному параметру ключа
showAllWords. Данный метод не принимает в себя никаких параметров. Его задача состоит в том, чтобы вывести все слова, которые есть в объекте words, в консоль в формате “word - description” (word - само слово, description - описание слова)
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
const dictionary = new Dictionary('словарь');
dictionary.add('lol', 'lols');
dictionary.add('lol', 'lasdasdsadsaols');
console.log(dictionary.get('lol'));
dictionary.remove('lol');
dictionary.add('lols', 'lols');
dictionary.add('lolddsds', 'lols');
dictionary.add('lolsdsdsds', 'lols');
dictionary.showAllWords();
dictionary.remove('lols');
dictionary.remove('lolddsds');
dictionary.remove('lolsdsdsds');
dictionary.showAllWords();