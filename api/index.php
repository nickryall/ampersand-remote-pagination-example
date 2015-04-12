<?php

$page_1 = '{
  "totalRecords": 15,
  "data": [
    {
      "id": "1",
      "title": "Article 1",
      "slug": "article-1",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "2",
      "title": "Article 2",
      "slug": "article-2",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "3",
      "title": "Article 3",
      "slug": "article-3",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "4",
      "title": "Article 4",
      "slug": "article-4",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "5",
      "title": "Article 5",
      "slug": "article-5",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    }
  ]
}';

$page_2 = '{
  "totalRecords": 15,
  "data": [
    {
      "id": "6",
      "title": "Article 6",
      "slug": "article-6",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "7",
      "title": "Article 7",
      "slug": "article-7",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "8",
      "title": "Article 8",
      "slug": "article-8",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "9",
      "title": "Article 9",
      "slug": "article-9",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "10",
      "title": "Article 10",
      "slug": "article-10",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    }
  ]
}';

$page_3 = '{
  "totalRecords": 15,
  "data": [
    {
      "id": "11",
      "title": "Article 11",
      "slug": "article-11",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "12",
      "title": "Article 12",
      "slug": "article-12",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "13",
      "title": "Article 13",
      "slug": "article-13",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "14",
      "title": "Article 14",
      "slug": "article-14",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    },
    {
      "id": "15",
      "title": "Article 15",
      "slug": "article-15",
      "body": "Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue."
    }
  ]
}';

header('Content-Type: application/json');

if(isset($_GET['page'])) {
  if($_GET['page'] == 1) {
    echo $page_1;
  }
  else if($_GET['page'] == 2) {
    echo $page_2;
  }
  else if($_GET['page'] == 3) {
    echo $page_3;
  }
  else {
    http_response_code(404);
  }
} else {
  echo $page_1;
}

