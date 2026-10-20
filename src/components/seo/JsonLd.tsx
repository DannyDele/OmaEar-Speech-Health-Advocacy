type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Schema.org JSON-LD must be the raw text of a <script> tag, not React children.
 * React only lets us set that text with dangerouslySetInnerHTML. The < replace
 * stops a </script> sequence in the JSON from closing the tag early.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
