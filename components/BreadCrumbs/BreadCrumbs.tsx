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
    <div className="w-full h-full">
      {path &&
        path.map((x, index) => {
          return (
            <>
              {x.path === "/" ? (
                <span>{x.name}&nbsp;</span>
              ) : (
                <a href={x.path}>{x.name}</a>
              )}
              {path.length !== index + 1 && <span className="px-2">/</span>}
            </>
          );
        })}
    </div>
  );
};
