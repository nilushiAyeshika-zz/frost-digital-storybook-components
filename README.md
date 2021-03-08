# Introduction
> React component library created for Frost frontend coding test 

## Features

- 🚀 Easy to install and use on any of your projects

## Purpose

- We can use these components to create one or more applications and these components are reusable.
- Pick the component you want from many components.
- Use this library to enhance existing components and create your new customize components.
### Prerequisites

* `react^16` and `react-dom^16` are required for the library to function properly
* Your project should have support for SCSS

### Installation

```sh
yarn add frost-web-components
```
### Usage

Example of importing the Button component

```javascript
import { Button } from 'frost-web-components';
```

### Component Structure

We have 4 different types of components, used atomic design concept.

#### Atoms

* Smallest components
* They don't have own states
* Includes Headings, Texts, Icons etc.

#### Molecules

* Bigger but simple components
* Composed of Atomic components
* Includes Buttons, Containers, etc.

#### Organisms

#### Templates
### Versioning

We use [Semantic Versioning](https://semver.org/) to handle versioning

### Storybook

This project has been developed using storybook.

To start project

```sh
yarn start-storybook
```
