'use strict';
/**
 * 今天我们来编写一个轻量级的js编译器，它是那么的简洁，当你删除所有注释的时候就会发现，整个编译器的代码其实就那么点，不超过200行。
 *
 * 我们将把一些类似lisp的函数调用编译成一些类似C的函数调用。
 *
 * 如果你不熟悉其中一个，我会快速介绍一下。
 *
 * 如果我们有两个函数`add`和`subtract`，它们将被这样写：
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 是不是小事一桩？
 *
 * 很好，因为这正是我们要编译的内容。虽然这既不是完整的LISP语法也不是C语法，但足以说明现代编译器的许多主要部分。
 */

/**
 * 大多数编译器分为三个主要阶段：解析，转换，和代码生成
 * 
 * 1. 解析就是获取原始代码并将其转变为代码的更抽象的表示形式
 * 
 * 2. 转换采用这种抽象表示，并对其进行操作，以执行编译器希望它执行的任何操作。
 * 
 * 3. 代码生成采用代码的转换后的表示形式，并将其转换为新的代码。
 */

function tokenizer(input) {
    // current 变量是用来像光标一样跟踪我们在代码中的位置
    let current = 0

    // 新增一个tokens数组把我们的tokens放进去
    let tokens = []

    while (current < input.length) {
        let char = input[current]

        if (char === '(') {
            tokens.push({ type: 'paren', value: "(" })
            current++
            continue
        }
        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: ')'
            })
            current++
            continue
        }
        let WHITESPACE = /\s/
        if (WHITESPACE.test(char)) {
            current++;
            continue
        }
        let NUMBERS = /[0-9]/
        if (NUMBERS.test(char)) {
            let value = ''

            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current]
            }
            tokens.push({
                type: 'number',
                value
            })
            continue
        }

        if (char === '"') {
            let value = ''

            char = input[++current]

            while (char !== '"') {
                value += char;
                char = input[++current]
            }
            char = input[++current]
            tokens.push({
                type: 'string', value
            })
            continue
        }

        let LETTERS = /[a-z]/i
        if (LETTERS.test(char)) {
            let value = ''
            while (LETTERS.test(char)) {
                value += char;
                char = input[++current]
            }
            tokens.push({
                type: 'name',
                value
            })
            continue
        }
        throw new TypeError('I dont know what this character is: ' + char);
    }
    return tokens
}

function parser(tokens) {
    let current = 0
    function walk() { }
}