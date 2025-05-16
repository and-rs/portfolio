import { Fragment } from "react";
import StackIcon from "tech-stack-icons";

const data = [
  {
    id: 1,
    label: "Frontend",
    value: (
      <div className="flex gap-4">
        <div className="flex gap-2 items-center w-fit">
          React
          <StackIcon className="size-5" name="reactjs" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          Next.js
          <StackIcon className="size-5" name="nextjs2" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          SolidJS
          <StackIcon className="size-5" name="solidjs" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          Tailwind
          <StackIcon className="size-5.5" name="tailwindcss" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Backend",
    value: (
      <div className="flex gap-4">
        <div className="flex gap-2 items-center w-fit">
          Node.js
          <StackIcon className="size-5" name="nodejs" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          Bun
          <StackIcon className="size-5" name="bunjs" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          PostgreSQL
          <StackIcon className="size-5" name="postgresql" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "DevOps",
    value: (
      <div className="flex gap-4">
        <div className="flex gap-2 items-center w-fit">
          AWS
          <StackIcon className="size-5" name="amznwebserv" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          Git
          <StackIcon className="size-5" name="git" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          Docker
          <StackIcon className="size-5.5" name="docker" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    label: "Languages",
    value: (
      <div className="flex gap-4">
        <div className="flex gap-2 items-center w-fit">
          TypeScript
          <StackIcon className="size-4.5" name="typescript" />
        </div>
        <div className="flex gap-2 items-center w-fit">
          Python
          <StackIcon className="size-5" name="python" />
        </div>
      </div>
    ),
  },
];

export default function StacksTable() {
  return (
    <div className="grid grid-cols-4 mt-4 rounded-lg border divide-y divide-x">
      {data.map((item) => (
        <Fragment key={item.id}>
          <div
            className={`p-2 ${item.id === 4 && "border-b border-b-transparent"}`}
          >
            {item.label}
          </div>
          <div
            className={`p-2 col-span-3 ${item.id === 1 || item.id === 2 ? "border-r border-r-transparent" : ""}`}
          >
            {item.value}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
