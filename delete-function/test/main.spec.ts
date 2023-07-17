import { test, expect } from 'vitest'

import { getFunctionNode } from '../src/main'

test('init', () => {
  // expect(true).toBe(true)

  const code = `
  function Foo() {
    console.log('foo');
  }
  
  
  function Bar() {
    console.log('Bar');
  }
  `

  // 设置光标位置
  const index = 6
  //

  const functionCode = getFunctionNode(code, index)

  expect(functionCode).toEqual({
    name: 'Foo',
    start: { line: 2, column: 2, index: 3 },
    end: { line: 4, column: 3, index: 47 },
  })
})
