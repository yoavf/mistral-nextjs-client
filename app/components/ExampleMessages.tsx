import { useEffect, useState } from "react";

interface Props {
  count: number;
  onClick: (text: string) => Promise<void>;
}

export default function ExampleMessages({ onClick, count }: Props) {
  const exampleMessages = [
    "Explain quantum computing in simple terms",
    "Got any creative ideas for a 10 year old's birthday?",
    "How do I make an HTTP request in Javascript?",
    "What is the Fermi Paradox and what are its implications?",
    "How does an airplane fly? Explain the aerodynamics in simple terms.",
    "What's an example of a paradox that's hard to understand but true?",
    "Explain the theory behind time travel. Is it scientifically plausible?",
    "What are some effective strategies for conflict resolution?",
    "Compose a haiku poem about artificial intelligence.",
  ];

  const [randomExamples, setRandomExamples] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = [...exampleMessages].sort(() => 0.5 - Math.random());
    setRandomExamples(shuffled.slice(0, count));
  }, [count]);

  return (
    <>
      {randomExamples.map((content, index) => (
        <p
          key={index}
          className="text-gray-500 cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={() => onClick(content)}
        >
          {content}
        </p>
      ))}
    </>
  );
}
