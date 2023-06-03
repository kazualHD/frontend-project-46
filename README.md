### Hexlet tests and linter status: 
[![Actions Status](https://github.com/kazualHD/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/kazualHD/frontend-project-46/actions) 
# Gendiff.js 

[![Code Climate](https://img.shields.io/codeclimate/maintainability/kazualHD/frontend-project-46?style=flat-square)](https://codeclimate.com/github/kazualHD/frontend-project-46) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/xxxxxxxxxxxxxxxxxxxxxxxx/test_coverage)](https://codeclimate.com/github/kazualHD/frontend-project-46/test_coverage) 
 
Gendiff.js is a utility that compares two configuration files and shows the difference. It can be used to generate human-readable diffs in various formats. 
 
## Features 
 
- Support for JSON, YAML configuration file formats 
- Customizable output format: plain, stylish, or JSON 
- Recursive comparison of nested structures 
 
## Installation 
 
Make sure you have Node.js installed on your machine. Then, you can install `gendiff.js` globally using npm: 
 
$ npm install -g gendiff.js. 
 
## **Usage** 
 
$ gendiff —format <format> <pathToFile1> <pathToFile2> 
--format (optional) specifies the output format. Possible values: plain, stylish, or json (default: stylish). 
pathToFile1 is the path to the first configuration file. 
pathToFile2 is the path to the second configuration file. 
 
### Plain Output

To compare two files and output the result in stylish format, use the following command:

```
gendiff <FILEPATH1> <FILEPATH2>
```

> #### Example of work:
>
 [![asciicast](https://asciinema.org/a/I3VStryiA1PhchduoD8EeMsj5.svg)](https://asciinema.org/a/I3VStryiA1PhchduoD8EeMsj5)


### Stylish Output

To compare two files and output the result in plain format, use the following command:

```
gendiff plain <FILEPATH1> <FILEPATH2>  -f plain
```

> #### Example of work:
>
 [![asciicast](https://asciinema.org/a/Z29P9QlWwFzs6l72k5pNBmGKG.svg)](https://asciinema.org/a/Z29P9QlWwFzs6l72k5pNBmGKG)



### JSON Output

To compare two files and output the result in JSON format, use the following command:

```
gendiff <FILEPATH1> <FILEPATH2>  -f json
```

or

```
gendiff <FILEPATH1> <FILEPATH2>  -f JSON
```

> #### Example of work:
>
 [![asciicast](https://asciinema.org/a/OyRXqpfGLZGQxWPo2rVipexNE.svg)](https://asciinema.org/a/OyRXqpfGLZGQxWPo2rVipexNE)
