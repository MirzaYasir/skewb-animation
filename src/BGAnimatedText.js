import React from "react";
import { motion } from "framer-motion";

const BGAnimatedText = ({ paragraph, isBtnClicked }) => {
    const words = paragraph.split(" ");
    const wordsPerChunk = 3;
    const numChunks = Math.ceil(words.length / wordsPerChunk);
    const textChunks = [];

    for (let i = 0; i < numChunks; i++) {
        const startIdx = i * wordsPerChunk;
        const endIdx = Math.min((i + 1) * wordsPerChunk, words.length);
        const chunkWords = words.slice(startIdx, endIdx);
        const chunkText = chunkWords.join(" ");
        textChunks.push(chunkText);
    }

    return (
        isBtnClicked &&
        <div style={{zIndex: 0, position: 'static'}}>
            {textChunks.map((chunk, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0.1, x: -100, color: "rgba(255, 255, 255, 0.3)" }}
                    animate={{ opacity: 1, x: "100%", color: "rgba(255, 255, 255, 0.3)", transition: { duration: 50, repeat: Infinity, repeatType: "reverse" } }}
                    style={{ position: "absolute", top: index * 100, left: 0 }}
                >
                    <h2 style={{ margin: 0, fontSize: 70, letterSpacing: 10, fontWeight: 600, marginBottom: 50 }}>{chunk}</h2>
                </motion.div>
            ))}
        </div>
    );
};


export default BGAnimatedText;