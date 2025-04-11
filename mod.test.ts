import { deepStrictEqual } from "node:assert";
import {
	isStringASCII,
	isStringASCIIControl,
	isStringASCIIPrintable
} from "./mod.ts";
const sample1 = "日本語";
const sample2 = "👀";
const sample3 = "Hello, world!";
const sample4 = "";
const sample5 = `Wisi sed et at vero eos nostrud volutpat sed stet dignissim sit sanctus in eros.
Et laoreet odio sanctus ea.
Sea in dolores diam tincidunt labore sea stet vero dolor ut est.
At aliquyam diam facilisis lorem et takimata et volutpat eros erat ipsum velit labore sed ea illum.
Dolor lorem sed et volutpat exerci gubergren gubergren tempor quis ea eirmod eos ut dolor autem ipsum accumsan.`;
Deno.test("1 All", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCII(sample1), false);
});
Deno.test("1 Control", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIControl(sample1), false);
});
Deno.test("1 Printable", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIPrintable(sample1), false);
});
Deno.test("2 All", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCII(sample2), false);
});
Deno.test("2 Control", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIControl(sample2), false);
});
Deno.test("2 Printable", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIPrintable(sample2), false);
});
Deno.test("3 All", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCII(sample3), true);
});
Deno.test("3 Control", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIControl(sample3), false);
});
Deno.test("3 Printable", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIPrintable(sample3), true);
});
Deno.test("4 All", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCII(sample4), true);
});
Deno.test("4 Control", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIControl(sample4), true);
});
Deno.test("4 Printable", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIPrintable(sample4), true);
});
Deno.test("5 All", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCII(sample5), true);
});
Deno.test("5 Control", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIControl(sample5), false);
});
Deno.test("5 Printable", { permissions: "none" }, () => {
	deepStrictEqual(isStringASCIIPrintable(sample5), false);
});
