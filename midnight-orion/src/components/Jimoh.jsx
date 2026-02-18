import React, { useEffect } from 'react';

const Jimoh = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
        script.async = true;
        script.type = "text/javascript";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="jimoh-widget-container">
            {/* ElevenLabs Widget */}
            <elevenlabs-convai agent-id="agent_8801kdtf33y2fybasrew7fkbnbzt"></elevenlabs-convai>
        </div>
    );
};

export default Jimoh;
