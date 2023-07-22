import Link from "next/link";
import React from "react";

export const BreadCrumbs = () => {
  const path = [
    {
      name: "Admin",
      path: "/admin",
    },
    {
      name: "Profile",
      path: "/",
    },
  ];
  return (
    <div className="font-mono text-sm">
      {path &&
        path.map((x, index) => {
          return (
            <React.Fragment key={index}>
              {x.path === "/" ? (
                <span>{x.name}&nbsp;</span>
              ) : (
                <Link href={x.path}>{x.name}</Link>
              )}
              {path.length !== index + 1 && <span className="px-2">/</span>}
            </React.Fragment>
          );
        })}
    </div>
  );
};
