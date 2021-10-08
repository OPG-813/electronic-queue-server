
<h1 id="electronic-queue-nsuem">Electronic Queue NSUEM v1.0</h1>

An API for electronic queue system from NSUEM.

Base URLs:

* <a href="https://api.queue-nsuem.web-code-developers.ru">https://api.queue-nsuem.web-code-developers.ru</a>

Email: <a href="mailto:kincharov99@gmail.com">Danil</a> Web: <a href="https://github.com/DanilSord">Danil</a> 
 License: MIT

<h1 id="electronic-queue-nsuem-user">User</h1>

APIпользователей.

## User login

<a id="opIdpost-user-login"></a>

`POST /user/login`

Аутентификация пользователя по имени пользователя и паролю.

> Body parameter

```json
{
  "username": "admin",
  "password": "Qwerty123!"
}
```

<h3 id="user-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Параметры тела запроса.|
|» username|body|string|true|Имя пользователя|
|» password|body|string|true|Пароль|

> Example responses

> 200 Response

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "username": "admin",
  "role": "ADMIN"
}
```

<h3 id="user-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="user-login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|id|
|» username|string|true|none|Имя пользователя|
|» role|string|true|none|Роль пользователя|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## User logout

<a id="opIdget-user-logout"></a>

`GET /user/logout`

Выход пользователя из учётной записи.

<h3 id="user-logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|

> Example responses

> 401 Response

```json
{
  "message": "Not uthorized!",
  "httpCode": "401",
  "data": {}
}
```

<h3 id="user-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="user-logout-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## User update.

<a id="opIdpatch-user-update"></a>

`PATCH /user/update`

Изменение пользователя.

> Body parameter

```json
{
  "id": "a01bec54-0fcd-4729-aa9d-0c5043712ff5",
  "username": "admin"
}
```

<h3 id="user-update.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|false|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string|true|Id пользователя.|
|» username|body|string|false|Имя пользователя.|

> Example responses

> 200 Response

```json
{
  "id": "a01bec54-0fcd-4729-aa9d-0c5043712ff5",
  "username": "admin"
}
```

<h3 id="user-update.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="user-update.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id пользователя.|
|» username|string|true|none|Имя пользователя.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="electronic-queue-nsuem-admin">Admin</h1>

API администратора.

## Admin register

<a id="opIdpost-admin-register"></a>

`POST /admin/register`

Регистрация администратора в системе.

> Body parameter

```json
{
  "username": "admin",
  "password": "Qwerty123!",
  "name": "Admin"
}
```

<h3 id="admin-register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Параметры тела запроса.|
|» username|body|string|true|Имя пользователя|
|» password|body|string|true|Пароль|
|» name|body|string|true|ФИО администратора|

> Example responses

> 409 Response

```json
{
  "message": "Data conflict error!",
  "httpCode": 409,
  "data": {}
}
```

<h3 id="admin-register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="admin-register-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Admin me

<a id="opIdget-admin-me"></a>

`GET /admin/me`

Получение данных об аккаунте администратора.

<h3 id="admin-me-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|

> Example responses

> 200 Response

```json
{
  "id": "8ce923c0-4157-487d-ab62-8cc48b0df76f",
  "name": "Admin",
  "user": {
    "id": "a01bec54-0fcd-4729-aa9d-0c5043712ff5",
    "role": "ADMIN",
    "username": "admin"
  },
  "userId": "a01bec54-0fcd-4729-aa9d-0c5043712ff5"
}
```

<h3 id="admin-me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="admin-me-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id администратора|
|» name|string|true|none|ФИО администратора.|
|» user|object|true|none|Объект с данными о пользователе.|
|»» id|string|true|none|Id пользователя.|
|»» role|string|true|none|Роль пользователя.|
|»» username|string|true|none|Имя пользователя.|
|» userId|string|true|none|Id пользователя|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Admin changePassword.

<a id="opIdpatch-admin-changePassword"></a>

`PATCH /admin/changePassword`

Изменение пароля администратора.

> Body parameter

```json
{
  "oldPassword": "test",
  "newPassword": "test1"
}
```

<h3 id="admin-changepassword.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» oldPassword|body|string|true|Старый пароль.|
|» newPassword|body|string|true|Новый пароль.|

> Example responses

> 200 Response

```json
{
  "id": "a01bec54-0fcd-4729-aa9d-0c5043712ff5",
  "role": "ADMIN",
  "username": "admin"
}
```

<h3 id="admin-changepassword.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="admin-changepassword.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id администратора.|
|» role|string|true|none|Роль.|
|» username|string|true|none|Имя пользователя администратора.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="electronic-queue-nsuem-system">System</h1>

API системы.

## System status

<a id="opIdget-system-status"></a>

`GET /system/status`

Получение данных о состоянии системы.

<h3 id="system-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|

> Example responses

> 200 Response

```json
{
  "id": "76fb63b3-1b56-4747-8f81-a9d132cd6642",
  "endDate": "2100-01-01",
  "endTime": "24:00:00",
  "startDate": "2000-01-01",
  "startTime": "00:00:00",
  "status": "off",
  "timezone": "Asia/Novosibirsk"
}
```

<h3 id="system-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="system-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|id системы.|
|» endDate|string|true|none|Дата, после которой система прекратит приём заявок.|
|» endTime|string|true|none|Время суток, после которого система прекратит приём заявок.|
|» startDate|string|true|none|Дата, с которой система начнёт приём заявок.|
|» startTime|string|true|none|Время, с которого система начнёт приём заявок.|
|» status|string|true|none|Статус работы системы.|
|» timezone|string|true|none|Временная зона, в которой идёт отсчёт времени системы.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|off|
|status|on|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="electronic-queue-nsuem-purpose">Purpose</h1>

API целей.

## Purpose add

<a id="opIdpost-purpose-add"></a>

`POST /purpose/add`

Добавление цели в БД.

> Body parameter

```json
{
  "name": "Цель1"
}
```

<h3 id="purpose-add-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» name|body|string|true|Наименование цели.|

> Example responses

> 200 Response

```json
{
  "id": "b109fc37-3db3-4b34-ad2d-a3f577f54fbb",
  "name": "Цель1"
}
```

<h3 id="purpose-add-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="purpose-add-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id созданной цели.|
|» name|string|true|none|Наименование созданной цели.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Purpose list

<a id="opIdget-purpose-list"></a>

`GET /purpose/list`

Получение списка целей.

<h3 id="purpose-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|itemsNumber|query|string|false|Количество элементов на одной странице.|
|page|query|string|false|Порядковый номер страницы.|

> Example responses

> 200 Response

```json
[
  {
    "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c",
    "name": "цель2"
  }
]
```

<h3 id="purpose-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="purpose-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id цели.|
|» name|string|true|none|Наименование цели.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Purpose remove

<a id="opIddelete-purpose-remove"></a>

`DELETE /purpose/remove`

Удаление цели по id.

> Body parameter

```json
{
  "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c"
}
```

<h3 id="purpose-remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string|true|id цели.|

> Example responses

> 200 Response

```json
{
  "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c",
  "name": "Цель 1"
}
```

<h3 id="purpose-remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="purpose-remove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|id удаленной цели.|
|» name|string|true|none|Наименование удалённой цели.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Purpose update

<a id="opIdpatch-purpose-update"></a>

`PATCH /purpose/update`

Изменение цели по id.

> Body parameter

```json
{
  "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c",
  "name": "цель123"
}
```

<h3 id="purpose-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string|true|Id цели.|
|» name|body|string|false|Наименование цели.|

> Example responses

> 200 Response

```json
{
  "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c",
  "name": "цель123"
}
```

<h3 id="purpose-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="purpose-update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id измененной цели.|
|» name|string|true|none|Наименование изменённой цели.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="electronic-queue-nsuem-window">Window</h1>

API окон.

## Window add.

<a id="opIdpost-window-add"></a>

`POST /window/add`

Добавление нового окна.

> Body parameter

```json
{
  "name": "Окно 1"
}
```

<h3 id="window-add.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» name|body|string|true|Наименование окна.|

> Example responses

> 200 Response

```json
{
  "id": "01d0e442-dcf5-479f-99ac-1f3c80a6c7dd",
  "name": "Окно 3"
}
```

<h3 id="window-add.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-add.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id окна.|
|» name|string|true|none|Наименование окна.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Window list.

<a id="opIdget-window-list"></a>

`GET /window/list`

Получение списка окон с целями.

<h3 id="window-list.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|

> Example responses

> 200 Response

```json
[
  {
    "id": "ddbc9845-a1b1-4eaa-b9be-022c0e06b9fa",
    "name": "Окно 2",
    "purposes": [
      {
        "id": "cbfe44d1-d3ea-4ced-8f9d-f346409332a5",
        "name": "цель3"
      }
    ]
  }
]
```

<h3 id="window-list.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-list.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id окна.|
|» name|string|true|none|Наименование окна.|
|» purposes|[object]|true|none|none|
|»» id|string|true|none|Id цели.|
|»» name|string|true|none|Наименование цели.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Window remove.

<a id="opIddelete-window-remove"></a>

`DELETE /window/remove`

Удаление окна.

> Body parameter

```json
{
  "id": "ddbc9845-a1b1-4eaa-b9be-022c0e06b9fa"
}
```

<h3 id="window-remove.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string|true|Id окна.|

> Example responses

> 200 Response

```json
{
  "id": "ddbc9845-a1b1-4eaa-b9be-022c0e06b9fa",
  "name": "Окно 2"
}
```

<h3 id="window-remove.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-remove.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id удаленного окна.|
|» name|string|true|none|НАименование удаленного окна.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Window update.

<a id="opIdpatch-window-update"></a>

`PATCH /window/update`

Изменения информации об окне.

> Body parameter

```json
{
  "id": "ddbc9845-a1b1-4eaa-b9be-022c0e06b9fa",
  "name": "Окно 123"
}
```

<h3 id="window-update.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string|true|Id окна.|
|» name|body|string|false|Наименование окна.|

> Example responses

> 200 Response

```json
{
  "id": "01d0e442-dcf5-479f-99ac-1f3c80a6c7dd",
  "name": "Окно 123."
}
```

<h3 id="window-update.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-update.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id изменённого окна.|
|» name|string|true|none|Наименование изменённого окна.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Window addPurpose.

<a id="opIdpost-window-addPurposes"></a>

`POST /window/addPurposes`

Добавление списка целей окну.

> Body parameter

```json
{
  "id": "01d0e442-dcf5-479f-99ac-1f3c80a6c7dd",
  "purposes": [
    {
      "id": "01d0e442-dcf5-479f-99ac-1f3c80a6c7dd"
    }
  ]
}
```

<h3 id="window-addpurpose.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|false|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string|true|Id окна.|
|» purposes|body|[object]|true|Список целей.|
|»» id|body|string|true|Id целей.|

> Example responses

> 200 Response

```json
[
  {
    "id": "33b50b73-7886-4660-bee5-f6fe8157aa8d",
    "purposeId": "cbfe44d1-d3ea-4ced-8f9d-f346409332a5",
    "windowId": "01d0e442-dcf5-479f-99ac-1f3c80a6c7dd"
  }
]
```

<h3 id="window-addpurpose.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-addpurpose.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|id связи.|
|» purposeId|string|true|none|id цели.|
|» windowId|string|true|none|id окна.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|string|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией.|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|true|none|Объект с дополнительной информацией|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_SystemUser">SystemUser</h2>
<!-- backwards compatibility -->
<a id="schemasystemuser"></a>
<a id="schema_SystemUser"></a>
<a id="tocSsystemuser"></a>
<a id="tocssystemuser"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "role": "ADMIN",
  "username": "admin",
  "password": "Qwerty123!"
}

```

