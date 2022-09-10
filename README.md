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