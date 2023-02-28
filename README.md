# Demonstration of dd-trace jest instrumentation exception

- Compiled with `npx tsc`
- Run tests with `npm test`

Tested using node 16.16.0, with the following output:
```
 RUNS  test/index.test.js
<redacted>/dd-trace-error/node_modules/dd-trace/packages/dd-trace/src/plugins/ci_plugin.js:131
        [TEST_MODULE_ID]: testSuiteSpan.context()._parentId.toString(10),
                                                           ^

TypeError: Cannot read properties of null (reading 'toString')
    at JestPlugin.startTestSpan (<redacted>/dd-trace-error/node_modules/dd-trace/packages/dd-trace/src/plugins/ci_plugin.js:131:60)
    at JestPlugin.startTestSpan (<redacted>/dd-trace-error/node_modules/dd-trace/packages/datadog-plugin-jest/src/index.js:164:18)
    at <redacted>/dd-trace-error/node_modules/dd-trace/packages/datadog-plugin-jest/src/index.js:125:25
    at Subscription._handler (<redacted>/dd-trace-error/node_modules/dd-trace/packages/dd-trace/src/plugins/plugin.js:14:9)
    at Channel.publish (node:diagnostics_channel:56:9)
    at <redacted>/dd-trace-error/node_modules/dd-trace/packages/datadog-instrumentations/src/jest.js:115:23
    at exports.AsyncResource.runInAsyncScope (node:async_hooks:202:9)
    at DatadogEnvironment.handleTestEvent (<redacted>/dd-trace-error/node_modules/dd-trace/packages/datadog-instrumentations/src/jest.js:114:23)
    at dispatch (<redacted>/dd-trace-error/node_modules/jest-circus/build/state.js:66:11)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at _runTest (<redacted>/dd-trace-error/node_modules/jest-circus/build/run.js:146:3)
    at _runTestsForDescribeBlock (<redacted>/dd-trace-error/node_modules/jest-circus/build/run.js:86:9)
    at run (<redacted>/dd-trace-error/node_modules/jest-circus/build/run.js:26:3)
    at runAndTransformResultsToJestFormat (<redacted>/dd-trace-error/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:120:21)
    at jestAdapter (<redacted>/dd-trace-error/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)
    at runTestInternal (<redacted>/dd-trace-error/node_modules/jest-runner/build/runTest.js:367:16)
    at runTest (<redacted>/dd-trace-error/node_modules/jest-runner/build/runTest.js:444:34)
```