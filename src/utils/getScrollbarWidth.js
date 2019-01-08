import isScrollbarRequired from './isScrollbarRequired';

export default function getScrollbarWidth() {
    const realScrollbarWidth = isScrollbarRequired();
    return realScrollbarWidth || 8;
}
