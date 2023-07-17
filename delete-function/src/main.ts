/* eslint-disable @typescript-eslint/naming-convention */
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

interface IFunctionNode {
  name: string
  start: { line: number; start: number; end: number }
  end: { line: number; start: number; end: number }
}

export function getFunctionNode(code: string, index: number): IFunctionNode | undefined {
  let functionNode
  const ast = parse(code)
  // console.log(ast)

  traverse(ast, {
    FunctionDeclaration(path) {
      // console.log('path', path.node)
      if (index >= path.node?.start! && index <= path.node?.end!) {
        functionNode = {
          name: path.node.id?.name,
          start: path.node.loc?.start,
          end: path.node.loc?.end,
        }
      }
    },
  })

  return functionNode
}
