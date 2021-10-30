---
title: Electronic Queue NSUEM v1.0
language_tabs: []
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 1

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="electronic-queue-nsuem">Electronic Queue NSUEM v1.0</h1>

> Scroll down for example requests and responses.

An API for electronic queue system from NSUEM.

Base URLs:

* <a href="https://api.queue-nsuem.web-code-developers.ru">https://api.queue-nsuem.web-code-developers.ru</a>

Email: <a href="mailto:kincharov99@gmail.com">Danil</a> Web: <a href="https://github.com/DanilSord">Danil</a> 
 License: MIT

# Authentication

<h1 id="electronic-queue-nsuem-user">User</h1>

API пользователей.

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

## User update

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

<h3 id="user-update-parameters">Parameters</h3>

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

<h3 id="user-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="user-update-responseschema">Response Schema</h3>

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

## User get

<a id="opIdget-user-get"></a>

`GET /user/get`

Получение пользователя по id.

<h3 id="user-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|id|query|string(uuid)|true|Идентификатор пользователя.|

> Example responses

> 200 Response

```json
{
  "id": "04e71908-3729-40f4-b772-4f94495f7baa",
  "role": "ADMIN",
  "username": "string"
}
```

<h3 id="user-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="user-get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор пользователя.|
|» role|string|true|none|Роль пользователя.|
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

## Admin changePassword

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

<h3 id="admin-changepassword-parameters">Parameters</h3>

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

<h3 id="admin-changepassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="admin-changepassword-responseschema">Response Schema</h3>

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

## Admin update.

<a id="opIdpatch-admin-update"></a>

`PATCH /admin/update`

Изменение данных администатора.

> Body parameter

```json
{
  "id": "7d870e0e-6ca4-4bb0-af89-5b32b81e5297",
  "updates": {
    "name": "ФИО"
  }
}
```

<h3 id="admin-update.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string(uuid)|true|Идентификатор администратора.|
|» updates|body|object|true|Объект с новыми данными.|
|»» name|body|string|false|Имя администратора.|

> Example responses

> 200 Response

```json
{
  "id": "7d870e0e-6ca4-4bb0-af89-5b32b81e5297"
}
```

<h3 id="admin-update.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="admin-update.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор администратора.|

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

## System getTimezones

<a id="opIdget-system-getTimezones"></a>

`GET /system/getTimezones`

Получение списка временных зон.

<h3 id="system-gettimezones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|false|Сессионный токен пользователя.|

> Example responses

> 200 Response

```json
[
  {
    "name": "Asia/Tehran",
    "utc_offset": {
      "hours": "3",
      "minutes": "30"
    }
  }
]
```

<h3 id="system-gettimezones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="system-gettimezones-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» name|string|true|none|Наименование временной зоны.|
|» utc_offset|object|false|none|none|
|»» hours|string|true|none|Часы смещения.|
|»» minutes|string|false|none|Минуты смещения.|

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

## Sytem getCurrentStats

<a id="opIdget-system-getCurrentStats"></a>

`GET /system/getCurrentStats`

Получение общей статистики на текущий момент.

<h3 id="sytem-getcurrentstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|

> Example responses

> 200 Response

```json
{
  "activeWindowNumber": 0,
  "activeWorkersNumber": 0,
  "waitingTickets": 0
}
```

<h3 id="sytem-getcurrentstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="sytem-getcurrentstats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» activeWindowNumber|number|true|none|Количество работающих окон.|
|» activeWorkersNumber|number|true|none|Количество работающих сотрудников.|
|» waitingTickets|number|true|none|Количество ожидающих в очереди заявок.|

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

## System getPeriodStats

<a id="opIdget-system-getPeriodStats"></a>

`GET /system/getPeriodStats`

Получение общей статистики за период времени.

<h3 id="system-getperiodstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|startDate|query|string|true|Начальная дата.|
|endDate|query|string|true|Конечная дата.|

> Example responses

> 200 Response

```json
{
  "averageTicketServiceTime": 0,
  "averageTicketWaitingTime": 0,
  "ticketsNumber": 0
}
```

