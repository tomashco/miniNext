import { TypographyH2 } from "@/components/typography";
import { Suspense } from "react";

export const streaming = true;

export default function Index() {
  return (
    <Suspense fallback={<TypographyH2>Waiting for content</TypographyH2>}>
      <Message />
    </Suspense>
  );
}

function Message() {
  const message = afterSeconds({
    id: "index",
    message: "Delayed by Suspense API",
    seconds: 5,
  });
  return <TypographyH2>{message}</TypographyH2>;
}

const delays = new Map();

function afterSeconds({
  id,
  message,
  seconds,
}: {
  id: string;
  message: string;
  seconds: number;
}) {
  const delay = delays.get(id);
  if (delay) {
    if (delay.message) {
      delays.delete(id);
      return delay.message;
    }
    if (delay.promise) {
      throw delay.promise;
    }
  } else {
    delays.set(id, {
      message: null,
      promise: new Promise((resolve) => {
        setTimeout(() => {
          delays.get(id).message = message;
          resolve(message);
        }, seconds * 1000);
      }),
    });
    return afterSeconds({ id, message, seconds });
  }
}
