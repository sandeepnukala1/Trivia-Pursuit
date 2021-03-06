# Trivia Game Online

This application is built using jQuery and AJAX for front end development. Promises are being used for async handling of APIs. APIs have been created using Contentful content and content model.

## Frontend 

### jQuery:

```
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
```

### Bootstrap:

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>
```

## Backend

### Contentful:

Following APIs were used for creating data

```
https://cdn.contentful.com/spaces/{space_token}/environments/{environment_name}/entries?access_token={access_token}&content_type=categories
```
- space_token: unique token of the space provided by Contentful
- environment_name: Environment branch
- acess_token: token provided for the Contentful Account
- categories: unique list of all categories

```
https://cdn.contentful.com/spaces/{space_token}/environments/{environment_name}/entries?access_token={access_token}&content_type=${uniqueCategoryId}
```
- uniqueCategoryId: Id used to get information from a specific category

## Future Goals

- Single and Multiplayer game modes
- Visual indicators of right and wrong answers
- Visual changes for Questions and Answers display
- Timer for each question
- Progress bar tracking time remaining left
- Responsive Web Design
- Move assets to Backend

