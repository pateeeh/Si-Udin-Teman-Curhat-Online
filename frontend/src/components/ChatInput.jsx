import { useState } from 'react'

export default function ChatInput({ onSendMessage, disabled }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Cerita apa aja ke aku..."
              disabled={disabled}
              rows="1"
              className="w-full px-5 py-3 pr-12 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none resize-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed shadow-sm"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>
          
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className="bg-gradient-to-r from-primary to-secondary text-white rounded-full p-3 hover:shadow-xl transform hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex-shrink-0 shadow-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-2">
          Tekan Enter untuk kirim • Shift+Enter untuk baris baru
        </p>
      </form>
    </div>
  )
}
