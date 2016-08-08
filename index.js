/* @flow */
'use strict';

module.exports = {
    'extends': '@hughescr/eslint-config-default',
    parser:    'babel-eslint',
    parserOptions:
    {
        ecmaVersion: 6,
        sourceType: 'script',
    },
    plugins:
    [
        'flowtype',
    ],
    settings:
    {
        flowtype:
        {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    rules:
    {
        'flowtype/require-parameter-type':  1,
        'flowtype/require-return-type':     1,
        'flowtype/space-after-type-colon':  1,
        'flowtype/space-before-type-colon': 1,
        'flowtype/type-id-match':           0,
        'flowtype/define-flow-type':        1,
        'flowtype/use-flow-type':           1,
    },
};
