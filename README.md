📦 array-kit# 📦 array-kit

A **lightweight utility library** for common array operations like `isEmpty`, `isNotEmpty`, `first`, `last`, and `unique`.  
Designed to be **minimal**, **typed**, and **framework-agnostic** — a tiny alternative to Lodash for array checks.

---

## 🚀 Installation

### npm

```bash
npm i array-kit-lite
```

### pnpm

```bash
pnpm add array-kit-lite
```

### yarn

```bash
yarn add array-kit-lite
```

### bun

```bash
bun add array-kit-lite
# or
bunx jsr add @kingtechnologies/array-kit
```

### JSR (Deno / Modern Node)

```bash
deno add jsr:@kingtechnologies/array-kit

```

```ts
// Import directly with a jsr specifier
import * as array_kit from "jsr:@kingtechnologies/array-kit";
```

## ✨ Features

- ✅ TypeScript support out of the box
- ✅ Works in Node.js, Deno, and modern browsers
- ✅ Tiny footprint — only the essentials
- ✅ Tree-shakeable

### Usage

```ts
// ESM / TypeScript
import { first, isEmpty, isNotEmpty, last, unique } from "array-kit-lite";
```

<!-- or -->

```ts
import { isEmpty } from "@kingtechnologies/array-kit";

console.log(isEmpty([])); // true
console.log(isNotEmpty([1, 2, 3])); // true
```

### Example

```ts
isEmpty([]); // true
isNotEmpty([1, 2, 3]); // true

first([10, 20, 30]); // 10
last([10, 20, 30]); // 30

unique([1, 1, 2, 3, 3]); // [1, 2, 3]
```

## API

| Function          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `isEmpty(arr)`    | Returns `true` if the array is `null`, `undefined`, or empty |
| `isNotEmpty(arr)` | Returns `true` if the array contains at least one element    |
| `first(arr)`      | Returns the first element, or `undefined` if empty           |
| `last(arr)`       | Returns the last element, or `undefined` if empty            |
| `unique(arr)`     | Returns a new array with duplicates removed                  |