<h3 id="system-getperiodstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="system-getperiodstats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» averageTicketServiceTime|number|true|none|Среднее время обработки заявки.|
|» averageTicketWaitingTime|number|true|none|Среднее время ожидания заявки в очереди.|
|» ticketsNumber|number|true|none|Общее количество обработанных заявок.|

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

<h1 id="electronic-queue-nsuem-purpose">Purpose</h1>

API целей.

## Purpose add

<a id="opIdpost-purpose-add"></a>

`POST /purpose/add`

Добавление цели в БД.

> Body parameter

```json
{
  "name": "Цель1",
  "prefix": "A"
}
```

<h3 id="purpose-add-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» name|body|string|true|Наименование цели.|
|» prefix|body|string|true|Префикс цели, для формирования номера талона.|

> Example responses

> 200 Response

```json
{
  "id": "b109fc37-3db3-4b34-ad2d-a3f577f54fbb",
  "name": "Цель1",
  "prefix": "A"
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
|» prefix|string|true|none|Префикс цели, для формирования номера талона.|

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
    "name": "цель2",
    "prefix": "A"
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
|» prefix|string|true|none|Префикс цели, для формирования номера талона.|

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
  "name": "Цель 1",
  "prefix": "A"
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
|» prefix|string|true|none|Префикс цели, для формирования номера талона.|

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
  "name": "цель123",
  "prefix": "A"
}
```

<h3 id="purpose-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string|true|Id цели.|
|» name|body|string|false|Наименование цели.|
|» prefix|body|string|false|Префикс цели, для формирования номера талона.|

> Example responses

> 200 Response

