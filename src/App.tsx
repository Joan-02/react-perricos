import './App.css'

function App() {

  return (
    <>
      <div className='dog-list'>
        <div className='dog-card'>
          <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnJvfGVufDB8fDB8fHww" alt="" />
          <div className='dog_votes'>
            <span className='count-like'>0❤️</span>
            <span className='count-dislike'>0🤮</span>
          </div>
          <div className='dog_buttons'>
            <button className='button-like'>Like perrico</button>
            <button className='button-dislike'>Dislike perrico</button>
          </div>
        </div>
        <div className='dog-card'>
          <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnJvfGVufDB8fDB8fHww" alt="" />
          <div className='dog_votes'>
            <span className='count-like'>0❤️</span>
            <span className='count-dislike'>0🤮</span>
          </div>
          <div className='dog_buttons'>
            <button className='button-like'>Like perrico</button>
            <button className='button-dislike'>Dislike perrico</button>
          </div>
        </div>
        <div className='dog-card'>
          <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnJvfGVufDB8fDB8fHww" alt="" />
          <div className='dog_votes'>
            <span className='count-like'>0❤️</span>
            <span className='count-dislike'>0🤮</span>
          </div>
          <div className='dog_buttons'>
            <button className='button-like'>Like perrico</button>
            <button className='button-dislike'>Dislike perrico</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
