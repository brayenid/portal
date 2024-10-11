"use client";

import Container from "@/components/ui/container";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const env = process.env.NODE_ENV;
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto bg-gray-100 p-6 rounded-lg border-4 border-dashed">
        <h1>500</h1>
        <h2 className="font-bold uppercase tracking-widest">Oops</h2>
        <div className="gap-y-4">
          <div>
            <p>
              Telah terjadi kesalahan, Tim PKRBT Developer akan berusaha
              memperbaiki kesalahan ini.
            </p>
          </div>
          {"development" === env && (
            <div>
              <h1>{error.digest}</h1>
              <p>{error.message}</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
