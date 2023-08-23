import { useEffect, useState } from 'react'
import './App.css'
import { pronouns } from './pronouns';

function App() {
  const [text, setText] = useState('');
  const [numbers, setNumbers]= useState({
    words:0,
    characters:0,
    sentences:0,
    paragraphs:0,
    pronouns:0
  })

  function charCount (){
    const char = text.length
    return char;
  }

  function wordCount(){
    const trimming = text.trim(); 
    const words = trimming.split(/\s+/);
    const filtered = words.filter(word=>word !=='')
    return filtered.length;
  }

  function sentenceCount(){
    const sentences = text.split(/[.!?]+/);
    const filteredSentences = sentences.filter(
      (sentence) => sentence.trim() !== ''
    )
    return filteredSentences.length
  }

  function paragraphCount (){
    const paragraphs = text.split(/\n+/)
    const filteredParagraphs = paragraphs.filter(
      (paragraph) => paragraph.trim() !== ''
    )
  return filteredParagraphs.length
  }

function pronounCount(pronouns) {
  const matchingElements = pronouns.filter(item=>text.includes(item))
  return matchingElements.length;
}

  useEffect(()=>{
    const numOfWords = wordCount();
    const numOfChars = charCount();
    const numOfSentences = sentenceCount();
    const numOfParagraphs = paragraphCount();
    const numOfPronouns = pronounCount(pronouns)
    setNumbers({words:numOfWords,characters:numOfChars, sentences:numOfSentences,paragraphs:numOfParagraphs,pronouns:numOfPronouns});
  },[text])

  return (
    <>
    <div className='result-bar'>
      <span>Number of words: {numbers.words}</span>
      <span>Number of characters: {numbers.characters}</span>
      <span>Number of sentences: {numbers.sentences}</span>
      <span>Number of paragraphs: {numbers.paragraphs}</span>
      <span>Number of pronouns: {numbers.pronouns}</span>
    </div>
      <h2>Input:</h2>
      <textarea className='text-area'onChange={(e) => setText(e.target.value)}></textarea>
    </>
  )
}

export default App
