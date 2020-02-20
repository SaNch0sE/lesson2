### Validation: done
```
    https://hapi.dev/family/joi/
```

### Find User: done
```
    curl --location --request GET 'localhost:3000/v1/users/find' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```

### Create User: done
```
    curl --location --request POST 'localhost:3000/v1/users/create' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
        "fullName": "Test User"
    }'
```

### Update User: done
```
    curl --location --request PUT 'localhost:3000/v1/users/update' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "blahblah@mail.com",
        "fullName": "Update User"
    }'
```

### Delete User: done
```
    curl --location --request DELETE 'localhost:3000/v1/users/delete' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```