# DecapModal

A React modal component package built with TypeScript and Vite.

## Installation

```bash
bun install
```

## Development

```bash
# Start development server
bun run dev

# Run tests
bun run test

# Run tests in watch mode
bun run test:watch

# Build for production
bun run build

# Type checking
bun run type-check
```

## Usage

```tsx
import React from 'react'
import { DecapModal, useModal } from 'decapmodal'

function App() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      
      <DecapModal isOpen={isOpen} onClose={closeModal} title="My Modal">
        <p>Modal content goes here</p>
      </DecapModal>
    </div>
  )
}
```

## API

### DecapModal Props

- `isOpen: boolean` - Controls modal visibility
- `onClose: () => void` - Callback when modal should close
- `children: React.ReactNode` - Modal content
- `title?: string` - Optional modal title

### useModal Hook

Returns an object with:
- `isOpen: boolean` - Current modal state
- `openModal: () => void` - Function to open modal
- `closeModal: () => void` - Function to close modal
- `toggleModal: () => void` - Function to toggle modal state