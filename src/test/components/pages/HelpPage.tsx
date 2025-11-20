import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedResource, setExpandedResource] = useState<number | null>(null);

  const faqs = [
    {
      emoji: '❓',
      question: 'How do I vote?',
      fullAnswer: 'Navigate to the Ballot tab at the bottom of your screen. Select the active election you want to participate in. Follow the on-screen prompts to review candidates and cast your vote securely.'
    },
    {
      emoji: '🔑',
      question: 'Reset password?',
      fullAnswer: "Tap on your profile picture in the top right corner, go to Profile Settings, and select 'Change Password'. You'll need to enter your current password and choose a new one."
    },
    {
      emoji: '🔄',
      question: 'Submit vote?',
      fullAnswer: 'After you submit your vote, it is immediately counted and encrypted. You will receive a confirmation receipt with a unique ID that you can use to verify your vote was recorded.'
    },
    {
      emoji: '🔒',
      question: 'Is my vote secure?',
      fullAnswer: 'Yes, all votes are encrypted using industry-standard security protocols. Your vote is anonymous and cannot be traced back to you once submitted.'
    },
    {
      emoji: '⏰',
      question: 'When can I vote?',
      fullAnswer: 'You can vote anytime during the active voting period for each election. Check the election details for specific start and end dates. The system is available 24/7.'
    },
    {
      emoji: '📧',
      question: 'Will I get confirmation?',
      fullAnswer: 'Yes, after submitting your vote, you will receive an instant confirmation screen with a receipt ID. You can also view your voting history in your profile settings.'
    }
  ];

  const resources = [
    {
      title: 'Voting Guidelines',
      description: 'Find out the rules and procedures for voting in your elections.',
      image: 'https://images.unsplash.com/photo-1706949536460-4f02e6f47b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b3RpbmclMjBib290aCUyMGd1aWRlfGVufDF8fHx8MTc2MzUwMzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        'Each student is eligible to vote once per election',
        'Voting is anonymous and secure - your identity is protected',
        'You must complete all steps in the voting process',
        'Votes cannot be changed once submitted',
        'Make sure to review your selections before final submission',
        'Keep your receipt ID for verification purposes'
      ]
    },
    {
      title: 'Support Hours',
      description: 'Our support team is available from 9 AM to 5 PM, Monday to Friday.',
      image: 'https://images.unsplash.com/photo-1759392790299-a8874cabc000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBkZXNrfGVufDF8fHx8MTc2MzQ5MDMyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Email support available 24/7',
        'Average response time: 2-4 hours during business hours',
        'Emergency support available during active voting periods',
        'Live chat available during peak election times',
        'Contact us: support@campusballot.edu or (555) 123-4567'
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.fullAnswer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full bg-white overflow-y-auto pb-24"
      style={{ scrollbarWidth: 'none' }}
    >
      <style>{`::-webkit-scrollbar { display: none; }`}</style>

      {/* Search Section */}
      <div className="px-6 pt-4 pb-3">
        <p className="text-gray-900 font-medium text-sm mb-2">Search a question…</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Type your question here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8c1d40]/20 focus:border-[#8c1d40]"
          />
        </div>
        <p className="text-gray-400 text-xs mt-1">
          {searchQuery ? `${filteredFaqs.length} result${filteredFaqs.length !== 1 ? 's' : ''} found` : 'Find answers quickly'}
        </p>
      </div>

      {/* FAQs Section */}
      <div className="px-6 pt-4 pb-3">
        <h2 className="text-gray-900 font-medium text-lg mb-3">FAQs</h2>
        {filteredFaqs.length > 0 ? (
          <div className="space-y-0">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-100 py-3 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start gap-3">
                  {/* Emoji Icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center text-lg">
                    {faq.emoji}
                  </div>
                  
                  {/* Question & Answer */}
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 text-sm font-normal mb-0.5">{faq.question}</p>
                    <AnimatePresence mode="wait">
                      {expandedFaq === index ? (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-600 text-xs mt-2"
                        >
                          {faq.fullAnswer}
                        </motion.p>
                      ) : (
                        <p className="text-gray-400 text-xs">Read more</p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm">No FAQs match your search</p>
            <p className="text-gray-400 text-xs mt-1">Try different keywords</p>
          </div>
        )}
      </div>

      {/* Contact Support Buttons */}
      <div className="px-6 py-4 space-y-3">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white border-2 border-[#8c1d40] text-gray-900 font-medium py-3 rounded-xl transition-colors hover:bg-gray-50"
          onClick={() => window.location.href = 'mailto:support@campusballot.edu'}
        >
          Email Us
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#8c1d40] text-white font-medium py-3 rounded-xl transition-colors hover:bg-[#7a1a38]"
          onClick={() => window.location.href = 'tel:555-123-4567'}
        >
          Contact Student Elections Support
        </motion.button>
      </div>

      {/* Additional Resources Section */}
      <div className="px-6 pt-4 pb-6">
        <h2 className="text-gray-900 font-medium text-lg mb-3">Additional Resources</h2>
        <div className="space-y-0">
          {resources.map((resource, index) => (
            <div key={index}>
              <motion.div
                className="border-b border-gray-100 py-3 flex items-start gap-3 cursor-pointer"
                whileTap={{ scale: 0.99 }}
                onClick={() => setExpandedResource(expandedResource === index ? null : index)}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 text-base font-medium mb-1">{resource.title}</p>
                  <p className="text-gray-500 text-xs">{resource.description}</p>
                  {expandedResource !== index && (
                    <p className="text-[#8c1d40] text-xs mt-1 font-medium">Read more</p>
                  )}
                </div>
              </motion.div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedResource === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 py-3 bg-gray-50 rounded-lg mx-3 mb-3">
                      <ul className="space-y-2">
                        {resource.details.map((detail, idx) => (
                          <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                            <span className="text-[#8c1d40] mt-0.5">•</span>
                            <span className="flex-1">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}