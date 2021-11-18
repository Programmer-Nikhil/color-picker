#Color-Picker React application

// Application allow user to enter the hex or color names and get the list of nearby color/colors.
// Application is developed using the React 17.0.2

// Application allow user to search for color in two ways.
1. By entering hex values
2. By entering color names

// Application uses a npm package
color-name-list : https://www.npmjs.com/package/color-name-list

It uses two APIs
1. https://api.color.pizza/v1/names/?name=${{query}}
2. https://api.color.pizza/v1/?values=${{query}}

Build Process

1. Application can be build using below command
npm run build

2. application can be run locally using below command
npm run start

// Usage

1. 
   - In first input, user can enter hex value without #, Also, user can enter multiple hex values in comma        separated format. ex. 000,fff,242563.
   - Once user enter value he can click on search button and get the result.

2.
    - In second input, user can enter any color name and he will get the nearby matching color/colors
        ex. gray
    - Once user enter value he can click on search button and get the result.
    Note: comma separated color names will not work in second input. 

Firebase deploy URL:
https://color-picker-f9460.web.app