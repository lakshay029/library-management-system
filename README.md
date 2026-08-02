# library-management-system
    commiting by lakshay

    This is the library management API backend 

# Routes and the Endpoints 

## /users
GET: get all the list of user in the system
POST: create/Register a new user

## /user/{id}
GET: get a user by their id 
PUT: upadating a user by their id 
DELETE: deleting the user by their id (check if the user still has an issued the books) and (is there any fine/penalty to be collected)

## /user/subscription-details/{id}
GET: get a user subscription detials by their id
    >> date of subscription
    >>valid till?
    >>fine by any?

## /Books

GET: get all the books in the system
POST: add a new book to the system 

## //Books/{id}

GET: get a book by its id
PUT: update a book by its id 
DELETE: delete book by its id 

## Books/issued
GET: get all the issued books 

## Books/issued/withfine
GET: get all the issued books with their fine amount

## subscription types
    >>Basic (3 months)
    >>standard (6 months)
    >> premium (12 months)

## commands: 
npm init
npm i express
npm nodemon 


