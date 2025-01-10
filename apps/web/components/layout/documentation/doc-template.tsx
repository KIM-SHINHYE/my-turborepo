"use client";

import { Code2 } from "lucide-react";
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  variant?: "default" | "live-example" | "scroll-example";
  children?: React.ReactNode;
  height?: string;
}

function CodeBlock({ code, variant = "default", children, height }: CodeBlockProps) {
  const [showCode, setShowCode] = useState(false);

  if (variant === "default") {
    return (
      <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
        <Highlight theme={themes.github} code={code} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    );
  }

  if (variant === "scroll-example") {
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Live Example</h3>
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
          >
            <Code2 className="w-4 h-4" />
            <span>{showCode ? "Hide Code" : "Show Code"}</span>
          </button>
        </div>

        <div className="border rounded-lg bg-gray-50">{children}</div>

        {showCode && (
          <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <Highlight theme={themes.github} code={code} language="tsx">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Live Example</h3>
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
        >
          <Code2 className="w-4 h-4" />
          <span>{showCode ? "Hide Code" : "Show Code"}</span>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {children}

        {showCode && (
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 overflow-auto">
            <Highlight theme={themes.github} code={code} language="tsx">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, overflow: "auto" }}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
}

interface DocTemplateProps {
  title: string;
  description: string | string[];
  quote?: boolean;
  children: React.ReactNode;
}

export function DocTemplate({ title, description, children, quote = false }: DocTemplateProps) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      {quote ? (
        Array.isArray(description) ? (
          <div className="mb-8 space-y-4">
            {description.map((item, index) => (
              <blockquote key={index} className="border-l-4 border-gray-300 pl-4">
                <p className="text-lg text-gray-700">{item}</p>
              </blockquote>
            ))}
          </div>
        ) : (
          <blockquote className="mb-8 border-l-4 border-gray-300 pl-4">
            <p className="text-lg text-gray-700">{description}</p>
          </blockquote>
        )
      ) : (
        Array.isArray(description) ? (
          <ul className="mb-8 space-y-2 list-disc list-inside text-lg text-gray-700">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-lg mb-8 text-gray-700">{description}</p>
        )
      )}

      {children}
    </div>
  );
}

export { CodeBlock };
