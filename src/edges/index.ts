import type { Edge, EdgeTypes } from "@xyflow/react";

export const initialEdges: Edge[] = [
  { id: "a->c", source: "a", target: "c", animated: true },
  { id: "b->d", source: "b", target: "d" },
  { id: "c->d", source: "c", target: "d", animated: true },
  { id: "hj-a->hj-b", source: "hj-a", target: "hj-b" },
  { id: "hj-b->hj-c", source: "hj-b", target: "hj-c", animated: true },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
