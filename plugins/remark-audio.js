import {visit} from 'unist-util-visit';
import {parse} from 'acorn';

export default function remarkAudio() {
  return tree => {
    visit(tree, 'image', (node, idx, parent) => {
      if (!/\.(mp3|wav|ogg)$/.test(node.url)) return;
      const url = node.url.startsWith('.') ? node.url : `./${node.url}`;
      const value = `require('${url}').default`;
      parent.children[idx] = {
        type: 'mdxJsxFlowElement',
        name: 'audio',
        attributes: [
          {type: 'mdxJsxAttribute', name: 'controls'},
          {type: 'mdxJsxAttribute', name: 'className', value: 'blog-audio'},
          {type: 'mdxJsxAttribute', name: 'controlsList', value: 'nodownload'},
          {
            type: 'mdxJsxAttribute',
            name: 'src',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value,
              data: {
                estree: {
                  type: 'Program',
                  source: value,
                  body: [
                    {
                      type: 'ExpressionStatement',
                      expression: parse(value, {ecmaVersion: 2020, sourceType: 'module'}).body[0].expression
                    }
                  ]
                }
              }
            }
          }
        ]
      };
    });
  };
}