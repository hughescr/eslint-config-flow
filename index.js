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
        'flowtype/require-return-type':     [1, 'always', { annotateUndefined: 'never' }],
        'flowtype/space-after-type-colon':  [1, 'always'],
        'flowtype/space-before-type-colon': [1, 'never'],
        'flowtype/type-id-match':           [1, '^([A-Z][a-z0-9]+)+Type$'],
    },
};
