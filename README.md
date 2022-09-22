# javascript-errors

> Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

## Description
 > Runtime errors result in new Error objects being created and thrown.

 > Error is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

## Error Types
> Besides the generic Error constructor, there are other core error constructors in JavaScript. For client-side exceptions, see Exception handling statements.
- EvalError : Creates an instance representing an error that occurs regarding the global function eval().
- RangeError : Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
- ReferenceError : Creates an instance representing an error that occurs when de-referencing an invalid reference.
- SyntaxError : Creates an instance representing a syntax error.
- TypeError : Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- URIError : Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
- AggregateError : Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by Promise.any().
- InternalError : Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

## Constructor
> Error(): Creates a new Error object.

## Static Methods
- Error.captureStackTrace() : A non-standard V8 function that creates the stack property on an Error instance.
- Error.stackTraceLimit : A non-standard V8 numerical property that limits how many stack frames to include in an error stacktrace.
- Error.prepareStackTrace() : A non-standard V8 function that, if provided by usercode, is called by the V8 JavaScript engine for thrown exceptions, allowing the user to provide custom formatting for stacktraces.

## Instance Properties
- Error.prototype.message : Error message. For user-created Error objects, this is the string provided as the constructor's first argument.
- Error.prototype.name : Error name. This is determined by the constructor function.
- Error.prototype.cause : Error cause indicating the reason why the current error is thrown — usually another caught error. For user-created Error objects, this is the value provided as the cause property of the constructor's second argument.
- Error.prototype.fileName : A non-standard Mozilla property for the path to the file that raised this error.