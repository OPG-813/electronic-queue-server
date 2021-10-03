---
title: Electronic Queue NSUEM v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="electronic-queue-nsuem">Electronic Queue NSUEM v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API for electronic queue system from NSUEM.

Base URLs:

* <a href="https://api.queue-nsuem.web-code-developers.ru">https://api.queue-nsuem.web-code-developers.ru</a>

Email: <a href="mailto:kincharov99@gmail.com">Danil</a> Web: <a href="https://github.com/DanilSord">Danil</a> 
 License: MIT

# Authentication

<h1 id="electronic-queue-nsuem-default">Default</h1>

## post-user-login

<a id="opIdpost-user-login"></a>

`POST /user/login`

*User login*

Аутентификация пользователя по имени пользователя и паролю.

> Body parameter

```json
{
  "username": "admin",
  "password": "Qwerty123!"
}
```

<h3 id="post-user-login-parameters">Parameters</h3>

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

<h3 id="post-user-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="post-user-login-responseschema">Response Schema</h3>

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
|» message|string|true|none|Сообщение об ошибке. Internal server error!|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## get-user-logout

<a id="opIdget-user-logout"></a>

`GET /user/logout`

*User logout*

Выход пользователя из учётной записи.

<h3 id="get-user-logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|cookie|string|false|Сессионный токен пользователя.|

> Example responses

> 500 Response

```json
{
  "message": "Internal server error!",
  "httpCode": 500,
  "data": {}
}
```

<h3 id="get-user-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="get-user-logout-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» message|string|true|none|Сообщение об ошибке. Internal server error!|
|» httpCode|number|true|none|HTTP код ошибки|
|» data|object|false|none|Объект с дополнительной информацией. Отсутствует.|

<aside class="success">
This operation does not require authentication
</aside>

## post-admin-register

<a id="opIdpost-admin-register"></a>

`POST /admin/register`

*Admin register*

Регистрация администратора в системе.

> Body parameter

```json
{
  "username": "admin",
  "password": "Qwerty123!",
  "name": "Admin"
}
```

<h3 id="post-admin-register-parameters">Parameters</h3>

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
  "message": "string",
  "httpCode": 0,
  "data": {}
}
```

<h3 id="post-admin-register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request!|Inline|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Data conflict error!|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error!|Inline|

<h3 id="post-admin-register-responseschema">Response Schema</h3>

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
|» message|string|true|none|Сообщение об ошибке. Internal server error!|
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

