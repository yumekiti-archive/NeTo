# NeTo
next + nest + todo

# 2022/03/15
todoを追加できるようにした
```
# Write your query or mutation here
mutation {
  addTodo(TodoData: {
    title: "hoge",
    body: "piyo fuga",
    isStatus: false,
  }) {
    id
    title
    body
    isStatus
    createdAt
    updatedAt
  }
}
```

```
{
  "data": {
    "addTodo": {
      "id": 1,
      "title": "hoge",
      "body": "piyo fuga",
      "isStatus": false,
      "createdAt": "2022-03-15T22:08:12.945Z",
      "updatedAt": "2022-03-15T22:08:12.945Z"
    }
  }
}
```

# 2022/03/11
graphqlをインストールしデータ取得まで実装した。

```js
# Write your query or mutation here
query {
  todos {
    id
  }
}
```

```json
{
  "data": {
    "todos": []
  }
}
```

# 2022/03/10
todo の module resolver service を作成した

# 2022/03/09
todo の Entity を作成し起動時に生成されるようにした。

```sql
mysql> desc todo;
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | int(11)      | NO   | PRI | NULL    | auto_increment |
| title    | varchar(255) | NO   |     | NULL    |                |
| body     | text         | NO   |     | NULL    |                |
| isStatus | tinyint(4)   | NO   |     | 0       |                |
+----------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)
```

### 参考リンク
https://docs.nestjs.com/recipes/sql-typeorm
https://docs.nestjs.com/techniques/database

# 2022/03/08
TypeORM をインストールし接続を確認した。
```
next   | DB connected!
```

### 参考リンク
https://docs.nestjs.com/techniques/database