```json
{
  "id": "7378034e-0b57-4d4e-a2e8-7bcb52bbdd7c",
  "name": "цель123",
  "prefix": "A"
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
|» prefix|string|true|none|Префикс цели, для формирования номера талона.|

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

## Window add

<a id="opIdpost-window-add"></a>

`POST /window/add`

Добавление нового окна.

> Body parameter

```json
{
  "name": "Окно 1"
}
```

<h3 id="window-add-parameters">Parameters</h3>

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

<h3 id="window-add-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-add-responseschema">Response Schema</h3>

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

## Window list

<a id="opIdget-window-list"></a>

`GET /window/list`

Получение списка окон с целями.

<h3 id="window-list-parameters">Parameters</h3>

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

<h3 id="window-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-list-responseschema">Response Schema</h3>

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

## Window remove

<a id="opIddelete-window-remove"></a>

`DELETE /window/remove`

Удаление окна.

> Body parameter

```json
{
  "id": "ddbc9845-a1b1-4eaa-b9be-022c0e06b9fa"
}
```

<h3 id="window-remove-parameters">Parameters</h3>

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

<h3 id="window-remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-remove-responseschema">Response Schema</h3>

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

## Window update

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

<h3 id="window-update-parameters">Parameters</h3>

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

<h3 id="window-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-update-responseschema">Response Schema</h3>

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

## Window addPurpose

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

<h3 id="window-addpurpose-parameters">Parameters</h3>

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

<h3 id="window-addpurpose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-addpurpose-responseschema">Response Schema</h3>

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

## Window removePurpose

<a id="opIddelete-window-removePurpose"></a>

`DELETE /window/removePurpose`

Удаление цели у окна.

> Body parameter

```json
{
  "windowId": "073f3bbe-bbbb-4e95-b797-11b6700bd636",
  "purposeId": "073f3bbe-bbbb-4e95-b797-11b6700bd636"
}
```

<h3 id="window-removepurpose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» windowId|body|string|true|Id окна.|
|» purposeId|body|string|true|Id цели.|

> Example responses

> 200 Response

```json
{
  "id": "073f3bbe-bbbb-4e95-b797-11b6700bd636",
  "purposeId": "073f3bbe-bbbb-4e95-b797-11b6700bd636",
  "windowId": "073f3bbe-bbbb-4e95-b797-11b6700bd636"
}
```

<h3 id="window-removepurpose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-removepurpose-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string|true|none|Id связи между окном и целью.|
|» purposeId|string|true|none|Id цели удаленной цели.|
|» windowId|string|true|none|Id окна.|

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

## Window get

<a id="opIdget-window-get"></a>

`GET /window/get`

Получение окна по id.

<h3 id="window-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|id|query|string(uuid)|true|Идентификатор окна.|

> Example responses

> 200 Response

```json
{}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<id>ee8921b5-a465-4df5-984f-2d6087a3cfb4</id>
<name>Окно 10</name>
```

<h3 id="window-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="window-get-responseschema">Response Schema</h3>

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

<h1 id="electronic-queue-nsuem-worker">Worker</h1>

API работников.

## Worker create

<a id="opIdpost-worker-create"></a>

`POST /worker/create`

Добавление нового сотрудника.

> Body parameter

```json
{
  "worker": {
    "name": "name"
  },
  "credentials": {
    "username": "username",
    "password": "password"
  }
}
```

<h3 id="worker-create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» worker|body|object|true|none|
|»» name|body|string|true|Имя сотрудника.|
|» credentials|body|object|true|none|
|»» username|body|string|true|Имя пользователя.|
|»» password|body|string|true|Пароль сотрудника.|

> Example responses

> 200 Response

```json
{
  "id": "74da7556-c917-482e-86b5-ab184045bd14"
}
```

<h3 id="worker-create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="worker-create-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор сотрудника.|

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

## Worker get

<a id="opIdget-worker-get"></a>

`GET /worker/get`

Получение сотрудника.

<h3 id="worker-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|id|query|string(uuid)|true|Идентификатор пользователя.|

> Example responses

> 200 Response

```json
{
  "id": "74da7556-c917-482e-86b5-ab184045bd14",
  "name": "Worker5",
  "statusId": "e6c4f69d-f964-49b7-84a2-b3973cd236d8",
  "userId": "90eeed0b-2a0d-4939-8557-f22f041d9c9d",
  "windowId": "90eeed0b-2a0d-4939-8557-f22f041d9c9d"
}
```

<h3 id="worker-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="worker-get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор сотрудника.|
|» name|string|true|none|Имя сотрудника.|
|» statusId|string(uuid)|true|none|Идентификатор статуса сотрудника.|
|» userId|string(uuid)|true|none|Идентификатор пользователя.|
|» windowId|string(uuid)|false|none|Идентификатор окна, за которым работает сотрудник.|

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

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Worker list

<a id="opIdget-worker-list"></a>

`GET /worker/list`

Получение списка сотрудников.

<h3 id="worker-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|statusId|query|string(uuid)|false|Фильтр. Идентификатор статуса пользователя.|
|windowId|query|string(uuid)|false|Фильтр. Идентификатор окна.|
|itemsNumber|query|string|false|Количество объектов на странице.|
|page|query|string|false|Порядковый номер страницы.|

> Example responses

> 200 Response

```json
[
  {
    "id": "988bf769-eda9-4950-82ac-92a3cb76edb1",
    "name": "Worker2",
    "statusId": "e6c4f69d-f964-49b7-84a2-b3973cd236d8",
    "userId": "a89c77f9-ac92-4531-a013-90ca5ab2be6d",
    "windowId": "a89c77f9-ac92-4531-a013-90ca5ab2be6d"
  }
]
```

<h3 id="worker-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="worker-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор сотрудника.|
|» name|string|true|none|Имя сотрудника.|
|» statusId|string(uuid)|true|none|Идентификатор статуса сотрудника.|
|» userId|string(uuid)|true|none|Идентификатор пользователя.|
|» windowId|string(uuid)|false|none|Идентификатор окна, за которым работает сотрудник.|

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

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Worker getPeriodStats

<a id="opIdget-worker-getPeriodStats"></a>

`GET /worker/getPeriodStats`

Получение статистики сотрудника за определённый период времени.

<h3 id="worker-getperiodstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|startDate|query|string|true|Начальная дата.|
|endDate|query|string|true|Конечная дата.|
|id|query|string(uuid)|true|Идентификатор работника.|

> Example responses

> 200 Response

```json
{
  "averageTicketServiceTime": 0,
  "ticketsNumber": 0,
  "id": "04e71908-3729-40f4-b772-4f94495f7baa"
}
```

<h3 id="worker-getperiodstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="worker-getperiodstats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» averageTicketServiceTime|number|true|none|Среднее время обработки талона.|
|» ticketsNumber|number|true|none|Количество талонов.|
|» id|string(uuid)|true|none|Идентификатор работника.|

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

## Worker getStatus

<a id="opIdget-worker-getStatus"></a>

`GET /worker/getStatus`

Получение названия статуса сотрудника.

<h3 id="worker-getstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|id|query|string(uuid)|true|Идентификатор статуса сотрудника.|

> Example responses

> 200 Response

```json
{
  "id": "e6c4f69d-f964-49b7-84a2-b3973cd236d8",
  "name": "not work"
}
```

<h3 id="worker-getstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="worker-getstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор статуса.|
|» name|string|true|none|Название статуса.|

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

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Worker remove

<a id="opIddelete-worker-remove"></a>

`DELETE /worker/remove`

Удаление сотрудника.

> Body parameter

```json
{
  "id": "74da7556-c917-482e-86b5-ab184045bd14"
}
```

<h3 id="worker-remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string(uuid)|true|Идентификатор сотрудника.|

> Example responses

> 200 Response

```json
{
  "id": "988bf769-eda9-4950-82ac-92a3cb76edb1",
  "userId": "a89c77f9-ac92-4531-a013-90ca5ab2be6d"
}
```

<h3 id="worker-remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="worker-remove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор сотрудника.|
|» userId|string(uuid)|true|none|Идентификатор пользователя.|

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

## Worker update

<a id="opIdpatch-worker-update"></a>

`PATCH /worker/update`

Изменение данных сотрудника.

> Body parameter

```json
{
  "id": "74da7556-c917-482e-86b5-ab184045bd14",
  "updates": {
    "worker": {
      "name": "name"
    },
    "credentials": {
      "username": "username",
      "password": "password"
    }
  }
}
```

<h3 id="worker-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string(uuid)|true|Идентификатор сотрудника.|
|» updates|body|object|true|Объект с изменениями.|
|»» worker|body|object|false|Объект с данными сотрудника.|
|»»» name|body|string|false|Имя сотрудника.|
|»» credentials|body|object|false|Объект с данными авторизации.|
|»»» username|body|string|false|Имя пользователя.|
|»»» password|body|string|false|Пароль.|

> Example responses

> 200 Response

```json
[
  {
    "id": "7d870e0e-6ca4-4bb0-af89-5b32b81e5297"
  }
]
```

<h3 id="worker-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="worker-update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|none|

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

<h1 id="electronic-queue-nsuem-field">Field</h1>

API дополнительных полей.

## Field create

<a id="opIdpost-field-create"></a>

`POST /field/create`

Создание дополнительного поля.

> Body parameter

```json
{
  "purposeId": "74da7556-c917-482e-86b5-ab184045bd14",
  "fieldTypeId": "74da7556-c917-482e-86b5-ab184045bd14",
  "name": "name"
}
```

<h3 id="field-create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» purposeId|body|string(uuid)|true|Идентификатор цели, к которой добавляется поле.|
|» fieldTypeId|body|string(uuid)|true|Идентификатор типа поля.|
|» name|body|string|true|Наименование поля.|

> Example responses

> 200 Response

```json
{
  "id": "7d870e0e-6ca4-4bb0-af89-5b32b81e5297"
}
```

<h3 id="field-create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="field-create-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор поля.|

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

## Field get

<a id="opIdget-field-get"></a>

`GET /field/get`

Получение дополнительного поля.

<h3 id="field-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|id|query|string(uuid)|true|Идентификатор поля.|

> Example responses

> 200 Response

```json
{
  "id": "ac184494-d143-4033-8260-e2dbe266925b",
  "fieldTypeId": "ac184494-d143-4033-8260-e2dbe266925b",
  "name": "ФИО",
  "purposeId": "9baa9c0c-374e-4633-96c1-e5214a599ead"
}
```

<h3 id="field-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="field-get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор поля.|
|» fieldTypeId|string(uuid)|true|none|Идентификатор типа поля.|
|» name|string|true|none|Наименование поля.|
|» purposeId|string(uuid)|true|none|Идентификатор цели, за которой закреплено поле.|

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

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Field list

<a id="opIdget-field-list"></a>

`GET /field/list`

Получение списка дополнительных полей.

<h3 id="field-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|purposeId|query|string(uuid)|false|Фильтр. Идентификатор цели.|
|fieldTypeId|query|string(uuid)|false|Фильтр. Идентификатор типа поля.|
|itemsNumber|query|string|false|Количество объектов на странице.|
|page|query|string|false|Номер страницы.|

> Example responses

> 200 Response

```json
[
  {
    "id": "978307cb-fd94-41de-a3f7-8e0d777dd97b",
    "fieldTypeId": "978307cb-fd94-41de-a3f7-8e0d777dd97b",
    "name": "Номер телефона",
    "purposeId": "9baa9c0c-374e-4633-96c1-e5214a599ead"
  }
]
```

<h3 id="field-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|None|

<h3 id="field-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор поля.|
|» fieldTypeId|string(uuid)|true|none|Идентификатор типа поля.|
|» name|string|true|none|Наименование поля.|
|» purposeId|string(uuid)|true|none|Идентификатор цели, за которой закреплено поле.|

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

<aside class="success">
This operation does not require authentication
</aside>

## Field getType

<a id="opIdget-field-getType"></a>

`GET /field/getType`

Получение типа дополнительного поля.

<h3 id="field-gettype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|id|query|string(uuid)|true|Идентификатор типа поля.|

> Example responses

> 200 Response

```json
{
  "id": "ac184494-d143-4033-8260-e2dbe266925b",
  "name": "number"
}
```

<h3 id="field-gettype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="field-gettype-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор  типа поля.|
|» name|string|true|none|Наименование типа поля.|

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

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке.|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## Field listType

<a id="opIdget-field-listType"></a>

`GET /field/listType`

Получение списка доступных типов дополнительных полей.

<h3 id="field-listtype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|itemsNumber|query|string|false|Количество объектов на странице.|
|page|query|string|false|Номер страницы.|

> Example responses

> 200 Response

```json
[
  {
    "id": "ac184494-d143-4033-8260-e2dbe266925b",
    "name": "number"
  }
]
```

<h3 id="field-listtype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="field-listtype-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор типа поля.|
|» name|string|true|none|Наименование типа поля.|

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

## Field remove

<a id="opIddelete-field-remove"></a>

`DELETE /field/remove`

Удаление дополнительного поля.

> Body parameter

```json
{
  "id": "74da7556-c917-482e-86b5-ab184045bd14"
}
```

<h3 id="field-remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string(uuid)|true|Идентификатор поля.|

> Example responses

> 200 Response

```json
{
  "id": "978307cb-fd94-41de-a3f7-8e0d777dd97b"
}
```

<h3 id="field-remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="field-remove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор поля.|

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

## Field update

<a id="opIdpatch-field-update"></a>

`PATCH /field/update`

Изменение дополнительного поля.

> Body parameter

```json
{
  "id": "74da7556-c917-482e-86b5-ab184045bd14",
  "updates": {
    "name": "name",
    "fieldTypeId": "74da7556-c917-482e-86b5-ab184045bd14"
  }
}
```

<h3 id="field-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|true|Сессионный токен пользователя.|
|body|body|object|false|Тело запроса.|
|» id|body|string(uuid)|true|Идентификатор поля.|
|» updates|body|object|true|Объект с изменениями.|
|»» name|body|string|false|Наименование поля.|
|»» fieldTypeId|body|string|false|Идентификатор типа поля.|

> Example responses

> 200 Response

```json
[
  {
    "id": "7d870e0e-6ca4-4bb0-af89-5b32b81e5297"
  }
]
```

<h3 id="field-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not uthorized!|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Not enough rights!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="field-update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|string(uuid)|true|none|Идентификатор поля.|

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
  "name": "цель1",
  "prefix": "A"
}

```

