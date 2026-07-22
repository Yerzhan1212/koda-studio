import { T } from "../../theme";


export default function Frame({ children, className = "", style = {}, ...rest }) {
  return (
    <div
      className={`relative border group ${className}`}
      style={{ borderColor: T.line, borderRadius: 6, ...style }}
      {...rest}
    >
      <span className="frame-corner" style={{ top: -1, left: -1, borderRight: "none", borderBottom: "none" }} />
      <span className="frame-corner" style={{ top: -1, right: -1, borderLeft: "none", borderBottom: "none" }} />
      <span className="frame-corner" style={{ bottom: -1, left: -1, borderRight: "none", borderTop: "none" }} />
      <span className="frame-corner" style={{ bottom: -1, right: -1, borderLeft: "none", borderTop: "none" }} />
      {children}
    </div>
  );
}
