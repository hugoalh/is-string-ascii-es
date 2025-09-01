import { deepStrictEqual } from "node:assert";
import {
	isStringASCII,
	isStringASCIIControl,
	isStringASCIIPrintable
} from "./mod.ts";
interface TesterExpects {
	all: boolean;
	control: boolean;
	printable: boolean;
}
async function tester(t: Deno.TestContext, item: string, expects: TesterExpects): Promise<void> {
	await t.step("All", () => {
		deepStrictEqual(isStringASCII(item), expects.all);
	});
	await t.step("Control", () => {
		deepStrictEqual(isStringASCIIControl(item), expects.control);
	});
	await t.step("Printable", () => {
		deepStrictEqual(isStringASCIIPrintable(item), expects.printable);
	});
}
Deno.test("1", { permissions: "none" }, async (t) => {
	await tester(t, "日本語", {
		all: false,
		control: false,
		printable: false
	});
});
Deno.test("2", { permissions: "none" }, async (t) => {
	await tester(t, "👀", {
		all: false,
		control: false,
		printable: false
	});
});
Deno.test("3", { permissions: "none" }, async (t) => {
	await tester(t, "Hello, world!", {
		all: true,
		control: false,
		printable: true
	});
});
Deno.test("4", { permissions: "none" }, async (t) => {
	await tester(t, "", {
		all: true,
		control: true,
		printable: true
	});
});
Deno.test("5", { permissions: "none" }, async (t) => {
	await tester(t, `Wisi sed et at vero eos nostrud volutpat sed stet dignissim sit sanctus in eros.
Et laoreet odio sanctus ea.
Sea in dolores diam tincidunt labore sea stet vero dolor ut est.
At aliquyam diam facilisis lorem et takimata et volutpat eros erat ipsum velit labore sed ea illum.
Dolor lorem sed et volutpat exerci gubergren gubergren tempor quis ea eirmod eos ut dolor autem ipsum accumsan.`, {
		all: true,
		control: false,
		printable: false
	});
});
