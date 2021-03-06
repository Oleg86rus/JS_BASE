/*
Основные критерии:

При отправке введенной суммы, донат моментально появляется в списке справа, а поле ввода очищается.
Элементы списка (.donate-item) содержат в себе дату создания доната и количество денежных средств в долларах.
В элементе #total-amount должна находиться сумма всех донатов. Причем при добавлении новых донатов, она должна сразу автоматически пересчитываться.
* Примечания:

По возможности старайтесь использовать классы в своей работе для разделения ответственности.
Также для удобства рекомендуем выносить вспомогательные функции в utils и импортировать их в необходимые места.
 */

import './index.css';
import {findingTotalAmount} from "./src/module/total-amount";
import {submitAmount} from "./src/module/submit-amount";
findingTotalAmount();
submitAmount();