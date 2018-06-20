import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('bootstrap/scss/bootstrap.scss');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');
require('../scss/main.scss');



var jscalculator = new Vue({
    el: '#js-calculator',
    data: {
        expression: "",
    },
    methods: {
        clickOperation: function (operation) {
            switch (operation) {
                case '=':
                    this.expression = this.parser(this.expression);
                    break;
                case 'C':
                    this.expression = "";
                    break;
                default:
                    this.expression += operation;
                    break;
            }
        },
        clickNumber: function (number) {
            this.expression += number;
        },
        parser: function (expression) {
            var array = expression.split("X");
            return array[0] * array[1];
        }

    }
});


   