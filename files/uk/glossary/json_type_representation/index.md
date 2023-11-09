---
title: Представлення типу в JSON
slug: Glossary/JSON_type_representation
page-type: glossary-definition
---

{{GlossarySidebar}}

{{glossary("JSON")}} – це зручний і широко вживаний формат для серіалізації об'єктів, масивів, чисел, рядків, булевих значень і `null`.
[JSON підтримує не всі типи даних, дозволені JavaScript](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON#riznytsia-mizh-javascript-i-json), тобто об'єкти JavaScript, які використовують ці несумісні типи, не можуть бути безпосередньо серіалізовані в JSON.

_Представлення типу в JSON_ – це сумісний з JSON об'єкт, який є рівносильним об'єктом JavaScript, властивості якого закодовані так, що інформацію _можна_ серіалізувати в JSON.
Зазвичай такий об'єкт має такі ж властивості, що й вихідний об'єкт, у випадку сумісних типів даних, а несумісні властивості перетворюються чи серіалізуються в сумісні типи.
Наприклад, властивості вихідного об'єкта, що містять буфери, у представленні типу в JSON можуть бути закодовані в рядки згідно з алгоритмом [base64url](/uk/docs/Glossary/Base64).

Об'єкт, який не може бути автоматично серіалізований у JSON за допомогою методу [`JSON.stringify()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), може мати метод примірника під назвою `toJSON()`, який повертає _представлення типу в JSON_ вихідного об'єкта.
Тоді [`JSON.stringify()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) використовує `toJSON()` для отримання об'єкта, який буде рядковано замість вихідного об'єкта.
[`PublicKeyCredential.toJSON()`](/uk/docs/Web/API/PublicKeyCredential/toJSON) і [`Performance.toJSON()`](/uk/docs/Web/API/Performance/toJSON) є прикладами такого підходу.

Рядок JSON, серіалізований у такий спосіб, може бути десеріалізований назад в об'єкт _представлення типу в JSON_ за допомогою [`JSON.parse()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
Заведено надавати метод-перетворювач, такий як {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}, для перетворення _представлення типу в JSON_ назад у вихідний об'єкт.
