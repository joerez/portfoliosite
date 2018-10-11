# Puppy Love

## Puppy Love API
<img src="https://github.com/jayceazua/custom-API-BEW1_2/blob/master/puppy_love.jpg?raw=true">

## Description
This API allows authenticated users to post their dog's online for other users to search for that specific dog breed.
Think of it like Match Maker but for dog owners to breed their dogs. Also, in the future it will allow users to search
for dog litters to adopt puppies from the breeders.

## Intallation
To install Puppy Love on your local machine, clone the repo, open your terminal, navigate to the directory you just created, and do the following:

```
npm install
```

from there, you can start the server by doing one of these:

```
npm start
```
Great, we are now ready for business. Or whatever puppies do.

# Puppies

## Get all puppies

Send a GET Request on ```http://localhost:3000/puppies``` and all puppies will be returned in the order they were made.

## Get a specific puppy

Send a GET Request on  ```http://localhost:3000/puppies/:enterIdHere``` to recieve the Puppy whose ID you specified.

## Create a new puppy

Send a POST request on ```http://localhost:3000/puppies``` and refer to following for names and values:

```js
name: String,
gender: String,
breed: String,
age: Number
```

The full HTTP request should look something like this:

`http://localhost:3000/puppies?name=:name&gender=:gender&breed=:breed&age=:age`

Great.

## Update a puppy

Send a PUT request to ```http://localhost:3000/puppies?_method=PUT``` and refer to following for names and values:

```js
id: String,
name: String,
gender: String,
breed: String,
age: Number
```

Perfect.

## Delete a puppy

Send a DELETE request to ```http://localhost:3000/puppies?_method=DELETE``` and refer to following for names and values:

```js
id: String
```

Puppy go bye bye.

# Authentication

## Register an account

The first thing you'll have to do is solve the Google Captcha. This is in place so we can prevent spammers and bots.

All you'll have to do next is send a POST request to `http://localhost:3000/sign-up`  

Make sure you add the following headers with the correct data type:

```js
username: String,
password: Password
```

Then we will take care of the rest. This will also automatically log you in.

## Log in

In order to log in, send a POST request to ```http://localhost:3000/login```

Use the following headers with the correct data types:

```js
username: String,
password: Password
```

You should now be authenticated. You can check with the route below.

## Get current user

Send a GET request to:

`http://www.localhost:3000/current_user`

This will return the current req.user if you are authenticated, and will return undefined if you are not authenticated.

You can use this route to check rather or not you have authenticated succesfully.


## Log out

In order to log yourself out, you'll have to send a GET request to:

`http://localhost:3000/logout`

This will also clear your cookie. You can use the route above in order to check your login status. 
