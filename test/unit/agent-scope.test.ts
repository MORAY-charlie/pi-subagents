import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { resolveExecutionAgentScope } from "../../src/agents/agent-scope.ts";

describe("resolveExecutionAgentScope", () => {
	it("defaults to user when scope is omitted", () => {
		assert.equal(resolveExecutionAgentScope(undefined), "user");
	});

	it("passes through explicit scopes", () => {
		assert.equal(resolveExecutionAgentScope("user"), "user");
		assert.equal(resolveExecutionAgentScope("project"), "project");
		assert.equal(resolveExecutionAgentScope("both"), "both");
	});

	it("falls back to user for invalid scopes", () => {
		assert.equal(resolveExecutionAgentScope("invalid"), "user");
		assert.equal(resolveExecutionAgentScope(""), "user");
	});
});
