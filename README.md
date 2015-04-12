# Remote Pagination Example with Ampersand JS

Basic example for handling pagination. 

Assumes the API returns an object with `totalRecords` which is a count of all the records and a `data` array with the current `page` of items. Of course the names of these fields can be different as long as the corresponsing props are changed in the front-end models.

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

* Run as a PHP application so the demo API works
* `npm install`
* `gulp` to build the bundled js file.

## Notes

This demo uses a simple URL convention of `page/n`. If you would like to use query paramaters instead, e.g. `?page=n` checkout https://github.com/nickryall/ampersand-router-query-parameters




