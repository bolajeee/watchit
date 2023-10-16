#!/usr/bin/env node

const chokidar = require('chokidar')
const debounce = require('lodash.debounce')
const program = require('caporal')

    
program
    .version ('0.0.1')
    .argument('[filename]', 'name of the file')
    .action((args) => {
        console.log(args)
    })
    
    program.parse(process.argv)

//     const start = debounce(() => {
//     console.log('debouncing')
//     }, 100)

// chokidar
//     .watch('.')
//     .on('add', start)
//     .on('change', () => console.log("file changed"))
//     .on('unlink', () => console.log('file unlinked'))
