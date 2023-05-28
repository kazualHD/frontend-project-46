### Hexlet tests and linter status:
[![Actions Status](https://github.com/kazualHD/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/kazualHD/frontend-project-46/actions)
# Gendiff.js

[![Build Status](https://travis-ci.com/kazualHD/frontend-project-46.svg?branch=master)](https://travis-ci.com/kazualHD/frontend-project-46)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/kazualHD/frontend-project-46?style=flat-square)](https://codeclimate.com/github/kazualHD/frontend-project-46)
[![Test Coverage](https://api.codeclimate.com/v1/badges/xxxxxxxxxxxxxxxxxxxxxxxx/test_coverage)](https://codeclimate.com/github/kazualHD/frontend-project-46/test_coverage)

Gendiff.js is a utility that compares two configuration files and shows the difference. It can be used to generate human-readable diffs in various formats.

## Features

- Support for JSON, YAML configuration file formats
- Customizable output format: plain, stylish, or JSON
- Recursive comparison of nested structures
- Color highlighting for improved readability

## Installation

Make sure you have Node.js installed on your machine. Then, you can install `gendiff.js` globally using npm:

```shell
$ npm install -g gendiff.js

 Usage
$ gendiff --format <format> <pathToFile1> <pathToFile2>
--format (optional) specifies the output format. Possible values: plain, stylish, or json (default: stylish).
pathToFile1 is the path to the first configuration file.
pathToFile2 is the path to the second configuration file.

 Examples
 Compare two JSON files:

 Compare a YAML file and an INI file:


 
