import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import MoodSelector from './components/MoodSelector'
import ChatHeader from './components/ChatHeader'
import ChatMessage from './components/ChatMessage'
import ChatInput from './components/ChatInput'
import TypingIndicator from './components/TypingIndicator'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

function App() {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [selectedMood, setSelectedMood] = useState(null)
  const [showMoodSelector, setShowMoodSelector] = useState(true)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood)
    setShowMoodSelector(false)
    
    const welcomeMessage = {
      role: 'model',
      text: `Hai! Aku Udin, teman curhatmu. Aku lihat kamu lagi ${mood.label.toLowerCase()} ya? Tenang aja, cerita aja ke aku. Aku di sini buat dengerin kamu`
    }
    setMessages([welcomeMessage])
  }

  const handleSendMessage = async (text) => {
    if (!text.trim()) return

    const userMessage = { role: 'user', text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsTyping(true)

    try {
      console.log('Sending to:', `${API_URL}/api/chat`)
      console.log('Payload:', { conversation: updatedMessages })
      
      const response = await axios.post(`${API_URL}/api/chat`, {
        conversation: updatedMessages
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log('Response:', response.data)

      const aiMessage = {
        role: 'model',
        text: response.data.result
      }

      setMessages([...updatedMessages, aiMessage])
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message)
      
      let errorText = 'Maaf, aku lagi ada gangguan nih. Coba lagi ya? 🙏'
      
      if (error.response?.data?.error) {
        errorText = `Error: ${error.response.data.error}`
      } else if (error.message === 'Network Error') {
        errorText = 'Koneksi ke server gagal. Pastikan backend sudah berjalan di ' + API_URL
      }
      
      const errorMessage = {
        role: 'model',
        text: errorText
      }
      setMessages([...updatedMessages, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleReset = () => {
    setMessages([])
    setSelectedMood(null)
    setShowMoodSelector(true)
  }

  if (showMoodSelector) {
    return <MoodSelector onSelectMood={handleMoodSelect} />
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <ChatHeader mood={selectedMood} onReset={handleReset} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-hide">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  )
}

export default App
