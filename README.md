# Is String ASCII (ES)

[**⚖️** MIT](./LICENSE.md)

🔗
[GitHub](https://github.com/hugoalh/is-string-ascii-es)
● [JSR](https://jsr.io/@hugoalh/is-string-ascii)
● [NPM](https://www.npmjs.com/package/@hugoalh/is-string-ascii)

An ECMAScript module to determine whether the string is ASCII.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/is-string-ascii-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/is-string-ascii[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/is-string-ascii[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

## 🧩 APIs

- ```ts
  function isStringASCII(item: string): boolean;
  ```
- ```ts
  function isStringASCIIControl(item: string): boolean;
  ```
- ```ts
  function isStringASCIIPrintable(item: string): boolean;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/is-string-ascii)

## ✍️ Examples

- ```ts
  isStringASCII("日本語");
  //=> false
  ```
- ```ts
  isStringASCII("👀");
  //=> false
  ```
- ```ts
  isStringASCII("Hello, world!");
  //=> true
  ```
- ```ts
  isStringASCII("");
  //=> true
  ```
