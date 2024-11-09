---
title: Шпаргалка синтаксису регулярних виразів
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
page-type: guide
---

{{jsSidebar("JavaScript Guide")}}

Ця сторінка містить загальну шпаргалку всіх можливостей синтаксису `RegExp` шляхом компіляції вмісту всіх статей посібника з `RegExp`. За потреби більше інформації про конкретну тему можна знайти за посиланням на відповідному заголовку, або ж [у посібнику](/uk/docs/Web/JavaScript/Guide/Regular_expressions).

## Класи символів

[Класи символів](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) розрізняють ґатунки символів, наприклад, розрізняють літери й цифри.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Символи</th>
      <th scope="col">Значення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Клас символів:</strong></a>
          Дає збіг з одним із символів у дужках. За допомогою дефіса можна задати діапазон символів, але якщо дефіс стоїть першим або останнім символом у квадратних дужках, то сприймається як буквальний символ дефіса, що є частиною описаного класу символів.
        </p>
        <p>
          Наприклад, <code>[abcd]</code> – те саме, що <code>[a-d]</code>.
          Це дасть збіг з "b" у "brisket" і "c" у "chop".
        </p>
        <p>
          Наприклад, <code>[abcd-]</code> і <code>[-abcd]</code> дають збіг з
          "b" у "brisket", "c" у "chop" і "-" (дефісом) у
          "non-profit".
        </p>
        <p>
          Наприклад, <code>[\w-]</code> – те саме, що
          <code>[A-Za-z0-9_-]</code>. Обидва ці класи даютьз збіг з "b" у "brisket",
          "c" у "chop" і "n" у "non-profit".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>[^xyz]<br />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Клас символів із запереченням:</strong></a>
          Дає збіг з чим завгодно, чого немає в квадратних дужках. За допомогою дефіса можна задати діапазон символів, але якщо дефіс стоїть першим символом після <code>^</code> або останнім у дужках, то сприймається як буквальний дефіс, що стає членом класу символів, як звичайний символ. Наприклад, <code>[^abc]</code> – те саме, що <code>[^a-c]</code>. Ці класи дають збіг з "o" у "bacon" і "h" у "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Примітка:</strong> Символ ^ може також вказувати на
            <a href="/uk/docs/Web/JavaScript/Guide/Regular_expressions/Assertions">початок введення</a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Джокер:</strong></a>
          Дає збіг з кожним символом, <em>окрім</em> символів кінця рядка:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> і
          <code>\u2029</code>. Наприклад, <code>/.y/</code> у "yes make my day" дає збіг з "my" і
          "ay", але не з "yes", адже перед "y" у "yes" не стоїть інша літера. Якщо ввімкнена позначка <a href="/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s), то джокер також дає збіг з символами кінця рядка.
          Всередині класу символів крапка втрачає своє особливе значення та дає збіг з буквальною крапкою.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Екранувальний клас цифрових символів:</strong></a>
          Дає збіг з будь-якою (арабською) цифрою. Рівносильний <code>[0-9]</code>. Наприклад, <code>/\d/</code> і <code>/[0-9]/</code> дають збіг з "2" у "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Екранувальний клас нецифрових символів:</strong></a>
          Дає збіг з будь-яким символом, котрий не є (арабською) цифрою. Рівносильний <code>[^0-9]</code>. Наприклад, <code>/\D/</code> і
          <code>/[^0-9]/</code> дають збіг з "B" у "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Екранувальний клас літер:</strong></a>
          Дає збіг з будь-яким алфавітно-цифровим символом базового латинського алфавіту, включно з підкресленням. Рівносильний <code>[A-Za-z0-9_]</code>. Наприклад, <code>/\w/</code> дає збіг з "a" у "apple", "5" у "$5.28" і "3"
          in "3D" and "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Екранувальний клас нелітер:</strong></a>
          Дає збіг з будь-яким символом, що не є алфавітно-цифровим символом базового латинського алфавіту. Рівносильний <code>[^A-Za-z0-9_]</code>. Наприклад, <code>/\W/</code> і <code>/[^A-Za-z0-9_]/</code> дають збіг з "%" у "50%" and "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Екранувальний клас пробільних символів:</strong></a>
          Дає збіг з пробільним символом, в тому числі пробілом, табуляцією, розривом сторінки, розривом рядка та іншими пробілами Unicode. Рівносильний <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Наприклад, <code>/\s\w*/</code> дає збіг з " bar" у "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Екранувальний клас непробільних символів:</strong></a>
          Дає збіг з символом, котрий не є пробільним. Рівносильний
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Наприклад, <code>/\S\w*/</code> дає збіг з "foo" у "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Дає збіг з горизонтальною табуляцією.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Дає збіг з поверненням каретки.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Дає збіг з розривом рядка.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Дає збіг з вертикальною табуляцією.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Дає збіг з розривом сторінки.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Дає збіг із забоєм. Якщо шукаєте судження про кінець слова (<code>\b</code>), то погляньте в <a href="/uk/docs/Web/JavaScript/Guide/Regular_expressions/Assertions">Судженнях</a>.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Дає збіг з символом NUL. Не ставте після цього класу інші цифри.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Дає збіг з контрольним символом, що використовує <a href="https://en.wikipedia.org/wiki/Caret_notation">каретний запис</a>, де "X" – літера з діапазону A–Z (відповідає кодовим точкам <code>U+0001</code><em>–</em><code>U+001A</code>). Наприклад, <code>/\cM\cJ/</code> дає збіг з "\r" у "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Дає збіг з символом із кодом <code><em>hh</em></code> (за двома шістнадцятковими цифрами).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Дає збіг з кодовою одиницею UTF-16, чиє значення – <code><em>hhhh</em></code> (задане чотирма шістнадцятковими цифрами).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> або <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Лише тоді, коли задана позначка <code>u</code>.) Дає збіг з символом, чиє значення Unicode – <code>U+<em>hhhh</em></code> або <code>U+<em>hhhhh</em></code> (задається шістнадцятковими цифрами).
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Екранувальний клас символу Unicode:</strong></a>
          Дає збіг з символом на основі властивостей його символу Unicode: наприклад, символи емоджі, чи японські
          символи <em>катакана</em>, або китайсько-японські знаки Хань чи кандзі тощо).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Позначає те, що наступний символ повинен сприйматися по-особливому, або ж бути "екранованим". Має один з двох наслідків.
        </p>
        <ul>
          <li>
            Для символів, що зазвичай сприймаються буквально, позначає те, що наступний символ є спеціальним і не повинен тлумачитися буквально. Наприклад, <code>/b/</code> дає збіг з символом "b". Коли поставити перед "b" зворотну скісну риску, тобто застосувати <code>/\b/</code>, то цей символ стає спеціальним і позначає межу слова.
          </li>
          <li>
            Для символів, котрі зазвичай сприймаються по-особливому, вказує, що наступний символ не є спеціальним і повинен тлумачитись буквально. Наприклад, "*" – спеціальний символ, котрий збіг з 0 або більше входженнями символу перед ним; наприклад, <code>/a*/</code> означає 0 або більше входжень літери "a". Щоб отримати збіг буквально з <code>*</code>, перед нею треба поставити зворотну скісну риску; наприклад, <code>/a\*/</code> дасть збіг з "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Примітка:</strong> Щоб отримати буквальний збіг з цим символом, його треба екранувати самим собою. Інакше кажучи, для пошуку <code>\</code> слід застосовувати <code>/\\/</code>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>Диз'юнкція:</strong></a>
          Дає збіг або з "x", або з "y". Кожна складова, відділена вертикальною рискою (<code>|</code>), зветься <em>варіантом</em>. Наприклад,
          <code>/green|red/</code> дає збіг з "green" у "green apple" і з "red" у "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Примітка:</strong> Диз'юнкція – іще один спосіб задати "варіанти вибору", але вона не є класом символів. Диз'юнкції не є атомарними: необхідно застосувати <a href="/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">групу</a>, аби зробити її частиною більшого патерну. Патерн <code>[abc]</code> у дії рівносильний <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Судження

