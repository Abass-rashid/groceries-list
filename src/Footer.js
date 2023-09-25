import React from 'react'
export default function Footer() {
  const today = new Date()
  return (
    <footer>
      <p>Copyright All right reserved: {today.getFullYear()} </p>
    </footer>
  )
}
