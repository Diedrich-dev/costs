import { useState, useEffect } from "react";
import styles from "./Message.module.css";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    } else {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [msg]);

  return (
    <>
      {visible && (
        <div
          className={`w-full p-4 border border-solid border-black m-0-auto text-center mb-8 rounded ${styles[type]}`}
        >
          {msg}
        </div>
      )}
    </>
  );
}

export default Message;
