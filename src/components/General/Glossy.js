import React from "react";

export default function Glossy({ bg, position, children, paddingInline }) {
  return (
    <>
      <div className="GlossyParent">
        <div
          className="Glossy"
          style={{ backgroundImage: bg, backgroundPosition: position }}
        >
          <div
            className="Glossy-inner"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: "100%",
              paddingInline: paddingInline ? "8.3vw" : "0vw",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
