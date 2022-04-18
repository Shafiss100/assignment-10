import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "rgb(19, 19, 229)" : "rgb(132, 132, 229)",
          border: match
            ? "2px solid rgb(9, 9, 251)"
            : " 2px solid rgb(170, 170, 239)",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;