Purpose

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Id цели.|
|name|string|true|none|Наименование цели.|
|prefix|string|true|none|Префикс цели, для формирования номера талона.|

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

<h2 id="tocS_WorkerStatus">WorkerStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkerstatus"></a>
<a id="schema_WorkerStatus"></a>
<a id="tocSworkerstatus"></a>
<a id="tocsworkerstatus"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "not work"
}

```

WorkerStatus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Идентификатор статуса.|
|name|string|true|none|Наименование статуса.|

<h2 id="tocS_TicketStatus">TicketStatus</h2>
<!-- backwards compatibility -->
<a id="schematicketstatus"></a>
<a id="schema_TicketStatus"></a>
<a id="tocSticketstatus"></a>
<a id="tocsticketstatus"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "wait"
}

```

TicketStatus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Идентификатор статуса талона.|
|name|string|true|none|Наименование статуса талона.|

<h2 id="tocS_FieldType">FieldType</h2>
<!-- backwards compatibility -->
<a id="schemafieldtype"></a>
<a id="schema_FieldType"></a>
<a id="tocSfieldtype"></a>
<a id="tocsfieldtype"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "number"
}

```

FieldType

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Идентификатор типа поля.|
|name|string|true|none|НАименование типа поля.|

<h2 id="tocS_Worker">Worker</h2>
<!-- backwards compatibility -->
<a id="schemaworker"></a>
<a id="schema_Worker"></a>
<a id="tocSworker"></a>
<a id="tocsworker"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "statusId": "123e4567-e89b-12d3-a456-426614174000",
  "windowId": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Worker 1"
}

```

