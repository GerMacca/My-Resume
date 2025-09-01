import { useEffect, useState } from 'react'

function ClipboardTooltip({ x, y, onDone }) {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false)
            setTimeout(onDone, 300)
        }, 1500)

        return () => clearTimeout(timeout)
    }, [onDone])

    return (
        <div
            style={{
                position: 'absolute',
                top: y - 30,
                left: x,
                transform: 'translateX(-50%)',
                background: 'var(--color-contrast)',
                color: 'var(--color-text)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        >
            Copiado!
        </div>
    )
}

export default ClipboardTooltip
