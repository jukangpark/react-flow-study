import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { CustomNode } from "./CustomNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "drag me!" },
  },
  { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "with React Flow" },
  },
  {
    id: "hj-a",
    type: "input",
    position: { x: 300, y: 50 },
    data: { label: "hj-a" },
  },
  {
    id: "hj-b",
    type: "custom-node",
    position: { x: 300, y: 120 },
    data: { label: "hj-b" },
  },
  {
    id: "hj-c",
    type: "output",
    position: { x: 300, y: 300 },
    data: { label: "hj-c" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "custom-node": CustomNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
