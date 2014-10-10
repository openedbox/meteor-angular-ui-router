meteor-angular-ui-router
========================

> [angular-ui-router](https://github.com/angular-ui/ui-router "angular-ui-router") package for Meteor.

## Install
```
meteor add urigo:angular-ui-router
```

Depends on [angular-meteor](https://github.com/Urigo/angular-meteor)
## Live demo
Demo: [http://angularjs.meteor.com/](http://angularjs.meteor.com/)

Code: [https://github.com/Urigo/angular-meteor/tree/master/docs/angular-meteor](https://github.com/Urigo/angular-meteor/tree/master/docs/angular-meteor)

## Usage

### app.js
```
angular.module('myApp', ['angular-meteor', 'ui.router']);

Meteor.startup(function () {
  angular.bootstrap(document, ['myApp']);
});

angular.module("myApp").config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                template: UiRouter.template('home.html')
            })
            .state('state1', {
                url: "/state1",
                template: UiRouter.template('state1.html')
            })
            .state('state1.list', {
                url: "/list",
                template: UiRouter.template('state1.list1.html')
            })
            .state('state2', {
                url: "/state2",
                template: UiRouter.template('state2.html')
            });
    }
]);
```

### partials/state1.html
```
<template name="state1.html">
    <div>
        <h1>State 1</h1>

        <h3>[[title && title || 'Title is empty']]</h3>
        <span>Input a title: </span>
        <input type="text" ng-model="title">

        <hr/>

        <a ui-sref="state1.list">Show List</a>
        <div ui-view></div>

    </div>
</template>
```
