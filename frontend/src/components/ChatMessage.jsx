import ReactMarkdown from 'react-markdown'

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-slide-up`}>
      <div className={`max-w-[80%] md:max-w-[60%]`}>
        <div
          className={`rounded-2xl px-5 py-3 shadow-md ${
            isUser
              ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-md'
              : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
          }`}
        >
          {isUser ? (
            <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">
              {message.text}
            </p>
          ) : (
            <div className="text-[15px] leading-relaxed prose prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="ml-1">{children}</li>,
                  h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                  code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-3 italic">{children}</blockquote>,
                }}
              >
                {message.text}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
