import { Fragment } from "react";
import BunIcon from "../../../icons/bun";
import DockerIcon from "../../../icons/docker";
import Ec2Icon from "../../../icons/ec2";
import LambdaIcon from "../../../icons/lambda";
import NextjsIcon from "../../../icons/nextjs";
import NodejsIcon from "../../../icons/nodejs";
import PostgresqlIcon from "../../../icons/postgresql";
import PythonIcon from "../../../icons/python";
import RdsIcon from "../../../icons/rds";
import ReactIcon from "../../../icons/react";
import SolidjsIcon from "../../../icons/solidjs";
import TailwindIcon from "../../../icons/tailwind";
import TypescriptIcon from "../../../icons/typescript";
import { Badge } from "./ui/badge";

const data = [
  {
    id: 1,
    label: <span className="text-lg">Frontend</span>,
    value: (
      <div className="flex flex-wrap gap-4">
        <Badge variant={"icon"}>
          React
          <ReactIcon />
        </Badge>
        <Badge variant={"icon"}>
          Next.js
          <NextjsIcon />
        </Badge>
        <Badge variant={"icon"}>
          SolidJS
          <SolidjsIcon />
        </Badge>
        <Badge variant={"icon"}>
          Tailwind
          <TailwindIcon />
        </Badge>
      </div>
    ),
  },
  {
    id: 2,
    label: <span className="text-lg">Backend</span>,
    value: (
      <div className="flex gap-4">
        <Badge variant={"icon"}>
          Node.js
          <NodejsIcon />
        </Badge>
        <Badge variant={"icon"}>
          Bun
          <BunIcon />
        </Badge>
        <Badge variant={"icon"}>
          PostgreSQL
          <PostgresqlIcon />
        </Badge>
      </div>
    ),
  },
  {
    id: 3,
    label: <span className="text-lg">DevOps</span>,
    value: (
      <div className="flex gap-4">
        <Badge variant={"icon"}>
          Lambda
          <LambdaIcon />
        </Badge>
        <Badge variant={"icon"}>
          EC2
          <Ec2Icon />
        </Badge>
        <Badge variant={"icon"}>
          RDS
          <RdsIcon />
        </Badge>
        <Badge variant={"icon"}>
          Docker
          <DockerIcon />
        </Badge>
      </div>
    ),
  },
  {
    id: 4,
    label: <span className="text-lg">Languages</span>,
    value: (
      <div className="flex gap-4">
        <Badge variant={"icon"}>
          TypeScript
          <TypescriptIcon />
        </Badge>
        <Badge variant={"icon"}>
          Python
          <PythonIcon />
        </Badge>
      </div>
    ),
  },
];

export default function StacksTable() {
  return (
    <div className="hidden mt-12 space-y-4 md:block">
      <h1 className="text-2xl font-medium tracking-tighter leading-none text-foreground">
        Technical Skills
      </h1>
      <div className="grid grid-cols-4 rounded-lg border divide-y divide-x text-md">
        {data.map((item) => (
          <Fragment key={item.id}>
            <div
              className={`p-4 h-16 flex items-center ${item.id === 4 && "border-b border-b-transparent"}`}
            >
              {item.label}
            </div>
            <div
              className={`p-4 h-16 flex items-center col-span-3 ${item.id === 1 || item.id === 2 ? "border-r border-r-transparent" : ""}`}
            >
              {item.value}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