[Судження](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) включають межі, котрі позначають початок і кінець рядків та слів, а також інші патерни, котрі в певний спосіб позначають те, що збіг можливий (включно з зазиральними, озиральними та умовними виразами).

### Судження типу межі

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Символи</th>
      <th scope="col">Значення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Судження початкової межі введення:</strong></a>
          Дає збіг з початком введення. Якщо задана позначка <a href="/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m),
          то також дає збіг зразу після символу розриву рядка. Наприклад, <code>/^A/</code> не дає збігу з "A" в "an A", але дає збіг з першою "A" в "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Примітка:</strong> Цей символ має інакше значення, коли зустрічається на початку <a href="/uk/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes">класу символів</a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Судження кінцевої межі введення:</strong></a>
          Дає збіг з кінцем введення. Якщо задана позначка <a href="/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m),
          то також дає збіг зразу перед символом розриву рядка. Наприклад, <code>/t$/</code> не дає збігу з "t" в "eater", але дає – в "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Судження про межу слова:</strong></a>
          Дає збіг з межею слова. Це положення, в якому перед або після алфавітно-цифрового символу не стоїть інший алфавітно-цифровий символ, як то між літерою та пробілом. Зверніть увагу, що межа слова, що дала збіг, не включається у збіг. Інакше кажучи, довжина збігу з межею слова – нуль.
        </p>
        <p>Приклади:</p>
        <ul>
          <li><code>/\bm/</code> дає збіг з "m" у "moon".</li>
          <li>
            <code>/oo\b/</code> не дає збігу з "oo" у "moon", тому що після "oo" стоїть "n", котра є алфавітно-цифровим символом.
          </li>
          <li>
            <code>/oon\b/</code> дає збіг з "oon" у "moon", тому що "oon" – кінець рядка, після якого не стоїть алфавітно-цифровий символ.
          </li>
          <li>
            <code>/\w\b\w/</code> ніколи не дасть жодного збігу, тому що після алфавітно-цифрового символу не може водночас стояти не алфавітно-цифровий і алфавітно-цифровий символ.
          </li>
        </ul>
        <p>
          Про збіг із символом забою (<code>[\b]</code>) – у <a
            href="/uk/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Класах символів</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Судження про відсутність межі слова:</strong></a>
          Дає збіг з положенням, котре не є межею слова. Це таке положення, в якому і попередній, і наступний символи належать до одно типу: Або обидва алфавітно-цифрові, або обидва не алфавітно-цифрові, наприклад, між двома літерами або між двома пробілами. Початок і кінець рядка вважаються не алфавітно-цифровими символами. Так само, як зі збігом межі слова, збіг з не межею слова не включається до збігу. Наприклад, <code>/\Bon/</code> дає збіг з "on" у "at noon", а <code>/ye\B/</code> дає збіг з "ye" у "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Інші судження

