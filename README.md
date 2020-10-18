# SpaceXLaunch

This project shows the list of spaceX missiles' launch. The list can filtered by selecting launch year, launch success and landing success. Its a responsive web application which works in all types of screens or devices like Desktop,Tablet,Mobile. Its developed with Mobile First Approach

# Project Structure

# Component:
The app component is divided 2 sections:
 1.  Filter Component : Containing all filters using Filter Options Component. It has form and on every form value change, it changes the route query params.
 2.  Launch List Component : Containing all spaceX Launch where each launch is represented by Launch List Item Component. It calls the SpaceX api to fetch the launch list on every route query Params change.
 
# Service:
Api Service is used for calling get api,showing/hidding loader and showing error message.

# Directive:
Lazy Load Image Directive is used to reduce number of http calls on initial load. It set the `src` of image when it gets visible in the viewport using `IntersectionObserver`.

# Server Side Rendering:
Server side rendering is implemented here using Angular Universal. So the first page gets rendered at server itself.It renders based the query params.

# Demo:
Application is deployed on Heroku. It url is https://spacex-launch-list.herokuapp.com/.