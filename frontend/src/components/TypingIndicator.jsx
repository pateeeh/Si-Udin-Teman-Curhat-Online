export default function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="max-w-[80%] md:max-w-[60%]">
        <div className="bg-white rounded-2xl rounded-bl-md px-5 py-4 shadow-md border border-gray-100">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
