import { useState } from "react";
import { FALLBACK_IMAGE } from "../images.js";

// <img> with lazy loading and a built-in fallback if the remote image fails.
export default function SmartImage({ src, alt, className = "", eager = false, ...rest }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? FALLBACK_IMAGE : src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
