# Remote Pagination Example with Ampersand JS

Basic example for handling pagination. 

Assumes the API returns an object with `totalRecords` which is a count of all the records and a `data` array with the current `page` of items.

```
{
      "totalRecords" : 100,
      "data" : [
        {
          "title" : "Article 1"
        },
        // Continued...
      ]
}
```

## Set up

* Run as a PHP application so the demo API can be accessed
* `npm install`
* `gulp` to build the bundled js file.






