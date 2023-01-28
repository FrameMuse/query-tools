import { DeepWritable } from "ts-essentials"

const _SchemaSampleJson = {
  "openapi": "3.0.3",
  "info": {
    title: "",
    version: ""
  },
  "paths": {
    "/__docs__/": {
      "get": {
        "operationId": "__docs___retrieve",
        "description": "OpenApi3 schema for this API. Format can be selected via content negotiation.\n\n- YAML: application/vnd.oai.openapi\n- JSON: application/vnd.oai.openapi+json",
        "parameters": [
          {
            "in": "query",
            "name": "format",
            "schema": {
              "type": "string",
              "enum": [
                "json",
                "yaml"
              ]
            }
          },
          {
            "in": "query",
            "name": "lang",
            "schema": {
              "type": "string",
              "enum": [
                "de",
                "en",
                "ru"
              ]
            }
          }
        ],
        "tags": [
          "__docs__"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.oai.openapi": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {}
                }
              },
              "application/yaml": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {}
                }
              },
              "application/vnd.oai.openapi+json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {}
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {}
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/account/me/": {
      "get": {
        "operationId": "account_me_retrieve",
        "tags": [
          "account"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountsMe"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "patch": {
        "operationId": "account_me_partial_update",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAccountsMe"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAccountsMe"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAccountsMe"
              }
            }
          }
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountsMe"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/account/me/password/": {
      "put": {
        "operationId": "account_me_password_update",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AccountsMePassword"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AccountsMePassword"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AccountsMePassword"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          },
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountsMePassword"
                }
              }
            },
            "description": ""
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MePasswordInvalidOldPassword"
                }
              }
            },
            "description": "\tНеверный старый пароль"
          }
        }
      }
    },
    "/account/me/supports/": {
      "post": {
        "operationId": "account_me_supports_create",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AccountsSupports"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AccountsSupports"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AccountsSupports"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountsSupports"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/account/password/": {
      "get": {
        "operationId": "account_password_retrieve",
        "tags": [
          "account"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "302": {
            "description": "redirect:\n\n&nbsp;&nbsp;&nbsp;&nbsp;что-то пошло не так: https://merlines-frontend.vercel.app/\n\n&nbsp;&nbsp;&nbsp;&nbsp;всё нормально: https://merlines-frontend.vercel.app/#!/?password_session=\\<session_id\\>"
          }
        }
      },
      "post": {
        "operationId": "account_password_create",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AccountsPassword"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AccountsPassword"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AccountsPassword"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "204": {
            "description": "No response body"
          }
        }
      },
      "put": {
        "operationId": "account_password_update",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AccountsPasswordUpdate"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AccountsPasswordUpdate"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AccountsPasswordUpdate"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountsPasswordUpdate"
                }
              }
            },
            "description": ""
          },
          "408": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PasswordSessionCodeTimeOut"
                }
              }
            },
            "description": "\tКод просрочен"
          }
        }
      }
    },
    "/account/register/": {
      "get": {
        "operationId": "account_register_retrieve",
        "tags": [
          "account"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "302": {
            "description": "redirect:\n\n&nbsp;&nbsp;&nbsp;&nbsp;что-то пошло не так: https://merlines-frontend.vercel.app/\n\n&nbsp;&nbsp;&nbsp;&nbsp;всё нормально: https://merlines-frontend.vercel.app/#!/?token=<token>"
          }
        }
      },
      "post": {
        "operationId": "account_register_create",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AccountsRegister"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AccountsRegister"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AccountsRegister"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountsRegister"
                }
              }
            },
            "description": ""
          },
          "409": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RegisterEmailUnique"
                }
              }
            },
            "description": "\tuser с таким email уже существует"
          }
        }
      }
    },
    "/account/register/resend/": {
      "post": {
        "operationId": "account_register_resend_create",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AccountsRegisterResend"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AccountsRegisterResend"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AccountsRegisterResend"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "204": {
            "description": "No response body"
          }
        }
      }
    },
    "/account/social/facebook/": {
      "get": {
        "operationId": "account_social_facebook_retrieve",
        "tags": [
          "account"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "302": {
            "description": "redirect: https://merlines-frontend.herokuapp.com/#!/?token=\\<token\\>"
          }
        }
      }
    },
    "/account/social/instagram/": {
      "get": {
        "operationId": "account_social_instagram_retrieve",
        "tags": [
          "account"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "302": {
            "description": "redirect: https://merlines-frontend.herokuapp.com/#!/?token=\\<token\\>"
          }
        }
      }
    },
    "/account/token/": {
      "post": {
        "operationId": "account_token_create",
        "tags": [
          "account"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AccountsToken"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AccountsToken"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AccountsToken"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AccountsToken"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TokenInvalidPassword"
                }
              }
            },
            "description": "\tНеверный пароль"
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TokenEmailNotFound"
                }
              }
            },
            "description": "\tПользователя с таким email не существует"
          },
          "406": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TokenNotVerified"
                }
              }
            },
            "description": "\tПользователь не верифицирован"
          },
          "410": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TokenBanned"
                }
              }
            },
            "description": "\tПользователь забанен"
          }
        }
      },
      "delete": {
        "operationId": "account_token_destroy",
        "tags": [
          "account"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          }
        }
      }
    },
    "/admin/article/{id}/": {
      "get": {
        "operationId": "admin_article_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminsRetrieveArticle"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "patch": {
        "operationId": "admin_article_partial_update",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUpdateArticle"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUpdateArticle"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUpdateArticle"
              }
            }
          }
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminUpdateArticle"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "delete": {
        "operationId": "admin_article_destroy",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/article/{id}/comments/allow/": {
      "post": {
        "operationId": "admin_article_comments_allow_create",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "Если комментарии разрешены - запрос запретит их, иначе - разрешит"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/articles/": {
      "get": {
        "operationId": "admin_articles_list",
        "parameters": [
          {
            "name": "ordering",
            "required": false,
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "tags__contains",
            "schema": {
              "type": "string"
            },
            "description": "Tags содержит"
          },
          {
            "in": "query",
            "name": "title__icontains",
            "schema": {
              "type": "string"
            }
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedAdminListArticleList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "post": {
        "operationId": "admin_articles_create",
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AdminCreateArticle"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AdminCreateArticle"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AdminCreateArticle"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminCreateArticle"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/comment/{id}/": {
      "delete": {
        "operationId": "admin_comment_destroy",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "Если комментарий удалён - запрос восстановит его, иначе - удалит"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/mailing/{id}/": {
      "get": {
        "operationId": "admin_mailing_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminRetrieveMailing"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "patch": {
        "operationId": "admin_mailing_partial_update",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUpdateMailing"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUpdateMailing"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUpdateMailing"
              }
            }
          }
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminUpdateMailing"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "delete": {
        "operationId": "admin_mailing_destroy",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/mailing/{id}/start/": {
      "post": {
        "operationId": "admin_mailing_start_create",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AdminMailingStart"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AdminMailingStart"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AdminMailingStart"
              }
            }
          }
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminMailingStart"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/mailing/{id}/stop/": {
      "post": {
        "operationId": "admin_mailing_stop_create",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/penis/": {
      "get": {
        "operationId": "admin_mailings_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedAdminListMailingsList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "post": {
        "operationId": "admin_mailings_create",
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AdminCreateMailings"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AdminCreateMailings"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AdminCreateMailings"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminCreateMailings"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/tag/{id}/": {
      "put": {
        "operationId": "admin_tag_update",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AdminTag"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AdminTag"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AdminTag"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminTag"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "delete": {
        "operationId": "admin_tag_destroy",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminTag"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/tags/": {
      "post": {
        "operationId": "admin_tags_create",
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AdminTag"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/AdminTag"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/AdminTag"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminTag"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/user/{id}/": {
      "get": {
        "operationId": "admin_user_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminUser"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "patch": {
        "operationId": "admin_user_partial_update",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUser"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUser"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/PatchedAdminUser"
              }
            }
          }
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "delete": {
        "operationId": "admin_user_destroy",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/users/": {
      "get": {
        "operationId": "admin_users_list",
        "parameters": [
          {
            "in": "query",
            "name": "first_name",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "id",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "type",
            "schema": {
              "type": "integer",
              "enum": [
                1,
                2,
                3,
                4,
                5
              ]
            }
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedAdminUsersList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/admin/users/editors/": {
      "get": {
        "operationId": "admin_users_editors_list",
        "parameters": [
          {
            "in": "query",
            "name": "first_name",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "id",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "admin"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedAdminUsersEditorsList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/blog/article/{article_id}/comments/": {
      "get": {
        "operationId": "blog_article_comments_list",
        "parameters": [
          {
            "in": "path",
            "name": "article_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "blog"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedBlogListCommentList"
                }
              }
            },
            "description": ""
          }
        }
      },
      "post": {
        "operationId": "blog_article_comments_create",
        "parameters": [
          {
            "in": "path",
            "name": "article_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "blog"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BlogCreateComment"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/BlogCreateComment"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/BlogCreateComment"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BlogCreateComment"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/blog/article/{id}/": {
      "get": {
        "operationId": "blog_article_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "blog"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BlogRetrieveArticle"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/blog/article/{id}/like/": {
      "post": {
        "operationId": "blog_article_like_create",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "blog"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/blog/articles/": {
      "get": {
        "operationId": "blog_articles_list",
        "parameters": [
          {
            "name": "ordering",
            "required": false,
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "tags__contains",
            "schema": {
              "type": "string"
            },
            "description": "Tags содержит"
          },
          {
            "in": "query",
            "name": "title__icontains",
            "schema": {
              "type": "string"
            }
          }
        ],
        "tags": [
          "blog"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedBlogArticlesList"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/blog/tags/": {
      "get": {
        "operationId": "blog_tags_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "blog"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedBlogTagsList"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/calendar/air/{origin_id}/{destination_id}/month/{year}/{month}/": {
      "get": {
        "operationId": "calendar_air_month_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "destination_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "month",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "origin_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "year",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "calendar"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalendarAirMonth"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/calendar/air/{origin_id}/{destination_id}/ticket/{year}/{month}/{day}/": {
      "get": {
        "operationId": "calendar_air_ticket_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "day",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "destination_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "month",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "origin_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "year",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "calendar"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalendarAirTicket"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/calendar/air/{origin_id}/{destination_id}/week/{year}/{month}/{day}/": {
      "get": {
        "operationId": "calendar_air_week_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "day",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "destination_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "month",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "origin_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "year",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "calendar"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalendarAirWeek"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/calendar/air/{origin_id}/{destination_id}/week/round/{year}/{month}/{day}/{return_year}/{return_month}/{return_day}/": {
      "get": {
        "operationId": "calendar_air_week_round_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "day",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "destination_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "month",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "origin_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "return_day",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "return_month",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "return_year",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "year",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "calendar"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalendarAirWeekRound"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/calendar/air/{origin_id}/{destination_id}/year/": {
      "get": {
        "operationId": "calendar_air_year_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "destination_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "origin_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "calendar"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalendarAirYear"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/favourites/air/": {
      "get": {
        "operationId": "favourites_air_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "favourites"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedTicketsAirSessionList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "post": {
        "operationId": "favourites_air_create",
        "tags": [
          "favourites"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateFavouritesAir"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/CreateFavouritesAir"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/CreateFavouritesAir"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateFavouritesAir"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/favourites/air/{ticket_id}/": {
      "delete": {
        "operationId": "favourites_air_destroy",
        "parameters": [
          {
            "in": "path",
            "name": "ticket_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "favourites"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/favourites/air/{ticket_id}/offers/": {
      "get": {
        "operationId": "favourites_air_offers_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "path",
            "name": "ticket_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "favourites"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedTicketsAirSessionTicketOffersList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/geo/air/cities/": {
      "get": {
        "operationId": "geo_air_cities_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "title__icontains",
            "schema": {
              "type": "string"
            },
            "description": "Title начинается"
          }
        ],
        "tags": [
          "geo"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedGeoAirCitiesList"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/geo/air/cities/{id}/": {
      "get": {
        "operationId": "geo_air_cities_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "geo"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GeoAirCity"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/geo/ip/": {
      "get": {
        "operationId": "geo_ip_retrieve",
        "tags": [
          "geo"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GeoIp"
                }
              }
            },
            "description": ""
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IpNotFound"
                }
              }
            },
            "description": "\tНе удалось получить информацию"
          }
        }
      }
    },
    "/geo/ip/air/": {
      "get": {
        "operationId": "geo_ip_air_retrieve",
        "tags": [
          "geo"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GeoIpAir"
                }
              }
            },
            "description": ""
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IpNotFound"
                }
              }
            },
            "description": "\tНе удалось получить информацию"
          }
        }
      }
    },
    "/history/": {
      "get": {
        "operationId": "history_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "history"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedListHistoryList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "delete": {
        "operationId": "history_destroy",
        "tags": [
          "history"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/history/{id}/": {
      "delete": {
        "operationId": "history_destroy_2",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "history"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/main/echo/": {
      "get": {
        "operationId": "main_echo_retrieve",
        "tags": [
          "main"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Echo"
                }
              }
            },
            "description": ""
          }
        }
      },
      "post": {
        "operationId": "main_echo_create",
        "tags": [
          "main"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "201": {
            "description": "No response body"
          }
        }
      },
      "put": {
        "operationId": "main_echo_update",
        "tags": [
          "main"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "description": "No response body"
          }
        }
      },
      "patch": {
        "operationId": "main_echo_partial_update",
        "tags": [
          "main"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "description": "No response body"
          }
        }
      },
      "delete": {
        "operationId": "main_echo_destroy",
        "tags": [
          "main"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "204": {
            "description": "No response body"
          }
        }
      }
    },
    "/specials/{city_id}/air/": {
      "get": {
        "operationId": "specials_air_list",
        "parameters": [
          {
            "in": "path",
            "name": "city_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "specials"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedSpecialsCityIdAirList"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/tickets/air/": {
      "post": {
        "operationId": "tickets_air_create",
        "tags": [
          "tickets"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TicketsAir"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/TicketsAir"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/TicketsAir"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAir"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/tickets/air/{session_id}/": {
      "get": {
        "operationId": "tickets_air_list",
        "parameters": [
          {
            "in": "query",
            "name": "airlines",
            "schema": {
              "type": "string"
            },
            "description": "Airlines равно (type: comma separated ints - ids)"
          },
          {
            "in": "query",
            "name": "destination_airports",
            "schema": {
              "type": "string"
            },
            "description": "destination_airports[{trip_number}] равно (type: comma separated ints - ids)"
          },
          {
            "in": "query",
            "name": "end_date__in",
            "schema": {
              "type": "string"
            },
            "description": "end_date__in[{trip_number}] содержит (type: date)"
          },
          {
            "in": "query",
            "name": "end_time__gte",
            "schema": {
              "type": "string",
              "format": "time"
            },
            "description": "end_time__gte[{trip_number}] больше или равно (type: time)"
          },
          {
            "in": "query",
            "name": "end_time__lte",
            "schema": {
              "type": "string",
              "format": "time"
            },
            "description": "end_time__lte[{trip_number}] меньше или равно (type: time)"
          },
          {
            "in": "query",
            "name": "offers",
            "schema": {
              "type": "string"
            },
            "description": "Offers равно (type: comma separated ints - gate_ids)"
          },
          {
            "name": "ordering",
            "required": false,
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "origin_airports",
            "schema": {
              "type": "string"
            },
            "description": "origin_airports[{trip_number}] равно (type: comma separated ints - ids)"
          },
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "require_baggage",
            "schema": {
              "type": "boolean"
            },
            "description": "Require baggage is"
          },
          {
            "in": "path",
            "name": "session_id",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "query",
            "name": "start_time__gte",
            "schema": {
              "type": "string",
              "format": "time"
            },
            "description": "start_time__gte[{trip_number}] больше или равно (type: time)"
          },
          {
            "in": "query",
            "name": "start_time__lte",
            "schema": {
              "type": "string",
              "format": "time"
            },
            "description": "start_time__lte[{trip_number}] меньше или равно (type: time)"
          },
          {
            "in": "query",
            "name": "transfer_airports",
            "schema": {
              "type": "string"
            },
            "description": "transfer_airports[{trip_number}] равно (type: comma separated ints - ids)"
          },
          {
            "in": "query",
            "name": "transfer_time__gte",
            "schema": {
              "type": "number"
            },
            "description": "transfer_time__gte[{trip_number}] больше или равно (type: int - timedelta в секундах)"
          },
          {
            "in": "query",
            "name": "transfer_time__lte",
            "schema": {
              "type": "number"
            },
            "description": "transfer_time__lte[{trip_number}] меньше или равно (type: int - timedelta в секундах)"
          },
          {
            "in": "query",
            "name": "transfers",
            "schema": {
              "type": "string"
            },
            "description": "Transfers равно (type: comma separated ints)"
          },
          {
            "in": "query",
            "name": "travel_time__gte",
            "schema": {
              "type": "number"
            },
            "description": "travel_time__gte[{trip_number}] больше или равно (type: int - timedelta в секундах)"
          },
          {
            "in": "query",
            "name": "travel_time__lte",
            "schema": {
              "type": "number"
            },
            "description": "travel_time__lte[{trip_number}] меньше или равно (type: int - timedelta в секундах)"
          }
        ],
        "tags": [
          "tickets"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedTicketsAirSessionList"
                }
              }
            },
            "description": ""
          },
          "408": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSessionTimeout"
                }
              }
            },
            "description": "\tВремя жизни сессии закончилось"
          }
        }
      }
    },
    "/tickets/air/{session_id}/{ticket_id}/offers/": {
      "get": {
        "operationId": "tickets_air_offers_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "path",
            "name": "session_id",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "ticket_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "tickets"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedTicketsAirSessionTicketOffersList"
                }
              }
            },
            "description": ""
          },
          "408": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSessionTimeout"
                }
              }
            },
            "description": "\tВремя жизни сессии закончилось"
          }
        }
      }
    },
    "/tickets/air/{session_id}/filters/": {
      "get": {
        "operationId": "tickets_air_filters_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "session_id",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "tags": [
          "tickets"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSessionFilters"
                }
              }
            },
            "description": ""
          },
          "408": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSessionTimeout"
                }
              }
            },
            "description": "\tВремя жизни сессии закончилось"
          }
        }
      }
    },
    "/tickets/air/{session_id}/offer/{id}/link/": {
      "get": {
        "operationId": "tickets_air_offer_link_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "integer"
            },
            "required": true
          },
          {
            "in": "path",
            "name": "session_id",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "tags": [
          "tickets"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirOfferLink"
                }
              }
            },
            "description": ""
          },
          "408": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSessionTimeout"
                }
              }
            },
            "description": "\tВремя жизни сессии закончилось"
          },
          "423": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/OfferLocked"
                }
              }
            },
            "description": "\tЭтот offer недоступен в данной сессии (его нет в выдаче)"
          }
        }
      }
    },
    "/tickets/air/segment/{segment_id}/about/": {
      "get": {
        "operationId": "tickets_air_segment_about_retrieve",
        "parameters": [
          {
            "in": "path",
            "name": "segment_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "tickets"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          },
          {}
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSegmentAbout"
                }
              }
            },
            "description": ""
          }
        }
      }
    },
    "/tracking/air/queries/": {
      "get": {
        "operationId": "tracking_air_queries_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "tracking"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedListHistoryList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "delete": {
        "operationId": "tracking_air_queries_destroy",
        "tags": [
          "tracking"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/tracking/air/queries/{query_id}/": {
      "delete": {
        "operationId": "tracking_air_queries_destroy_2",
        "parameters": [
          {
            "in": "path",
            "name": "query_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "tracking"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/tracking/air/queries/{session_id}/": {
      "post": {
        "operationId": "tracking_air_queries_create",
        "parameters": [
          {
            "in": "path",
            "name": "session_id",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "tags": [
          "tracking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TrackingAirQueriesSession"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/TrackingAirQueriesSession"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/TrackingAirQueriesSession"
              }
            }
          }
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TrackingAirQueriesSession"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          },
          "408": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSessionTimeout"
                }
              }
            },
            "description": "\tВремя жизни сессии закончилось"
          }
        }
      }
    },
    "/tracking/air/tickets/": {
      "get": {
        "operationId": "tracking_air_tickets_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "tags": [
          "tracking"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedTrackingAirTicketsList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      },
      "delete": {
        "operationId": "tracking_air_tickets_destroy",
        "tags": [
          "tracking"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/tracking/air/tickets/{session_id}/": {
      "post": {
        "operationId": "tracking_air_tickets_create",
        "parameters": [
          {
            "in": "path",
            "name": "session_id",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "tags": [
          "tracking"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TrackingAirTicketsSession"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/TrackingAirTicketsSession"
              }
            },
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/TrackingAirTicketsSession"
              }
            }
          },
          "required": true
        },
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TrackingAirTicketsSession"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          },
          "408": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TicketsAirSessionTimeout"
                }
              }
            },
            "description": "\tВремя жизни сессии закончилось"
          }
        }
      }
    },
    "/tracking/air/tickets/{ticket_id}/": {
      "delete": {
        "operationId": "tracking_air_tickets_destroy_2",
        "parameters": [
          {
            "in": "path",
            "name": "ticket_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "tracking"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "204": {
            "description": "No response body"
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    },
    "/tracking/air/tickets/{ticket_id}/offers/": {
      "get": {
        "operationId": "tracking_air_tickets_offers_list",
        "parameters": [
          {
            "name": "page",
            "required": false,
            "in": "query",
            "description": "A page number within the paginated result set.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "page_size",
            "required": false,
            "in": "query",
            "description": "Number of results to return per page.",
            "schema": {
              "type": "integer"
            }
          },
          {
            "in": "path",
            "name": "ticket_id",
            "schema": {
              "type": "integer"
            },
            "required": true
          }
        ],
        "tags": [
          "tracking"
        ],
        "security": [
          {
            "Token": []
          },
          {
            "Cookie": []
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaginatedTicketsAirSessionTicketOffersList"
                }
              }
            },
            "description": ""
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthenticateInvalidToken"
                }
              }
            },
            "description": "\tНеверный токен"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AccountsMe": {
        "type": "object",
        "properties": {
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "format": "email",
            "readOnly": true
          },
          "type": {
            "$ref": "#/components/schemas/TypeEnum"
          },
          "avatar": {
            "type": "string",
            "format": "uri",
            "nullable": true
          }
        },
        "required": [
          "email",
          "first_name",
          "type"
        ]
      },
      "AccountsMePassword": {
        "type": "object",
        "properties": {
          "old_password": {
            "type": "string",
            "writeOnly": true,
            "maxLength": 128
          },
          "new_password": {
            "type": "string",
            "writeOnly": true,
            "maxLength": 128
          }
        },
        "required": [
          "new_password",
          "old_password"
        ]
      },
      "AccountsPassword": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email",
            "writeOnly": true,
            "maxLength": 254
          }
        },
        "required": [
          "email"
        ]
      },
      "AccountsPasswordUpdate": {
        "type": "object",
        "properties": {
          "password": {
            "type": "string",
            "writeOnly": true,
            "maxLength": 128
          },
          "session": {
            "type": "string",
            "writeOnly": true
          },
          "token": {
            "type": "string",
            "readOnly": true
          }
        },
        "required": [
          "password",
          "session",
          "token"
        ]
      },
      "AccountsRegister": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email",
            "writeOnly": true,
            "maxLength": 254
          },
          "password": {
            "type": "string",
            "writeOnly": true,
            "maxLength": 128
          },
          "first_name": {
            "type": "string",
            "writeOnly": true
          },
          "last_name": {
            "type": "string",
            "writeOnly": true
          },
          "id": {
            "type": "integer",
            "readOnly": true
          }
        },
        "required": [
          "email",
          "first_name",
          "id",
          "password"
        ]
      },
      "AccountsRegisterResend": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email",
            "writeOnly": true,
            "maxLength": 254
          }
        },
        "required": [
          "email"
        ]
      },
      "AccountsSupports": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "writeOnly": true
          }
        },
        "required": [
          "text"
        ]
      },
      "AccountsToken": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email",
            "writeOnly": true,
            "maxLength": 254
          },
          "password": {
            "type": "string",
            "writeOnly": true,
            "maxLength": 128
          },
          "token": {
            "type": "string",
            "readOnly": true
          }
        },
        "required": [
          "email",
          "password",
          "token"
        ]
      },
      "AdminCreateArticle": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string",
            "writeOnly": true
          },
          "content": {
            "type": "string",
            "writeOnly": true
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "writeOnly": true,
            "default": []
          },
          "preview": {
            "type": "string",
            "writeOnly": true
          },
          "is_draft": {
            "type": "boolean",
            "writeOnly": true,
            "default": true
          },
          "files": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_AdminCreateArticleFile"
            },
            "writeOnly": true
          }
        },
        "required": [
          "content",
          "files",
          "id",
          "preview",
          "title"
        ]
      },
      "AdminCreateMailings": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "subject": {
            "type": "string",
            "writeOnly": true
          },
          "content": {
            "type": "string",
            "writeOnly": true
          }
        },
        "required": [
          "content",
          "id",
          "subject"
        ]
      },
      "AdminListArticle": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/_AdminListArticleAuthor"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "comments_count": {
            "type": "integer",
            "readOnly": true
          },
          "deleted_comments_count": {
            "type": "integer",
            "readOnly": true
          },
          "is_draft": {
            "type": "boolean"
          }
        },
        "required": [
          "author",
          "comments_count",
          "deleted_comments_count",
          "id",
          "title"
        ]
      },
      "AdminListMailings": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "subject": {
            "type": "string"
          },
          "is_running": {
            "type": "boolean",
            "readOnly": true
          }
        },
        "required": [
          "id",
          "is_running",
          "subject"
        ]
      },
      "AdminMailingStart": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          }
        },
        "required": [
          "id"
        ]
      },
      "AdminRetrieveMailing": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "subject": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "is_running": {
            "type": "boolean",
            "readOnly": true
          }
        },
        "required": [
          "content",
          "id",
          "is_running",
          "subject"
        ]
      },
      "AdminTag": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "title"
        ]
      },
      "AdminUpdateArticle": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string",
            "writeOnly": true
          },
          "content": {
            "type": "string",
            "writeOnly": true
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "writeOnly": true,
            "default": []
          },
          "preview": {
            "type": "string",
            "writeOnly": true
          },
          "is_draft": {
            "type": "boolean",
            "writeOnly": true
          },
          "files": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_AdminUpdateArticleFile"
            },
            "writeOnly": true
          }
        },
        "required": [
          "content",
          "files",
          "id",
          "preview",
          "title"
        ]
      },
      "AdminUpdateMailing": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "subject": {
            "type": "string",
            "writeOnly": true
          },
          "content": {
            "type": "string",
            "writeOnly": true
          }
        },
        "required": [
          "content",
          "id",
          "subject"
        ]
      },
      "AdminUser": {
        "type": "object",
        "properties": {
          "type": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TypeEnum"
              }
            ],
            "writeOnly": true,
            "description": "1 — BANNED (Banned)\n\n2 — DEFAULT (Default)\n\n3 — EDITOR (Editor)\n\n4 — ADMIN (Admin)\n\n5 — SUPER (Super)",
            "minimum": 0,
            "maximum": 32767
          }
        }
      },
      "AdminUsers": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "first_name": {
            "type": "string",
            "readOnly": true
          },
          "last_name": {
            "type": "string",
            "readOnly": true
          },
          "email": {
            "type": "string",
            "format": "email",
            "readOnly": true
          },
          "type": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TypeEnum"
              }
            ],
            "readOnly": true,
            "description": "1 — BANNED (Banned)\n\n2 — DEFAULT (Default)\n\n3 — EDITOR (Editor)\n\n4 — ADMIN (Admin)\n\n5 — SUPER (Super)"
          }
        },
        "required": [
          "email",
          "first_name",
          "id",
          "last_name",
          "type"
        ]
      },
      "AdminUsersEditors": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "first_name": {
            "type": "string",
            "readOnly": true
          },
          "last_name": {
            "type": "string",
            "readOnly": true
          },
          "email": {
            "type": "string",
            "format": "email",
            "readOnly": true
          },
          "articles_count": {
            "type": "integer",
            "readOnly": true
          }
        },
        "required": [
          "articles_count",
          "email",
          "first_name",
          "id",
          "last_name"
        ]
      },
      "AdminsRetrieveArticle": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "preview": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "content": {
            "type": "string"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "allow_comments": {
            "type": "boolean"
          },
          "is_draft": {
            "type": "boolean"
          },
          "author": {
            "$ref": "#/components/schemas/_AdminsRetrieveArticleAuthor"
          },
          "files": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_AdminsRetrieveArticleFiles"
            }
          }
        },
        "required": [
          "author",
          "content",
          "files",
          "id",
          "preview",
          "title"
        ]
      },
      "AlcoholEnum": {
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      },
      "AuthenticateInvalidToken": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "authenticate_invalid_token"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "Author": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "avatar": {
            "type": "string",
            "format": "uri",
            "nullable": true
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          }
        },
        "required": [
          "first_name",
          "id"
        ]
      },
      "BeverageEnum": {
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      },
      "BlogArticles": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "preview": {
            "type": "string",
            "readOnly": true
          },
          "title": {
            "type": "string"
          },
          "created_at": {
            "type": "string",
            "format": "date-time"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "id",
          "preview",
          "title"
        ]
      },
      "BlogCreateComment": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "writeOnly": true,
            "maxLength": 500
          },
          "reply": {
            "type": "integer",
            "writeOnly": true
          },
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "created_at": {
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "is_deleted": {
            "type": "boolean",
            "readOnly": true
          },
          "author": {
            "allOf": [
              {
                "$ref": "#/components/schemas/Author"
              }
            ],
            "readOnly": true
          }
        },
        "required": [
          "author",
          "created_at",
          "id",
          "is_deleted",
          "text"
        ]
      },
      "BlogListComment": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "created_at": {
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "is_deleted": {
            "type": "boolean",
            "readOnly": true
          },
          "author": {
            "allOf": [
              {
                "$ref": "#/components/schemas/Author"
              }
            ],
            "readOnly": true
          },
          "text": {
            "type": "string",
            "readOnly": true,
            "nullable": true,
            "description": "Текст удалённых комментариев виден только адмиистраторам"
          },
          "replies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BlogListComment"
            },
            "readOnly": true,
            "title": "BlogListComment",
            "description": "Рекурсивная сериализация"
          }
        },
        "required": [
          "author",
          "created_at",
          "id",
          "is_deleted",
          "replies",
          "text"
        ]
      },
      "BlogRetrieveArticle": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "preview": {
            "type": "string",
            "readOnly": true
          },
          "title": {
            "type": "string",
            "readOnly": true
          },
          "created_at": {
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "content": {
            "type": "string",
            "readOnly": true
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "readOnly": true
          },
          "allow_comments": {
            "type": "boolean",
            "readOnly": true
          },
          "likes": {
            "type": "integer",
            "readOnly": true
          },
          "liked": {
            "type": "boolean",
            "readOnly": true
          },
          "author": {
            "allOf": [
              {
                "$ref": "#/components/schemas/Author"
              }
            ],
            "readOnly": true
          },
          "files": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_ArticleFile"
            },
            "readOnly": true
          }
        },
        "required": [
          "allow_comments",
          "author",
          "content",
          "created_at",
          "files",
          "id",
          "liked",
          "likes",
          "preview",
          "tags",
          "title"
        ]
      },
      "BlogTags": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "title"
        ]
      },
      "CalendarAirMonth": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "price": {
            "type": "integer",
            "minimum": 1
          }
        },
        "required": [
          "date",
          "price"
        ]
      },
      "CalendarAirTicket": {
        "type": "object",
        "properties": {
          "airline": {
            "allOf": [
              {
                "$ref": "#/components/schemas/_CalendarAirTicketAirline"
              }
            ],
            "readOnly": true,
            "nullable": true
          },
          "trip": {
            "allOf": [
              {
                "$ref": "#/components/schemas/_CalendarAirTicketTrip"
              }
            ],
            "readOnly": true
          }
        },
        "required": [
          "airline",
          "trip"
        ]
      },
      "CalendarAirWeek": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "price": {
            "type": "integer",
            "nullable": true
          }
        },
        "required": [
          "date",
          "price"
        ]
      },
      "CalendarAirWeekRound": {
        "type": "object",
        "properties": {
          "departure_date": {
            "type": "string",
            "format": "date"
          },
          "return_date": {
            "type": "string",
            "format": "date"
          },
          "price": {
            "type": "integer",
            "nullable": true
          }
        },
        "required": [
          "departure_date",
          "price",
          "return_date"
        ]
      },
      "CalendarAirYear": {
        "type": "object",
        "properties": {
          "year": {
            "type": "integer"
          },
          "month": {
            "type": "integer",
            "maximum": 12,
            "minimum": 1
          },
          "price": {
            "type": "integer",
            "minimum": 1
          }
        },
        "required": [
          "month",
          "price",
          "year"
        ]
      },
      "CreateFavouritesAir": {
        "type": "object",
        "properties": {
          "ticket": {
            "type": "integer",
            "writeOnly": true
          }
        },
        "required": [
          "ticket"
        ]
      },
      "CurrencyEnum": {
        "enum": [
          "RUB",
          "USD",
          "EUR"
        ],
        "type": "string"
      },
      "Echo": {
        "type": "object",
        "properties": {
          "GET": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "key": "value"
            }
          },
          "POST": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "key": "value"
            }
          },
          "data": {
            "type": "string",
            "readOnly": true,
            "default": "Any"
          },
          "query_params": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "key": "value"
            }
          },
          "user": {
            "type": "string",
            "readOnly": true
          },
          "auth": {
            "type": "string",
            "readOnly": true
          },
          "args": {
            "type": "array",
            "items": {
              "type": "string",
              "default": "Any"
            },
            "readOnly": true
          },
          "kwargs": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "key": "value"
            }
          },
          "queries": {
            "type": "integer",
            "readOnly": true
          },
          "uri": {
            "type": "string",
            "readOnly": true
          }
        },
        "required": [
          "GET",
          "POST",
          "args",
          "auth",
          "data",
          "kwargs",
          "queries",
          "query_params",
          "uri",
          "user"
        ]
      },
      "EntertainmentEnum": {
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      },
      "FoodEnum": {
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      },
      "GeoAirCities": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "country_title": {
            "type": "string",
            "readOnly": true
          },
          "airports": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_GeoAirCitiesAirport"
            },
            "readOnly": true
          }
        },
        "required": [
          "airports",
          "code",
          "country_title",
          "id",
          "title"
        ]
      },
      "GeoAirCity": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          },
          "code": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "GeoIp": {
        "type": "object",
        "properties": {
          "language": {
            "allOf": [
              {
                "$ref": "#/components/schemas/LanguageEnum"
              }
            ],
            "readOnly": true,
            "description": "RU — RU (Русский)\n\nEN — EN (Английский)\n\nDE — DE (Немецкий)"
          },
          "currency": {
            "allOf": [
              {
                "$ref": "#/components/schemas/CurrencyEnum"
              }
            ],
            "readOnly": true,
            "description": "RUB — RUB (Рубль)\n\nUSD — USD (Доллар США)\n\nEUR — EUR (Евро)"
          }
        },
        "required": [
          "currency",
          "language"
        ]
      },
      "GeoIpAir": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          },
          "code": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "IpNotFound": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "ip_not_found"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "LanguageEnum": {
        "enum": [
          "RU",
          "EN",
          "DE"
        ],
        "type": "string"
      },
      "ListHistory": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "travel_class": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TravelClassEnum"
              }
            ],
            "minimum": 0,
            "maximum": 32767
          },
          "adults": {
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "children": {
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "infants": {
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "trips": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_ListHistoryTrips"
            }
          }
        },
        "required": [
          "adults",
          "children",
          "id",
          "infants",
          "travel_class",
          "trips"
        ]
      },
      "MePasswordInvalidOldPassword": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "me_password_invalid_old_password"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "OfferLocked": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "offer_locked"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "PaginatedAdminListArticleList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AdminListArticle"
            }
          }
        }
      },
      "PaginatedAdminListMailingsList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AdminListMailings"
            }
          }
        }
      },
      "PaginatedAdminUsersEditorsList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AdminUsersEditors"
            }
          }
        }
      },
      "PaginatedAdminUsersList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AdminUsers"
            }
          }
        }
      },
      "PaginatedBlogArticlesList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BlogArticles"
            }
          }
        }
      },
      "PaginatedBlogListCommentList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BlogListComment"
            }
          }
        }
      },
      "PaginatedBlogTagsList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BlogTags"
            }
          }
        }
      },
      "PaginatedGeoAirCitiesList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GeoAirCities"
            }
          }
        }
      },
      "PaginatedListHistoryList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ListHistory"
            }
          }
        }
      },
      "PaginatedSpecialsCityIdAirList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SpecialsCityIdAir"
            }
          }
        }
      },
      "PaginatedTicketsAirSessionList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TicketsAirSession"
            }
          }
        }
      },
      "PaginatedTicketsAirSessionTicketOffersList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TicketsAirSessionTicketOffers"
            }
          }
        }
      },
      "PaginatedTrackingAirTicketsList": {
        "type": "object",
        "properties": {
          "count": {
            "type": "integer",
            "example": 123
          },
          "results": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TrackingAirTickets"
            }
          }
        }
      },
      "PasswordSessionCodeTimeOut": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "password_session_code_time_out"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "PatchedAccountsMe": {
        "type": "object",
        "properties": {
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "format": "email",
            "readOnly": true
          },
          "type": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TypeEnum"
              }
            ],
            "readOnly": true,
            "description": "1 — BANNED (Banned)\n\n2 — DEFAULT (Default)\n\n3 — EDITOR (Editor)\n\n4 — ADMIN (Admin)\n\n5 — SUPER (Super)"
          },
          "avatar": {
            "type": "string",
            "format": "uri",
            "nullable": true
          }
        }
      },
      "PatchedAdminUpdateArticle": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string",
            "writeOnly": true
          },
          "content": {
            "type": "string",
            "writeOnly": true
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "writeOnly": true,
            "default": []
          },
          "preview": {
            "type": "string",
            "writeOnly": true
          },
          "is_draft": {
            "type": "boolean",
            "writeOnly": true
          },
          "files": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_AdminUpdateArticleFile"
            },
            "writeOnly": true
          }
        }
      },
      "PatchedAdminUpdateMailing": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "subject": {
            "type": "string",
            "writeOnly": true
          },
          "content": {
            "type": "string",
            "writeOnly": true
          }
        }
      },
      "PatchedAdminUser": {
        "type": "object",
        "properties": {
          "type": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TypeEnum"
              }
            ],
            "writeOnly": true,
            "description": "1 — BANNED (Banned)\n\n2 — DEFAULT (Default)\n\n3 — EDITOR (Editor)\n\n4 — ADMIN (Admin)\n\n5 — SUPER (Super)",
            "minimum": 0,
            "maximum": 32767
          }
        }
      },
      "PowerEnum": {
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      },
      "RegisterEmailUnique": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "register_email_unique"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "SpecialsCityIdAir": {
        "type": "object",
        "properties": {
          "price": {
            "type": "number",
            "format": "float"
          },
          "destination": {
            "$ref": "#/components/schemas/_SpecialsCityIdAirDestination"
          },
          "date": {
            "type": "string",
            "format": "date"
          }
        },
        "required": [
          "date",
          "destination",
          "price"
        ]
      },
      "TicketsAir": {
        "type": "object",
        "properties": {
          "adults": {
            "type": "integer",
            "minimum": 1,
            "writeOnly": true,
            "default": 1
          },
          "children": {
            "type": "integer",
            "minimum": 0,
            "writeOnly": true,
            "default": 0
          },
          "infants": {
            "type": "integer",
            "minimum": 0,
            "writeOnly": true,
            "default": 0
          },
          "travel_class": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TravelClassEnum"
              }
            ],
            "writeOnly": true,
            "description": "1 — Y (Эконом)\n\n2 — C (Бизнес)"
          },
          "trips": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirTrip"
            },
            "writeOnly": true
          },
          "session": {
            "type": "string",
            "readOnly": true
          }
        },
        "required": [
          "session",
          "travel_class",
          "trips"
        ]
      },
      "TicketsAirOfferLink": {
        "type": "object",
        "properties": {
          "gate_id": {
            "type": "integer"
          },
          "click_id": {
            "type": "integer"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "method": {
            "type": "string"
          },
          "params": {
            "type": "object",
            "additionalProperties": {}
          }
        },
        "required": [
          "click_id",
          "gate_id",
          "method",
          "params",
          "url"
        ]
      },
      "TicketsAirSegmentAbout": {
        "type": "object",
        "properties": {
          "airline": {
            "type": "integer",
            "readOnly": true
          },
          "aircraft": {
            "type": "string",
            "readOnly": true
          },
          "travel_class": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TravelClassEnum"
              }
            ],
            "readOnly": true
          },
          "food": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FoodEnum"
              }
            ],
            "readOnly": true,
            "description": "0 — NO (Нет)\n\n1 — FREE (Бесплатно)\n\n2 — PAID (Платно)"
          },
          "entertainment": {
            "allOf": [
              {
                "$ref": "#/components/schemas/EntertainmentEnum"
              }
            ],
            "readOnly": true,
            "description": "0 — NO (Нет)\n\n1 — FREE (Бесплатно)\n\n2 — PAID (Платно)"
          },
          "alcohol": {
            "allOf": [
              {
                "$ref": "#/components/schemas/AlcoholEnum"
              }
            ],
            "readOnly": true,
            "description": "0 — NO (Нет)\n\n1 — FREE (Бесплатно)\n\n2 — PAID (Платно)"
          },
          "beverage": {
            "allOf": [
              {
                "$ref": "#/components/schemas/BeverageEnum"
              }
            ],
            "readOnly": true,
            "description": "0 — NO (Нет)\n\n1 — FREE (Бесплатно)\n\n2 — PAID (Платно)"
          },
          "power": {
            "allOf": [
              {
                "$ref": "#/components/schemas/PowerEnum"
              }
            ],
            "readOnly": true,
            "description": "0 — NO (Нет)\n\n1 — FREE (Бесплатно)\n\n2 — PAID (Платно)"
          },
          "wifi": {
            "allOf": [
              {
                "$ref": "#/components/schemas/WifiEnum"
              }
            ],
            "readOnly": true,
            "description": "0 — NO (Нет)\n\n1 — FREE (Бесплатно)\n\n2 — PAID (Платно)"
          }
        },
        "required": [
          "aircraft",
          "airline",
          "alcohol",
          "beverage",
          "entertainment",
          "food",
          "power",
          "travel_class",
          "wifi"
        ]
      },
      "TicketsAirSession": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "best_offer": {
            "$ref": "#/components/schemas/_TicketsAirSessionBestOffer"
          },
          "price_with_baggage": {
            "type": "number",
            "format": "float"
          },
          "trips": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionTrips"
            }
          },
          "is_favorite": {
            "type": "boolean"
          },
          "is_tracked": {
            "type": "boolean"
          }
        },
        "required": [
          "best_offer",
          "id",
          "is_favorite",
          "is_tracked",
          "price_with_baggage",
          "trips"
        ]
      },
      "TicketsAirSessionFilters": {
        "type": "object",
        "properties": {
          "in_progress": {
            "type": "boolean",
            "readOnly": true
          },
          "in_tracked": {
            "type": "boolean",
            "readOnly": true
          },
          "transfers": {
            "type": "array",
            "items": {
              "type": "integer"
            },
            "readOnly": true
          },
          "arrival_dates": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "date"
              }
            },
            "readOnly": true
          },
          "travel_times": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersRange"
            },
            "readOnly": true
          },
          "transfer_times": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersRange"
            },
            "readOnly": true
          },
          "baggage_min_price": {
            "type": "number",
            "format": "float",
            "readOnly": true
          },
          "airlines": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersAirlines"
            },
            "readOnly": true
          },
          "airports": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersAirports"
            },
            "readOnly": true
          },
          "offers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersOffers"
            },
            "readOnly": true
          },
          "trip_cities": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersTripCities"
            },
            "readOnly": true
          },
          "transfer_cities": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/_TicketsAirSessionFiltersTransferCities"
              }
            },
            "readOnly": true
          },
          "best_price_of_faster": {
            "type": "number",
            "format": "float",
            "readOnly": true
          },
          "best_price": {
            "type": "number",
            "format": "float",
            "readOnly": true
          }
        },
        "required": [
          "airlines",
          "airports",
          "arrival_dates",
          "baggage_min_price",
          "best_price",
          "best_price_of_faster",
          "in_progress",
          "in_tracked",
          "offers",
          "transfer_cities",
          "transfer_times",
          "transfers",
          "travel_times",
          "trip_cities"
        ]
      },
      "TicketsAirSessionTicketOffers": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "gate_id": {
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "title": {
            "type": "string"
          },
          "price": {
            "type": "number",
            "format": "float"
          }
        },
        "required": [
          "gate_id",
          "id",
          "price",
          "title"
        ]
      },
      "TicketsAirSessionTimeout": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "tickets_air_session_timeout"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "TokenBanned": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "token_banned"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "TokenEmailNotFound": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "token_email_not_found"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "TokenInvalidPassword": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "token_invalid_password"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "TokenNotVerified": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": {},
            "readOnly": true,
            "default": {
              "type": "warning",
              "code": "token_not_verified"
            }
          }
        },
        "required": [
          "error"
        ]
      },
      "TrackingAirQueriesSession": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          }
        },
        "required": [
          "id"
        ]
      },
      "TrackingAirTickets": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "best_offer": {
            "$ref": "#/components/schemas/_TicketsAirSessionBestOffer"
          },
          "price_with_baggage": {
            "type": "number",
            "format": "float"
          },
          "trips": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionTrips"
            }
          },
          "is_favorite": {
            "type": "boolean"
          },
          "is_tracked": {
            "type": "boolean"
          },
          "currency": {
            "allOf": [
              {
                "$ref": "#/components/schemas/CurrencyEnum"
              }
            ],
            "description": "RUB — RUB (Рубль)\n\nUSD — USD (Доллар США)\n\nEUR — EUR (Евро)"
          }
        },
        "required": [
          "best_offer",
          "currency",
          "id",
          "is_favorite",
          "is_tracked",
          "price_with_baggage",
          "trips"
        ]
      },
      "TrackingAirTicketsSession": {
        "type": "object",
        "properties": {
          "ticket": {
            "type": "integer",
            "writeOnly": true
          }
        },
        "required": [
          "ticket"
        ]
      },
      "TravelClassEnum": {
        "enum": [
          1,
          2
        ],
        "type": "integer"
      },
      "TypeEnum": {
        "enum": [
          1,
          2,
          3,
          4,
          5
        ],
        "type": "integer"
      },
      "WifiEnum": {
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      },
      "_AdminCreateArticleFile": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "data": {
            "type": "string",
            "format": "uri"
          }
        },
        "required": [
          "data",
          "name"
        ]
      },
      "_AdminListArticleAuthor": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          }
        },
        "required": [
          "first_name",
          "id"
        ]
      },
      "_AdminUpdateArticleFile": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "data": {
            "type": "string",
            "format": "uri",
            "nullable": true
          }
        },
        "required": [
          "data",
          "name"
        ]
      },
      "_AdminsRetrieveArticleAuthor": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "avatar": {
            "type": "string",
            "format": "uri",
            "nullable": true
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          }
        },
        "required": [
          "first_name",
          "id"
        ]
      },
      "_AdminsRetrieveArticleFiles": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "data": {
            "type": "string",
            "format": "uri"
          }
        },
        "required": [
          "data",
          "name"
        ]
      },
      "_ArticleFile": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "data": {
            "type": "string",
            "format": "uri",
            "readOnly": true
          }
        },
        "required": [
          "data",
          "name"
        ]
      },
      "_CalendarAirTicketAirline": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_CalendarAirTicketTrip": {
        "type": "object",
        "properties": {
          "start_time": {
            "type": "string",
            "format": "date-time"
          },
          "end_time": {
            "type": "string",
            "format": "date-time"
          },
          "departure": {
            "$ref": "#/components/schemas/_CalendarAirTicketTripAirport"
          },
          "arrival": {
            "$ref": "#/components/schemas/_CalendarAirTicketTripAirport"
          }
        },
        "required": [
          "arrival",
          "departure",
          "end_time",
          "start_time"
        ]
      },
      "_CalendarAirTicketTripAirport": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "city": {
            "$ref": "#/components/schemas/_CalendarAirTicketTripAirportCity"
          }
        },
        "required": [
          "city",
          "code",
          "id",
          "title"
        ]
      },
      "_CalendarAirTicketTripAirportCity": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_GeoAirCitiesAirport": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string",
            "readOnly": true
          },
          "code": {
            "type": "string",
            "readOnly": true
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_ListHistoryTrips": {
        "type": "object",
        "properties": {
          "origin": {
            "$ref": "#/components/schemas/_ListHistoryTripsAirCity"
          },
          "destination": {
            "$ref": "#/components/schemas/_ListHistoryTripsAirCity"
          },
          "date": {
            "type": "string",
            "format": "date"
          }
        },
        "required": [
          "date",
          "destination",
          "origin"
        ]
      },
      "_ListHistoryTripsAirCity": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "title"
        ]
      },
      "_SpecialsCityIdAirDestination": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          },
          "country": {
            "$ref": "#/components/schemas/_SpecialsCityIdAirDestinationCountry"
          }
        },
        "required": [
          "country",
          "id",
          "title"
        ]
      },
      "_SpecialsCityIdAirDestinationCountry": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionBestOffer": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "gate_id": {
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "title": {
            "type": "string"
          },
          "price": {
            "type": "number",
            "format": "float"
          }
        },
        "required": [
          "gate_id",
          "id",
          "price",
          "title"
        ]
      },
      "_TicketsAirSessionFiltersAirlines": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionFiltersAirports": {
        "type": "object",
        "properties": {
          "origins": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersAirportsAirport"
            }
          },
          "destinations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersAirportsAirport"
            }
          }
        },
        "required": [
          "destinations",
          "origins"
        ]
      },
      "_TicketsAirSessionFiltersAirportsAirport": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionFiltersOffers": {
        "type": "object",
        "properties": {
          "gate_id": {
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "title": {
            "type": "string"
          },
          "price": {
            "type": "number",
            "format": "float"
          }
        },
        "required": [
          "gate_id",
          "price",
          "title"
        ]
      },
      "_TicketsAirSessionFiltersRange": {
        "type": "object",
        "properties": {
          "min": {
            "type": "integer",
            "description": "Timedelta в секундах"
          },
          "max": {
            "type": "integer",
            "description": "Timedelta в секундах"
          }
        },
        "required": [
          "max",
          "min"
        ]
      },
      "_TicketsAirSessionFiltersTransferCities": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "airports": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionFiltersAirportsAirport"
            }
          },
          "country": {
            "$ref": "#/components/schemas/_TicketsAirSessionFiltersTransferCitiesCountry"
          }
        },
        "required": [
          "airports",
          "code",
          "country",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionFiltersTransferCitiesCountry": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionFiltersTripCities": {
        "type": "object",
        "properties": {
          "origin": {
            "$ref": "#/components/schemas/_TicketsAirSessionFiltersTripCitiesOrigin"
          },
          "destination": {
            "$ref": "#/components/schemas/_TicketsAirSessionFiltersTripCitiesDestination"
          }
        },
        "required": [
          "destination",
          "origin"
        ]
      },
      "_TicketsAirSessionFiltersTripCitiesDestination": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string",
            "readOnly": true
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionFiltersTripCitiesOrigin": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string",
            "readOnly": true
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionTrips": {
        "type": "object",
        "properties": {
          "start_time": {
            "type": "string",
            "format": "date-time"
          },
          "end_time": {
            "type": "string",
            "format": "date-time"
          },
          "segments": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/_TicketsAirSessionTripsSegments"
            },
            "readOnly": true
          },
          "transfer_durations": {
            "type": "array",
            "items": {
              "type": "integer"
            },
            "readOnly": true
          }
        },
        "required": [
          "end_time",
          "segments",
          "start_time",
          "transfer_durations"
        ]
      },
      "_TicketsAirSessionTripsCity": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionTripsSegments": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "departure": {
            "allOf": [
              {
                "$ref": "#/components/schemas/_TicketsAirSessionTripsSegmentsAirport"
              }
            ],
            "readOnly": true
          },
          "arrival": {
            "allOf": [
              {
                "$ref": "#/components/schemas/_TicketsAirSessionTripsSegmentsAirport"
              }
            ],
            "readOnly": true
          },
          "departure_time": {
            "type": "string",
            "format": "date-time"
          },
          "arrival_time": {
            "type": "string",
            "format": "date-time"
          },
          "duration": {
            "type": "integer",
            "readOnly": true
          },
          "marketing_airline": {
            "allOf": [
              {
                "$ref": "#/components/schemas/_TicketsAirSessionTripsSegmentsMarketingAirline"
              }
            ],
            "readOnly": true
          },
          "flight": {
            "type": "string"
          },
          "handbags_weight": {
            "type": "integer",
            "maximum": 32767,
            "minimum": 0,
            "nullable": true
          },
          "baggage_weight": {
            "type": "integer",
            "maximum": 32767,
            "minimum": 0,
            "nullable": true
          }
        },
        "required": [
          "arrival",
          "arrival_time",
          "departure",
          "departure_time",
          "duration",
          "flight",
          "id",
          "marketing_airline"
        ]
      },
      "_TicketsAirSessionTripsSegmentsAirport": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "city": {
            "allOf": [
              {
                "$ref": "#/components/schemas/_TicketsAirSessionTripsCity"
              }
            ],
            "readOnly": true
          }
        },
        "required": [
          "city",
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirSessionTripsSegmentsMarketingAirline": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "readOnly": true
          },
          "code": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "id",
          "title"
        ]
      },
      "_TicketsAirTrip": {
        "type": "object",
        "properties": {
          "origin": {
            "type": "integer",
            "description": "type: AirCity"
          },
          "destination": {
            "type": "integer",
            "description": "type: AirCity"
          },
          "date": {
            "type": "string",
            "format": "date"
          }
        },
        "required": [
          "date",
          "destination",
          "origin"
        ]
      }
    },
    "securitySchemes": {
      "Cookie": {
        "type": "apiKey",
        "in": "cookie",
        "name": "sessionid"
      },
      "Token": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization",
        "description": "Token-based authentication"
      }
    }
  }
} as const

export const SchemaSampleJson = _SchemaSampleJson as DeepWritable<typeof _SchemaSampleJson>
