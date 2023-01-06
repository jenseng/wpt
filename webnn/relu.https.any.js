// META: title=test WebNN API relu operation
// META: global=window,dedicatedworker
// META: script=./resources/utils.js
// META: timeout=long

'use strict';

// https://webmachinelearning.github.io/webnn/#api-mlgraphbuilder-relu

testWebNNOperation('relu', '/webnn/resources/test_data/relu.json', buildOperationWithSingleInput);