SystemUser

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Id пользователя в формате uuid.|
|role|string|true|none|Роль пользователя|
|username|string|true|none|Имя пользователя|
|password|string|true|none|Пароль|

<h2 id="tocS_AdminUser">AdminUser</h2>
<!-- backwards compatibility -->
<a id="schemaadminuser"></a>
<a id="schema_AdminUser"></a>
<a id="tocSadminuser"></a>
<a id="tocsadminuser"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Админ Такой То"
}

```

AdminUser

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Id в формате uuid|
|userId|string|true|none|id связанного пользователя|
|name|string|true|none|ФИО администратора|

<h2 id="tocS_SystemStatus">SystemStatus</h2>
<!-- backwards compatibility -->
<a id="schemasystemstatus"></a>
<a id="schema_SystemStatus"></a>
<a id="tocSsystemstatus"></a>
<a id="tocssystemstatus"></a>

```json
{
  "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c",
  "status": "on",
  "startDate": "2000-01-01",
  "endDate": "2100-01-01",
  "startTime": "00:00:00",
  "endTime": "23:00:00",
  "timezone": "Asia/Novosibirsk"
}

```

SystemStatus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Id статуса системы. Больше одного статуса не может быть.|
|status|string|true|none|Значение статуса системы.|
|startDate|string(date)|true|none|Дата начала работы системы.|
|endDate|string(date)|true|none|Дата окончания работы системы.|
|startTime|string(time)|true|none|Время суток начала работы системы.|
|endTime|string(time)|true|none|Время суток окончания работы системы.|
|timezone|string|true|none|Часовой пояс работы системы.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|on|
|status|off|

<h2 id="tocS_Purpose">Purpose</h2>
<!-- backwards compatibility -->
<a id="schemapurpose"></a>
<a id="schema_Purpose"></a>
<a id="tocSpurpose"></a>
<a id="tocspurpose"></a>

```json
{
  "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c",
  "name": "цель1"
}

```

Purpose

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Id цели.|
|name|string|true|none|Наименование цели.|

<h2 id="tocS_SystemWindow">SystemWindow</h2>
<!-- backwards compatibility -->
<a id="schemasystemwindow"></a>
<a id="schema_SystemWindow"></a>
<a id="tocSsystemwindow"></a>
<a id="tocssystemwindow"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "Окно 1"
}

```

SystemWindow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|id окна.|
|name|string|true|none|НАименование окна.|

