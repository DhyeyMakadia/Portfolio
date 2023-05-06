import React from "react";
import { externalLinkIcon, githubIcon } from "../../utils/icons";

export const Archive = () => {
  const listOfTech = [
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    ".NET Core",
    ".NET Core",
    ".NET Core",
    ".NET Core",
    ".NET Core",
  ];
  return (
    <section id="archive">
      <div>
        <h1 className="archive-heading">Archive</h1>
        <h2 className="archive-subheading">
          A big list of things I’ve worked on
        </h2>
      </div>
      <table className="table-auto archive-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Made at</th>
            <th>Build with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
          <tr className="table-row">
            <td className="year">2023</td>
            <td className="title">The Portfolio Website</td>
            <td className="made-at text-center lg:text-left">—</td>
            <td className="build-with">
              <ul>
                {listOfTech.length > 0 &&
                  listOfTech.map((i, index) => (
                    <>
                      <li>
                        {i}
                        {index <= listOfTech.length - 2 && <span>·</span>}
                      </li>
                    </>
                  ))}
              </ul>
            </td>
            <td className="app-link">
              <div>
                <i>{externalLinkIcon}</i>
                <i className="ml-2.5">{githubIcon}</i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default Archive;