Worker

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Идентификатор сотрудника.|
|userId|string(uuid)|true|none|Идентификатор пользователя.|
|statusId|string(uuid)|true|none|Идентификатор статуса пользователя.|
|windowId|string(uuid)|false|none|Идентификатор окна, в котором работает сотрудник.|
|name|string|true|none|Имя сотрудника.|

<h2 id="tocS_Ticket">Ticket</h2>
<!-- backwards compatibility -->
<a id="schematicket"></a>
<a id="schema_Ticket"></a>
<a id="tocSticket"></a>
<a id="tocsticket"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "workerId": "123e4567-e89b-12d3-a456-426614174000",
  "statusId": "123e4567-e89b-12d3-a456-426614174000",
  "purposeId": "123e4567-e89b-12d3-a456-426614174000",
  "codePrefix": "Т",
  "codeNumber": "12",
  "serviceTime": "00:00:00",
  "startServiceTime": "00:00:00",
  "issuanceTime": "00:00:00",
  "waitingTime": "00:00:00"
}

```

Ticket

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Идентификатор талона.|
|workerId|string(uuid)|true|none|Идентификатор сотрудника.|
|statusId|string(uuid)|true|none|Идентификатор статуса талона.|
|purposeId|string(uuid)|true|none|Идентификатор цели.|
|codePrefix|string|true|none|Префикс цели.|
|codeNumber|string|true|none|Порядковый номер для префикса цели.|
|serviceTime|string|false|none|Время обслуживания талона.|
|startServiceTime|string|false|none|Время начала обслуживания.|
|issuanceTime|string|true|none|Время выдачи талона.|
|waitingTime|string|false|none|Время ожидания талона в очереди.|

<h2 id="tocS_AdditionalField">AdditionalField</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalfield"></a>
<a id="schema_AdditionalField"></a>
<a id="tocSadditionalfield"></a>
<a id="tocsadditionalfield"></a>

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "purposeId": "123e4567-e89b-12d3-a456-426614174000",
  "fieldTypeId": "123e4567-e89b-12d3-a456-426614174000",
  "name": "number"
}

```

AdditionalField

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Идентификатор поля.|
|purposeId|string(uuid)|true|none|Идентификатор цели.|
|fieldTypeId|string(uuid)|true|none|Идентификатор типа поля.|
|name|string|true|none|Наименование поля.|

