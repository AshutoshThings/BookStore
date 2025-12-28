import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.api-ninjas.com/v2/quotes", {
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
          },
        });

        const data = await res.json();

        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <p className="text-center py-24">Loading quote...</p>;
  }

  if (error) {
    return <p className="text-center py-24">Failed to load quote.</p>;
  }

  return (
    <section className="bg-[#F7F5EE] py-24 flex justify-center">
      <div className="max-w-3xl text-center px-6">
        <h2 className="text-4xl font-serif text-gray-800">Quote Of The Day</h2>

        <div className="w-16 h-[2px] bg-[#7A6A3A] mx-auto my-6" />

        <p className="text-xl text-gray-600 leading-relaxed mt-10">“{quote}”</p>

        <p className="mt-16 text-lg text-gray-500 font-serif">{author}</p>
      </div>
    </section>
  );
};
export default Quote;
