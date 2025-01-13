import { Handle, Position } from "@xyflow/react"; //type NodeProps
import { StyledNode } from "./CustomNode.styles";
import type { NodeProps } from "@xyflow/react";

export function CustomNode({
  data,
  positionAbsoluteX,
  positionAbsoluteY,
}: NodeProps) {
  return (
    <StyledNode>
      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>hj-custom-node!</span>
        <span>{`label-${data.label}`}</span>
        <span>{`(x, y) : (${positionAbsoluteX}, ${positionAbsoluteY})`}</span>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </StyledNode>
  );
}
