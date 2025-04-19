import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <zapier-interfaces-chatbot-embed
      is-popup="true"
      chatbot-id="cm9oflrzq00b9lmbwru7libun"
    ></zapier-interfaces-chatbot-embed>
  );
};

export default Chatbot;
