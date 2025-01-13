import type { Node, BuiltInNode } from "@xyflow/react";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type CustomNode = Node<{ label: string }, "custom-node">;
export type AppNode = BuiltInNode | PositionLoggerNode | CustomNode;
