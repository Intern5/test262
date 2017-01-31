// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.of
es6id: 22.1.2.3
description: Default [[Prototype]] value derived from realm of the constructor
info: |
    [...]
    4. If IsConstructor(C) is true, then
       a. Let A be ? Construct(C, « len »).
    [...]

    9.1.14 GetPrototypeFromConstructor

    [...]
    3. Let proto be ? Get(constructor, "prototype").
    4. If Type(proto) is not Object, then
       a. Let realm be ? GetFunctionRealm(constructor).
       b. Let proto be realm's intrinsic object named intrinsicDefaultProto.
    [...]
---*/

var other = $.createRealm().global;
var C = new other.Function();
C.prototype = null;

var a = Array.of.call(C, 1, 2, 3);

assert.sameValue(Object.getPrototypeOf(a), other.Object.prototype);