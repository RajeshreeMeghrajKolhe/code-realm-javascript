export default function() {
    const topics = {};
    const subscribe = (topic, handler) => {
        if(!topics[topic]) {
            topics[topic] = [];
        } else {
            topics[topic].push(handler);
        }
    }
}