import { useState } from "react";
import { BorderRadius } from "./border-radius.model";

const initialRadiusState: BorderRadius = {
    topLeft: "0px",
    topRight: "0px",
    bottomLeft: "0px",
    bottomRight: "0px",
  };

export function useRadiusState() {
    const [radius, setRadius] = useState<BorderRadius>(initialRadiusState);

    const updateTopLeft = (value: string) => {
        setRadius((prev) => {
          return { ...prev, topLeft: value };
        });
      };
    
      const updateTopRight = (value: string) => {
        setRadius((prev) => {
          return { ...prev, topRight: value };
        });
      };
    
      const updateBottomLeft = (value: string) => {
        setRadius((prev) => {
          return { ...prev, bottomLeft: value };
        });
      };
    
      const updateBottomRight = (value: string) => {
        setRadius((prev) => {
          return { ...prev, bottomRight: value };
        });
      };
    
    return { radius, updateTopLeft, updateTopRight, updateBottomLeft, updateBottomRight };
}