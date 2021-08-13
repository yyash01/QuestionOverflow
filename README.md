# QuestionOverflow

I'll do It

1. npm init
2. install all dependencies
3. nodemon : npm install nodemon -g
4. changes to be made : in package.json file

```
"scripts": {
    "start": "node app.js",
    "devStart": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

5. to run our server : npm run devStart

### Some Doubts :

```
Is it possible to do a POST from just an <a> tag?
I know anchor tags are usually just for GETs, and I know
I can use javascript to do this (like in JavaScript post
request like a form submit) but to me that seems a little messy.
Is there a way to do this with straight HTML?

ANSWER :

Simple answer: no. You need to use javascript to do this kind of thing;
since when you do a POST what you're doing is sending the data in the HTTP request.
With get you're just sending it as part of the string (thus you can do it through the
href value).
```

### 6. Doubt-2

```
mereko question k particular answer k sare comments show krne
the and i was not able to send 2 objects to site like answer.id , comments.id to same api , that why I change my connection startegy modles of answer and comment.
```