> [!NOTE]
> Символ `?` також може застосовуватись як квантифікатор.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Символи</th>
      <th scope="col">Значення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Судження зазирання:</strong></a>
          Дає збіг з "x" лише тоді, коли "x"
          стоїть перед "y". Наприклад, <code>/Jack(?=Sprat)/</code> дає збіг з "Jack" лише тоді, коли далі стоїть "Sprat".<br /><code>/Jack(?=Sprat|Frost)/</code> дає збіг з "Jack" лише тоді, коли далі стоїть "Sprat" або "Frost". Проте ані "Sprat", ані "Frost" не є частинами результатів зіставлення.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Судження зазирання з запереченням:</strong></a>
          Дає збіг з "x" лише тоді, коли "x"
          не стоїть перед "y". Наприклад, <code>/\d+(?!\.)/</code> дає збіг з числом лише тоді, коли після нього не стоїть десятковий розділювач. <code>/\d+(?!\.)/.exec('3.141')</code
          > дасть збіг з "141", але не з "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Судження озирання:</strong></a>
          Дає збіг з "x" лише тоді, коли "x"
          стоїть після "y". Наприклад, <code>/(?&#x3C;=Jack)Sprat/</code> дає збіг зі "Sprat" лише тоді, коли перед цим стоїть "Jack". <code>/(?&#x3C;=Jack|Tom)Sprat/</code> дає збіг зі "Sprat" лише тоді, коли перед цим стоїть "Jack" або "Tom", Утім, ані "Jack", ані "Tom" не є частиною результатів зіставлення.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Судження озирання з запереченням:</strong></a>
          Дає збіг з "x" лише тоді, коли "x"
          не стоїть після "y". Наприклад, <code>/(?&#x3C;!-)\d+/</code> дає збіг з числом лише тоді, коли перед ним не стоїть знак мінуса. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          дає збіг з "3". Зіставлення <code>/(?&#x3C;!-)\d+/.exec('-3')</code> не знаходить збігу, тому що перед числом стоїть знак мінуса.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Групи та зворотні посилання

[Групи та зворотні посилання](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) вказують на групи символів-виразів.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Символи</th>
      <th scope="col">Значення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group"><strong>Група захоплення:</strong></a>
          Дає збіг з <code><em>x</em></code> і
          запам'ятовує збіг. Наприклад, <code>/(foo)/</code> дає збіг і запам'ятовує "foo" у "foo bar".
        </p>
        <p>
          Регулярний вираз може мати декілька груп захоплення. Як наслідок, збіги з групами захоплення здебільшого зберігаються в масиві, чиї елементи мають такий же порядок, як їхні ліві дужки в патерні. Зазвичай це просто порядок самих груп захоплення. Це стає важливим, коли групи захоплення мають вкладеність. Збіги доступні через індекси елементів результату (<code>[1], …, [n]</code>) і через наперед визначені властивості об'єкта <code>RegExp</code> (<code>$1, …, $9</code>).
        </p>
        <p>
          Групи захоплення шкодять швидкодії. Коли немає потреби згадувати підрядки, що збіглися — слід віддавати перевагу дужкам без захоплення (дивіться нижче).
        </p>
        <p>
          <code
            ><a
              href="/uk/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.prototype.match()</a
            ></code
          >
          не поверне груп, якщо задана позначка <code>/.../g</code>. Проте і в такому випадку можна застосувати для отримання всіх збігів
          <code
            ><a
              href="/uk/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group"><strong>Іменована група захоплення:</strong></a>
          Дає збіг з "x" і зберігає його
          у властивості `groups` повернених збігів, за ім'ям, заданим у вигляді <code>&#x3C;Name></code>. Кутові дужки (<code>&#x3C;</code>
          і <code>></code>) для назви групи — обов'язкові.
        </p>
        <p>
          Наприклад, для виділення з телефонного номера коду місцевості в Сполучених штатах можна застосувати <code>/\((?&#x3C;area>\d\d\d)\)/</code>. Результівний номер місцевості буде доступний через <code>matches.groups.area</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group"><strong>Група без захоплення:</strong></a>
          Дає збіг з "x", але не запам'ятовує
          його. Підрядок-збіг не можна отримати з елементів результівного масиву (<code>[1], …, [n]</code>) чи наперед визначених властивостей об'єкта
          <code>RegExp</code> (<code>$1, …, $9</code>).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?<em>flags</em>:<em>x</em>)</code>, <code>(?:<em>flags</em>-<em>flags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Modifier"><strong>Модифікатор:</strong></a>
          Enables or disables the specified flags only to the enclosed pattern. Only the <code>i</code>, <code>m</code>, and <code>s</code> flags can be used in a modifier.
          Вмикає чи вимикає конкретні позначки лише для патерну в дужках. В модифікаторах можна застосовувати лише позначки <code>i</code>, <code>m</code> і <code>s</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Backreference"><strong>Зворотне посилання:</strong></a>
          Де "n" – це додатне ціле число. Дає збіг з тим же підрядком, що був збігом групи захоплення номер n у тому самому регулярному виразі
          (рахуючи за лівою дужкою). Наприклад, <code>/apple(,)\sorange\1/</code> дає збіг з "apple, orange," у "apple, orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          <a href="/uk/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference"><strong>Іменоване зворотне посилання:</strong></a>
          Зворотне посилання на останній підрядок, що дав збіг з <strong>Іменованою групою захоплення</strong>, заданою як <code>&#x3C;Name></code>.
        </p>
        <p>
          Наприклад,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> у "Do you copy? Sir, yes Sir!" дає збіг "Sir,
          yes Sir".
        </p>
        <div class="notecard note">
          <p>
            <strong>Примітка:</strong> <code>\k</code> тут використовується буквально – для позначення початку зворотного посилання на Іменовану групу захоплення.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Квантифікатори

[Квантифікатори](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) позначають кількість символів або виразів, котрі повинні давати збіг.

> [!NOTE]
> У тексті нижче _елементами_ звуться не лише окремі символи, а й також [класи символів](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) і [групи та зворотні посилання](/uk/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Символи</th>
      <th scope="col">Значення</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          Дає збіг з попереднім елементом "x" 0 або більше разів. Наприклад, <code>/bo*/</code> дає збіг з "boooo" у "A ghost booooed" і "b" у "A bird warbled", але не дає жодного збігу в "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Дає збіг з попереднім елементом "x" 1 або більше разів. Рівносильно <code>{1,}</code>. Наприклад, <code>/a+/</code> дає збіг з "a" у "candy" і всіма літерами "a" у "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Дає збіг з попереднім елементом "x" 0 або 1 раз. Наприклад, <code>/e?le?/</code> дає збіг з "el" у "angel" і "le" у "angle."
        </p>
        <p>
          Бувши застосованим зразу після одного з наступних квантифікаторів: <code>*</code>, <code>+</code>, <code>?</code> і <code>{}</code>, робить такий квантифікатор нежадібним (змушує його дати збіг з якнайменшою кількістю входжень), на противагу усталеній поведінці – жадібній (коли збіг дається з якнайбільшою кількістю входжень).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Де "n" – це невід'ємне ціле число, дає збіг з рівно "n" входженнями попереднього елемента "x". Наприклад, <code>/a{2}/</code> не дає збігу з "a" у "candy", але дає збіг з усіма "a" у "caandy", а також першими двома "a" у "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Де "n" – це невід'ємне ціле число, дає збіг зі щонайменше "n" входженнями попереднього елемента "x". Наприклад, <code>/a{2,}/</code> не дає збігу з "a" у "candy", але дає збіг з усіма a у "caandy" та в "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <!-- cSpell:ignore cndy -->
        <p>
          Де "n" і "m" – це невід'ємні цілі числа, і <code>m >= n</code>,
          дає збіг зі щонайменше "n" і щонайбільше "m" входженнями попереднього
          елемента "x". Наприклад, <code>/a{1,3}/</code> не дає жодного збігу в "cndy", дає збіг з "a" у "candy", зі двома "a" у "caandy" і першими трьома "a" у "caaaaaaandy". Зверніть увагу, що при зіставленні з "caaaaaaandy" збігом є "aaa", навіть попри те, що у вихідному рядку більше літер "a".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code><em>x</em>+?</code><br /><code
            ><em>x</em>??</code
          ><br /><code><em>x</em>{n}?</code><br /><code><em>x</em>{n,}?</code
          ><br /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          Усталено квантифікатори штибу <code>*</code> і <code>+</code> є "жадібними", тобто намагаються дати збіг з якомога більшою частиною рядка. Символ <code>?</code> після квантифікатора робить такий квантифікатор "нежадібним", тобто він зупиниться, щойно знайде який-небудь збіг. Наприклад, у рядку "some &#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> дасть збіг "&#x3C;foo> &#x3C;bar> new &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> дасть збіг "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
