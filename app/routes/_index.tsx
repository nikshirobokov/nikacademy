import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Школа Ника" },
    {
      name: "description",
      content:
        "Авторские курсы по JavaScript, NodeJS и прочим веб-технологиям, таким как React, TypeScript, Remix, Expo и другие!",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Школа Ника</h1>
      <p>Добро пожаловать!</p>
    </div>
  );
}
