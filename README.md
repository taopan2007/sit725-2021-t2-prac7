# Final Assignment 
### _Auther: Tao Pan_

---

This is a hotel displaying website, demonstrate the hotel's room or other services with slides, tabs.

* the server end provides 3 restful api
```js
    "/api/init" // request page init resource from mongodb
    "/api/bookReq" // send hotel booking application to the server and save it to mongodb
    "/api/bookList" // request booking applications list from server
```
---

* `<header>` on the top of the website(navigation bar), there's `home` , `booklist` and `BOOK` buttons  
    * `home`  direct to home page which demonstrates hotel's major services
    * `booklist`   direction to booking application list page which demonstrates applications stored in mongodb with cards
    * `BOOK`   pop out a modal for booking hotel services

* `<footer>` on the bottom of the website
    * `Back to the top` scroll back to the top of the website
    * footer part has a `airline_seat_individual_suite` icon, clicking this icon will direct to the project's github repo
