import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import './App.css';

function App() {
  const [isPageLong, setIsPageLong] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div style={{ margin: '2rem', padding: '1rem', borderRadius: '0.25rem', outline: '0.25rem solid #333', height: isPageLong ? '110vh' : '20vh' }}>
      <p>isPageLong: {String(isPageLong)}</p>
      <button onClick={() => setIsPageLong(!isPageLong)}>Toggle page length</button>
      <button onClick={() => setIsDialogOpen(true)}>Open dialog/modal</button>
      <Dialog
        as="div"
        style={{ position: 'fixed', top: '0', bottom: '0', left: '0', right: '0' }}
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <Dialog.Overlay
          style={{ position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />

        <div style={{ margin: '2rem', padding: '1rem', backgroundColor: 'white', position: 'relative', zIndex: 10,  borderRadius: '0.25rem' }} className="p-8 my-16 bg-white rounded shadow relative z-10 overflow-auto">
          <Dialog.Title>I am the modal content</Dialog.Title>
          <Dialog.Description>I want to match up with the outline behind (which I am {isPageLong && 'not'} doing now)</Dialog.Description>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
