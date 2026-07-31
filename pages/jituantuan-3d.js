import Script from 'next/script'

export default function Jituantuan3D() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive"
      />

      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#f5f5f5'
        }}
      >
        <model-viewer
          src="/models/jituantuan.glb"
          alt="冀团团3D模型"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          style={{
            width: '100%',
            maxWidth: '900px',
            height: '80vh'
          }}
        />
      </main>
    </>
  )
}
