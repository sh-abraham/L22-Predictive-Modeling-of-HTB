# L22-Predictive-Modeling-of-HTB-Frontend

A brief description of what this project does and who it's for

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Describe how to install the project and its dependencies.

## Usage

Describe how to use the project.

## NPH (npm package handler)

This is my work around to not installing the node_modules folder on every local machine

instead of using

```bash
npm install <package>
```

I created a bash script which will only add the name of the package the "package.json" and "package-lock.json".
And when the Docker container starts up it will read those files, and install the needed node_modules. So use

```console
bash nph --h
```

or

```console
bash nph --help
```

to view the commands
