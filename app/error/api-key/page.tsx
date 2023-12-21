import React from "react";

export default function ErrorAPIKey() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">API Key Needed</h1>
      <p className="text-lg mb-4">
        Please set the <code>MISTRAL_API_KEY</code> environment variable before
        running this application.
      </p>
      <p className="text-lg">
        Add it to your <code>.env</code> file or run the following command in
        your terminal:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg mt-4">
        <code>export MISTRAL_API_KEY=your_api_key</code>
      </pre>
    </div>
  );
}
