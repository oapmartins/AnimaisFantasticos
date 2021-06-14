export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        
        events.forEach(userEvent => {
            setTimeout(()=> html.addEventListener(userEvent, handleOutsideClick), 0);
            element.setAttribute(outside, '');
        });
    }

    function handleOutsideClick(event) {

        if (!element.contains(event.target)) {
            events.forEach(userEvent => {
                element.removeAttribute(outside, '')
                html.removeEventListener(userEvent, handleOutsideClick)
                callback();
            });
        }
    }
}