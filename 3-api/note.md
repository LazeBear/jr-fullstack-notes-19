protocol 协议

OSI Model (5, 7)

tcp (transmission control protocol) 传输控制协议
udp (user datagram protocol) 用户数据报协议

http (5 versions)
0.9
1.0
1.1 (persistent connection)
2 http(s) secure
3

url (uniform resource locator) 统一资源定位符

<a href="https://google.com"/>

https -> 443
http -> 80
mongodb -> 27017
ftp -> 21
smtp -> 25

ip whitelist

DNS

query param

http method
GET
POST
PUT
DELETE
PATCH

OPTIONS

CRUD
create, read, update, delete
增删改查

Headers

body

mime type

status code

root path

client, server
cs model

CORS (cross origin resource sharing) 跨域资源共享

token

serialization
de-serilization

// trailing comma
{
"a": 1
}

stateless
stateful

Restful API 设计规范

1. versioning (版本)
   example: /api/v1/users
   example: api.example.com/v1/users (deprecate)
   example: api.example.com/v2/users

2. 用名词来描述资源，并且使用复数形式
   example: /api/v1/users

3. 使用贴切的 HTTP 方法来描述操作
   GET -> 获取数据
   POST -> 创建数据
   。。。

4. url 设计上，可以使用嵌套结构
   /api/v1/users/{userId}/posts/{postId}
   example: /api/v1/users/1/posts/2

5. 使用合适的 HTTP 状态码来表示请求的结果
   200 -> OK
   201 -> Created
   400 -> Bad Request
   401 -> Unauthorized
   403 -> Forbidden
   404 -> Not Found
   500 -> Internal Server Error

6. 注意数据返回的大小，尽量进行分页
   /api/v1/users?page=1&pageSize=10 (page_size)
   10000 数据

7. 返回可读的错误信息
   {
   "code": 400,
   "message": "password is too week"
   }

sequence diagram
时序图

serverless

FE
fetch
axios
XMLHttpRequest

BE
axios

{id}
:id
