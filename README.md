# PortfoliO
#### v- 0.0.1


## Contents

> - [Intro](#intro)
> - [JSON Documentation](#json-documentation)
> - [Dependencties](#dependencies)
> - [Contact and More](#contact-and-more)

## Intro

This simple yet useful framework allows you to render a simple React-Based portfolio website from a JSON
file using a general purpose react component library; allowing for great customizability by allowing the user to create a desired
component structure, apply a vast array of styles, visual arrangements and effects, and in the future, add functionality to the website.

As of now, the application only supports direct modification to the **page.json** file in order to make any changes to the page rendering.
The architecture of this JSON file is straightforward and easy to understand. In order to modify the file, find it in the path `/src/assets/page.json`
and follow the below documentation to add new items to the application!

If you have no experience in using JSON files, future versions are planned to include a more user friendly interface in order to make this app's
services far more accessible. Do understand this application is in its early developmental stages, and will be consistently updated.

## JSON Documentation

The JSON file architecture is, as mentioned earlier, fairly straightforward and very dynamic.
The following few pages are structured the same way as the JSON file is, and include all possible types of content with a concrete explanation.

> ### nav - Object
> The nav object, as the name implies, controls the navigation tab.
> It contains two properties, one which contains all the navigation links spreading off the home URL, and one which contains all
> visual options such as classes as well as what type of navbar is to be rendered.
> 
>> ### refs - Array
>> The 'refs' array is located within the nav object, and it is a list of 'ref' objects, each of which defines a button
>> which takes the user to a navigable route. A ref object looks like this:
>>> ```{"path" : "STRING PATH", "name" : "STRING DISPLAY NAME"}```
>
>> ### options - Object
>> The options object appears commonly within this application. It often defines certain parameters which the
>> component in question requires in order to be rendered properly. In the case of the nav component, there are two options.
>>> ### bodyClasses - String
>>>
>>> - REQUIRED: Must include at least one valid 'Navbar Style' class in order to render the navbar properly. These include: `navbar-top navbar-side navbar-side-right` (navbar-side-right requires navbar-side to work)
>>> - Takes any valid CSS classes, including any tailwind style classes

## Dependencies

This application makes use of the Vite React build tool, which should automaticallt install all project dependencies.
For the sake of information, and possible troubleshooting however, the dependencies of this project outside of the default Vite packages themselves
are listed below, along with the installation command:

> - React Router: ```npm``` i react-router
> - React Router DOM : ```npm``` i react-router-dom
> - Tailwind CSS : ```npm``` i -D tailwindcss postcss autoprefixer

## Contact and More