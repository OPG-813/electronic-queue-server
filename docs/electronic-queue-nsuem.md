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
|token|cookie|string|false|Сессионный токен пользователя.|

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
|token|cookie|string|false|Сессионный токен пользователя.|

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

<h1 id="electronic-queue-nsuem-system">System</h1>

API системы.

## System status

<a id="opIdget-system-status"></a>

`GET /system/status`

Получение данных о состоянии системы.

<h3 id="system-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|false|Сессионный токен пользователя.|

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
