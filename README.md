# Test Task 

## deploy: https://github.com/DaryaEnina/test/settings/pages

## screen: 
![image](https://user-images.githubusercontent.com/78152480/229892249-b866a73b-6f83-4f79-80ff-8b10a5692614.png)

## technical specification: https://drive.google.com/file/d/1yOKNPkmygfH-gFeVdcu8W6Zjln-ifgRg/view
 
 ### Написать на нативном JS форму регистрации пользователя
 ### Поля:
-   имя
      мин. кол-во символов - 2
      макс. кол-во символов - 25
      обязательное поле
-   фамилия
      мин. кол-во символов - 2
      макс. кол-во символов - 25
      обязательное поле
-   дата рождения
      максимальная дата - сегодня
      обязательное поле
-   электронная почта
      валидный email
      обязательное поле
-   пароль
      минимум 8 символов
      минимум 1 символ в верхнем регистре
      минимум одна цифра 1-9
      минимум 1 специальный символ из перечисленных !@#$%
-   подтверждение пароля
      обязательное поле
      должен совпадать с полем пароль

Показать сообщение(я) с ошибками валидации

Кнопка submit: 
сделать запрос с валидными данными формы на POST
https://jsonplaceholder.typicode.com/posts и вывести body запроса в консоль
Точка входа index.html
* адаптивная верстка приветствуется
